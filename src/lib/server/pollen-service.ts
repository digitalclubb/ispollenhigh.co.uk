import { env } from '$env/dynamic/private';
import type { PollenReading } from '$lib/types/pollen';
import { bucketCoords } from './cache-key';
import { fetchGooglePollen } from './google-pollen';
import { incCounter, readCounter } from './metrics';
import { fetchOpenMeteoPollen } from './open-meteo';
import { syntheticReading } from './synthetic';

/**
 * Orchestrates the pollen lookup. Google when the caller asks and pays for
 * it, Open-Meteo otherwise, synthetic data when no API key is configured
 * (local dev).
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
 * thing keeping the bill down; the `paid` flag below is what does that.
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
 * Hard ceiling on paid Google calls per day, per instance.
 *
 * Google's Pollen SKU is $10 per 1,000 calls with a 5,000/month free cap.
 * The gate that matters is the caller's — only /api/pollen asks for a paid
 * call, and only when the request looks like a browser (see `looksHuman`) —
 * so crawler volume no longer drives the bill. This is the backstop for when
 * that gate is wrong: a bot that renders JS, or a burst of real traffic.
 *
 * Tune with GOOGLE_POLLEN_DAILY_CAP. 500/day is ~$5/day worst case, and real
 * usage sits far below it because /api/pollen is CDN-cached for 6 hours per
 * coordinate bucket — one paid call covers every visitor to that bucket.
 *
 * ponytail: the counter is per-instance module memory, so the true ceiling is
 * cap × live instances. Promote to Vercel KV if the bill needs a real cap.
 */
function paidBudgetLeft(): boolean {
	const cap = Number(env.GOOGLE_POLLEN_DAILY_CAP ?? 500);
	return !Number.isFinite(cap) || readCounter('google') < cap;
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
	/**
	 * Ask for the paid Google lookup, with Open-Meteo as fallback. Only
	 * /api/pollen sets this, and only for requests that look like a browser:
	 * page rendering (which crawlers drive) stays on the free provider, so
	 * the bill tracks audience rather than crawler appetite.
	 */
	paid?: boolean;
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

	const paid = args.paid === true && paidBudgetLeft();

	const key = `${lat},${lon}`;
	// A paid caller ignores a free memo entry — otherwise one crawler-warmed
	// bucket would downgrade every human landing on that instance for 6 hours.
	const hit = args.skipMemo ? undefined : memoGet(key);
	const cached = hit && (!paid || hit.data.source === 'google') ? hit : undefined;
	if (cached) {
		if (shouldCount) incCounter('memo');
		return { location, fetchedAt: cached.fetchedAt, ...cached.data };
	}

	const providers: [string, () => Promise<MemoEntry['data']>][] = paid
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
