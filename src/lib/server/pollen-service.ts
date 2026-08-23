import { env } from '$env/dynamic/private';
import { CITIES } from '$lib/data/locations';
import type { PollenReading } from '$lib/types/pollen';
import { bucketCoords } from './cache-key';
import { fetchGooglePollen } from './google-pollen';
import { incCounter } from './metrics';
import { fetchOpenMeteoPollen } from './open-meteo';
import { syntheticReading } from './synthetic';

/**
 * Orchestrates the pollen lookup. Google for the cities, Open-Meteo
 * everywhere else, synthetic data when no API key is configured (local dev).
 *
 * Coordinates are bucketed before any upstream call so cache pressure stays
 * sane regardless of caller precision.
 *
 * Pass `countMetrics: false` to skip the per-source counter (used by the
 * /api/health probe so it doesn't count itself toward quota).
 */

const TIMEOUT_MS = 4_000;

/**
 * Per-instance memo of upstream responses, keyed by bucketed coordinates.
 *
 * The site serves ~1,260 location pages that fall into ~970 distinct 0.05°
 * buckets, and each ISR revalidation would otherwise be one upstream call. A
 * warm serverless instance handling a crawl sweep can answer neighbouring
 * towns — Barry, Penarth and Cardiff share a bucket — without going upstream
 * again. Instances are short-lived, so treat this as a bonus rather than the
 * thing keeping the bill down; PAID_BUCKETS below is what does that.
 *
 * TTL matches the ISR window (6 h) so a cached page never fronts data older
 * than the page's own revalidation period. Bounded so an instance that survives a
 * long time cannot grow without limit.
 */
const MEMO_TTL_MS = 6 * 60 * 60 * 1000;
const MEMO_MAX = 2_000;

interface MemoEntry {
	expires: number;
	fetchedAt: string;
	data: Omit<PollenReading, 'location' | 'fetchedAt'>;
}

const memo = new Map<string, MemoEntry>();

function memoGet(key: string): MemoEntry | undefined {
	const hit = memo.get(key);
	if (!hit) return undefined;
	if (hit.expires <= Date.now()) {
		memo.delete(key);
		return undefined;
	}
	return hit;
}

function memoSet(key: string, fetchedAt: string, data: MemoEntry['data']): void {
	// Cheap FIFO eviction: insertion order is Map's iteration order.
	if (memo.size >= MEMO_MAX) {
		const oldest = memo.keys().next();
		if (!oldest.done) memo.delete(oldest.value);
	}
	memo.set(key, { expires: Date.now() + MEMO_TTL_MS, fetchedAt, data });
}

/**
 * Coordinate buckets that get the paid Google lookup: the biggest cities,
 * in the registry's population order.
 *
 * Google's Pollen SKU is $10 per 1,000 calls with a 5,000/month free cap, and
 * the site serves ~1,260 location pages that crawlers fetch far more often
 * than people read them. Calling Google for every page ties the bill to
 * crawler appetite rather than to audience: one daily sweep of the town pages
 * is ~$380/month on its own, and a crawler working through every 6-hour ISR
 * window is several times that.
 *
 * Everywhere outside these buckets uses Open-Meteo, which is free and already
 * mapped onto the same reading shape. There is no paid fallback for those
 * pages: an Open-Meteo outage on a town page degrades to the synthetic
 * reading rather than reopening the meter across 1,200 crawled pages.
 *
 * `PAID_CITY_COUNT` is the cost knob. Each city bucket also catches the towns
 * and postcode areas within ~5 km of it, and ISR revalidates per URL, so the
 * worst case is roughly `urls × 4 calls/day`:
 *
 *   10 cities →  23 URLs →  2,760 calls/month → free
 *   20 cities →  46 URLs →  5,520 calls/month → ~$5/month
 *   50 cities → 108 URLs → 12,960 calls/month → ~$80/month
 *
 * 20 keeps every city anyone actually searches for on Google's data while
 * staying at the edge of the free cap.
 */
const PAID_CITY_COUNT = 20;

const PAID_BUCKETS = new Set(
	CITIES.slice(0, PAID_CITY_COUNT).map((c) => {
		const b = bucketCoords(c.lat, c.lon);
		return `${b.lat},${b.lon}`;
	})
);

/** Whether a coordinate resolves to a city bucket, i.e. gets the paid call. */
export function usesPaidProvider(lat: number, lon: number): boolean {
	const b = bucketCoords(lat, lon);
	return PAID_BUCKETS.has(`${b.lat},${b.lon}`);
}

export async function getPollen(args: {
	lat: number;
	lon: number;
	locationName: string;
	countMetrics?: boolean;
	/**
	 * Bypass the memo and always hit upstream. /api/health passes this: its
	 * probe coordinates share a bucket with /london, so a memo hit would let
	 * the health check report `source: 'google'` for up to 6 hours into a
	 * total Google outage — exactly the failure it exists to detect.
	 */
	skipMemo?: boolean;
}): Promise<PollenReading> {
	const { lat, lon } = bucketCoords(args.lat, args.lon);
	const apiKey = env.GOOGLE_POLLEN_API_KEY;
	const fetchedAt = new Date().toISOString();
	const location = { name: args.locationName, lat, lon };
	const shouldCount = args.countMetrics !== false;

	if (!apiKey) {
		if (shouldCount) incCounter('synthetic');
		return syntheticReading({ lat, lon, locationName: args.locationName });
	}

	const key = `${lat},${lon}`;
	const cached = args.skipMemo ? undefined : memoGet(key);
	if (cached) {
		if (shouldCount) incCounter('memo');
		return { location, fetchedAt: cached.fetchedAt, ...cached.data };
	}

	const providers: [string, () => Promise<MemoEntry['data']>][] = usesPaidProvider(lat, lon)
		? [
				['google', () => fetchGooglePollen({ lat, lon, apiKey })],
				['open-meteo', () => fetchOpenMeteoPollen({ lat, lon })]
			]
		: [['open-meteo', () => fetchOpenMeteoPollen({ lat, lon })]];

	for (const [name, call] of providers) {
		try {
			const data = await withTimeout(call(), TIMEOUT_MS);
			if (shouldCount) incCounter(name);
			memoSet(key, fetchedAt, data);
			return { location, fetchedAt, ...data };
		} catch (err) {
			console.warn(`pollen-service: ${name} failed`, errMessage(err));
		}
	}

	console.error('pollen-service: no provider answered', key);
	if (shouldCount) incCounter('synthetic-fallback');
	const synth = syntheticReading({ lat, lon, locationName: args.locationName });
	return { ...synth, stale: true };
}

function errMessage(e: unknown): string {
	if (e instanceof Error) return e.message;
	return String(e);
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => reject(new Error(`timeout after ${ms}ms`)), ms);
		p.then(
			(v) => {
				clearTimeout(timer);
				resolve(v);
			},
			(e) => {
				clearTimeout(timer);
				reject(e);
			}
		);
	});
}
