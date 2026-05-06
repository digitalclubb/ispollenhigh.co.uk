import { error } from '@sveltejs/kit';
import { findBySlug } from '$lib/data/locations';
import { getPollen } from '$lib/server/pollen-service';
import type { PageServerLoad } from './$types';

export const config = {
	runtime: 'nodejs22.x',
	regions: ['lhr1'],
	isr: { expiration: 1800 }
};

export const prerender = false;

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const region = findBySlug('region', params.slug);
	if (!region) error(404, 'Unknown region');

	const reading = await getPollen({
		lat: region.lat,
		lon: region.lon,
		locationName: region.name
	});

	setHeaders({
		'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600'
	});

	return { reading, location: region };
};
