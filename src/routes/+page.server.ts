import { toLinks, topCities } from '$lib/data/directory';
import { REGIONS } from '$lib/data/locations';
import { getPollen } from '$lib/server/pollen-service';
import { homepageJsonLd, jsonLdScript } from '$lib/utils/jsonld';
import { locationFromHeaders } from '$lib/utils/location';
import type { PageServerLoad } from './$types';

// Node runtime via Vercel's Fluid Compute (the dedicated 'edge' runtime is
// deprecated). Pinned to lhr1 because the audience is UK-only.
export const config = {
	regions: ['lhr1']
};

export const prerender = false;

export const load: PageServerLoad = async ({ request, setHeaders }) => {
	const location = locationFromHeaders(request.headers);
	const reading = await getPollen({
		lat: location.lat,
		lon: location.lon,
		locationName: location.name
	});

	setHeaders({
		'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=1800'
	});

	// Crawlable browse links, flattened to name + path so the location
	// registry stays out of the browser bundle.
	return {
		reading,
		jsonLd: jsonLdScript(homepageJsonLd()),
		browse: {
			cities: toLinks(topCities(24)),
			regions: toLinks(REGIONS)
		}
	};
};
