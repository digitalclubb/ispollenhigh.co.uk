import { json, redirect } from '@sveltejs/kit';
import { parseCoords } from '$lib/server/cache-key';
import { looksHuman } from '$lib/server/human';
import { getPollen } from '$lib/server/pollen-service';
import { checkRateLimit, clientKey } from '$lib/server/rate-limit';
import { nearestKnown } from '$lib/utils/geo';
import type { RequestHandler } from './$types';

/**
 * Edge endpoint the client calls. Bucketed coords, 6-hour CDN cache,
 * 12-hour stale-while-revalidate. The browser fetches /api/pollen?lat=&lon=
 * and gets a normalised PollenReading regardless of upstream provider.
 *
 * Callers that pass non-canonical coords are 308'd to the bucketed URL so
 * the CDN keys on the bucket. Without this an attacker can defeat the cache
 * (and burn upstream API quota) by sending arbitrarily many distinct
 * floating-point coordinates that all resolve to the same bucket.
 *
 * Rate-limited to 60 requests/minute per IP per region. The CDN cache
 * absorbs most legitimate traffic so this only kicks in for cache-busting
 * patterns or someone scraping the data.
 *
 * This is the only route that asks for the paid Google lookup, and only when
 * the request looks like a browser. Page rendering — the thing crawlers
 * actually drive, across ~1,260 URLs — always uses the free provider, so the
 * bill tracks how many people visit rather than how hungry the crawlers are.
 * A bot response is marked no-store so it can never occupy the shared CDN
 * entry and downgrade the humans behind it.
 */

// Default runtime (Node via Fluid Compute). The dedicated 'edge' runtime
// is deprecated by adapter-vercel.
export const config = {
	regions: ['lhr1']
};

const COORD_PRECISION = 2;

export const GET: RequestHandler = async ({ url, request }) => {
	const limit = checkRateLimit(`pollen:${clientKey(request.headers)}`);
	if (!limit.allowed) {
		return json(
			{ error: 'rate_limited' },
			{
				status: 429,
				headers: {
					'Retry-After': String(limit.resetSeconds),
					'Cache-Control': 'no-store'
				}
			}
		);
	}

	const latRaw = url.searchParams.get('lat');
	const lonRaw = url.searchParams.get('lon');
	const coords = parseCoords(latRaw, lonRaw);
	if (!coords) {
		return json({ error: 'invalid_coords' }, { status: 400 });
	}

	const canonicalLat = coords.lat.toFixed(COORD_PRECISION);
	const canonicalLon = coords.lon.toFixed(COORD_PRECISION);
	if (latRaw !== canonicalLat || lonRaw !== canonicalLon) {
		const target = `${url.pathname}?lat=${canonicalLat}&lon=${canonicalLon}`;
		redirect(308, target);
	}

	// Snap to the nearest known place so the H1 reads "Pollen is high in
	// London today" rather than "in your area today", and so the upstream
	// lookup happens at that place's centroid rather than at the caller's own
	// coordinates. That last part is what bounds the cost: without it the UK
	// box holds ~52,000 distinct buckets a caller can walk through, each one a
	// fresh upstream call, and the 60/min rate limit lets a single IP do
	// ~86,000 of them a day. Snapping collapses that space onto the ~1,260
	// places we actually serve.
	const nearest = nearestKnown(coords.lat, coords.lon);
	if (!nearest) {
		// Over the 50 km cap from any centroid: sea, or outside the UK. Cached
		// hard so sweeping the empty parts of the box costs one invocation.
		return json(
			{ error: 'no_coverage' },
			{ status: 404, headers: { 'Cache-Control': 'public, s-maxage=86400' } }
		);
	}

	const human = looksHuman(request.headers);
	const reading = await getPollen({
		lat: nearest.lat,
		lon: nearest.lon,
		locationName: nearest.name,
		paid: human
	});

	return json(reading, {
		headers: {
			'Cache-Control': human
				? 'public, s-maxage=21600, stale-while-revalidate=43200'
				: 'private, no-store',
			Vary: 'Accept-Encoding',
			'X-Pollen-Source': reading.source
		}
	});
};
