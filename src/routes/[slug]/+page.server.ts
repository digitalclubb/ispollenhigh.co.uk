import { error } from '@sveltejs/kit';
import { findBySlug } from '$lib/data/locations';
import { getPollen } from '$lib/server/pollen-service';
import type { PageServerLoad } from './$types';

/**
 * Generic location page covering postcode areas (`/sw`) and cities
 * (`/london`). Phase 3 turns each of these into a fully-fleshed page with
 * local copy and JSON-LD; for phase 2 they share the homepage UI.
 */

export const config = {
	runtime: 'edge',
	regions: ['lhr1']
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

	setHeaders({
		'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600'
	});

	return { reading, location };
};
