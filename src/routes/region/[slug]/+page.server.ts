import { error } from '@sveltejs/kit';
import { childrenOf, toLinks } from '$lib/data/directory';
import { findBySlug } from '$lib/data/locations';
import { locationPageData } from '$lib/server/location-page';
import { getPollen } from '$lib/server/pollen-service';
import type { PageServerLoad } from './$types';

export const config = {
	runtime: 'nodejs22.x',
	regions: ['lhr1'],
	isr: { expiration: 21600 }
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
		'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200'
	});

	// Region pages are the hub every town in that region hangs off, so the
	// child list is the whole point of the page for a crawler. Flattened to
	// name/path pairs to keep the registry server-side.
	const children = childrenOf(region.slug);

	return {
		reading,
		...locationPageData(region, reading),
		children: {
			cities: toLinks(children.cities),
			towns: toLinks(children.towns),
			postcodeAreas: toLinks(children.postcodeAreas)
		}
	};
};
