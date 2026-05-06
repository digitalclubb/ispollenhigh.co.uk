import { error } from '@sveltejs/kit';
import { findBySlug } from '$lib/data/locations';
import { getPollen } from '$lib/server/pollen-service';
import type { PageServerLoad } from './$types';

/**
 * Generic location page covering postcode areas (`/sw`) and cities
 * (`/london`). Phase 3 turns each of these into a fully-fleshed page with
 * local copy and JSON-LD; for phase 2 they share the homepage UI.
 */

/**
 * Vercel ISR: page is generated on demand and cached at the edge for 30
 * minutes, matching the upstream pollen API cache. Hot pages serve as
 * static HTML to crawlers and to repeat visitors; the function only runs
 * when the cache expires. ISR requires the Node runtime so the edge config
 * stays on /api/pollen and /q.
 */
export const config = {
	runtime: 'nodejs22.x',
	regions: ['lhr1'],
	isr: { expiration: 1800 }
};

export const prerender = false;

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const cityHit = findBySlug('city', params.slug);
	const areaHit = findBySlug('postcode-area', params.slug);
	const location = cityHit ?? areaHit;
	if (!location) error(404, 'Unknown location');

	const reading = await getPollen({
		lat: location.lat,
		lon: location.lon,
		locationName: location.name
	});

	// Match the upstream /api/pollen cache so the page never holds older
	// data than the data behind it.
	setHeaders({
		'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600'
	});

	return { reading, location };
};
