import { env } from '$env/dynamic/private';
import type { PollenReading } from '$lib/types/pollen';
import { bucketCoords } from './cache-key';
import { fetchGooglePollen } from './google-pollen';
import { incCounter } from './metrics';
import { fetchOpenMeteoPollen } from './open-meteo';
import { syntheticReading } from './synthetic';

/**
 * Orchestrates the pollen lookup. Google primary, Open-Meteo fallback,
 * synthetic data when no API key is configured (local dev).
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
 * The site serves ~1,250 location pages that fall into ~970 distinct 0.05°
 * buckets, and each ISR revalidation would otherwise be one paid Google
 * Pollen call. A warm serverless instance handling a crawl sweep can now
 * answer neighbouring towns — Barry, Penarth and Cardiff share a bucket —
 * without going upstream again.
 *
 * TTL matches the ISR window so a cached page never fronts data older than
 * the page's own revalidation period. Bounded so an instance that survives a
 * long time cannot grow without limit.
 */
const MEMO_TTL_MS = 30 * 60 * 1000;
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

export async function getPollen(args: {
	lat: number;
	lon: number;
	locationName: string;
	countMetrics?: boolean;
	/**
	 * Bypass the memo and always hit upstream. /api/health passes this: its
	 * probe coordinates share a bucket with /london, so a memo hit would let
	 * the health check report `source: 'google'` for up to 30 minutes into a
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

	try {
		const data = await withTimeout(fetchGooglePollen({ lat, lon, apiKey }), TIMEOUT_MS);
		if (shouldCount) incCounter('google');
		memoSet(key, fetchedAt, data);
		return { location, fetchedAt, ...data };
	} catch (googleErr) {
		console.warn('pollen-service: google failed, falling back', errMessage(googleErr));
		try {
			const data = await withTimeout(fetchOpenMeteoPollen({ lat, lon }), TIMEOUT_MS);
			if (shouldCount) incCounter('open-meteo');
			memoSet(key, fetchedAt, data);
			return { location, fetchedAt, ...data };
		} catch (meteoErr) {
			console.error('pollen-service: both providers failed', {
				google: errMessage(googleErr),
				meteo: errMessage(meteoErr)
			});
			if (shouldCount) incCounter('synthetic-fallback');
			const synth = syntheticReading({ lat, lon, locationName: args.locationName });
			return { ...synth, stale: true };
		}
	}
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
