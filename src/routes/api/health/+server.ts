import { json } from '@sveltejs/kit';
import { readAllCounters } from '$lib/server/metrics';
import { getPollen } from '$lib/server/pollen-service';
import type { RequestHandler } from './$types';

/**
 * Lightweight health check.
 *
 * Default mode (`/api/health`) is free: a liveness response plus today's
 * call counts per source (per-region; sum across regions for a global
 * total). Point uptime monitors here.
 *
 * Probe mode (`/api/health?upstream=probe`) calls the pollen pipeline
 * against London and reports which provider answered, so `source` flipping
 * to "synthetic" is visible. It costs one *paid* Google call per 60-second
 * cache window — a monitor polling it every minute is ~1,440 calls a day
 * (~$14 at $10/1,000), which is why it is opt-in rather than the default.
 * Use it by hand, or on a low-frequency schedule.
 *
 * Both modes cache for 60 seconds. The probe passes `countMetrics: false`
 * so health pings don't count themselves toward today's quota.
 */

export const config = { regions: ['lhr1'] };

// London's registry centroid, so the probe lands in a paid bucket and so
// actually exercises the Google path it exists to watch.
const PROBE = {
	lat: 51.5074,
	lon: -0.1278,
	locationName: 'London',
	countMetrics: false,
	// Always go upstream: a memo hit would mask an outage for up to 6 hours.
	skipMemo: true
};
const CACHE = 'public, s-maxage=60, stale-while-revalidate=120';

export const GET: RequestHandler = async ({ url }) => {
	if (url.searchParams.get('upstream') !== 'probe') {
		return json(
			{ status: 'ok', source: 'edge', callsToday: readAllCounters() },
			{ status: 200, headers: { 'Cache-Control': CACHE } }
		);
	}

	try {
		const reading = await getPollen(PROBE);
		const ok = reading.source !== 'synthetic';
		return json(
			{
				status: ok ? 'ok' : 'degraded',
				source: reading.source,
				stale: reading.stale ?? false,
				fetchedAt: reading.fetchedAt,
				callsToday: readAllCounters()
			},
			{ status: ok ? 200 : 503, headers: { 'Cache-Control': CACHE } }
		);
	} catch (err) {
		return json(
			{ status: 'error', message: err instanceof Error ? err.message : String(err) },
			{ status: 500 }
		);
	}
};
