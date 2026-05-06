import { json } from '@sveltejs/kit';
import { readAllCounters } from '$lib/server/metrics';
import { getPollen } from '$lib/server/pollen-service';
import type { RequestHandler } from './$types';

/**
 * Lightweight health check.
 *
 * Default mode (`/api/health`) calls the pollen pipeline against a canned
 * London coordinate and reports which provider answered, plus today's
 * call counts per source (per-region; sum across regions for a global
 * total). External uptime monitors can alert when `source` flips to
 * "synthetic" or the route 5xxs; ops can spot quota issues early via the
 * counter.
 *
 * Skip mode (`/api/health?upstream=skip`) returns a cheap edge-only
 * liveness response without touching upstream. Use this for high-fanout
 * pings (e.g. status-page liveness checks every few seconds) so they
 * don't burn Google quota.
 *
 * Both modes cache for 60 seconds so polling at minute granularity costs
 * at most one upstream call per minute regardless of monitor fan-out.
 * The probe call passes `countMetrics: false` so health pings don't count
 * themselves toward today's quota.
 */

export const config = { regions: ['lhr1'] };

const PROBE = { lat: 51.5, lon: -0.1, locationName: 'London', countMetrics: false };
const CACHE = 'public, s-maxage=60, stale-while-revalidate=120';

export const GET: RequestHandler = async ({ url }) => {
	if (url.searchParams.get('upstream') === 'skip') {
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
