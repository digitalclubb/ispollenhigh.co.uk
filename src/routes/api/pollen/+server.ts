import { json } from '@sveltejs/kit';
import { parseCoords } from '$lib/server/cache-key';
import { getPollen } from '$lib/server/pollen-service';
import type { RequestHandler } from './$types';

/**
 * Edge endpoint the client calls. Bucketed coords, 30-min CDN cache,
 * 1-hour stale-while-revalidate. The browser fetches /api/pollen?lat=&lon=
 * and gets a normalised PollenReading regardless of upstream provider.
 */

export const config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async ({ url }) => {
	const coords = parseCoords(url.searchParams.get('lat'), url.searchParams.get('lon'));
	if (!coords) {
		return json({ error: 'invalid_coords' }, { status: 400 });
	}

	const reading = await getPollen({
		lat: coords.lat,
		lon: coords.lon,
		locationName: 'your area'
	});

	return json(reading, {
		headers: {
			'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
			'X-Pollen-Source': reading.source
		}
	});
};
