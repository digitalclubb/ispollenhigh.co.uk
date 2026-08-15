import { childCount, largestTowns, toLinks, topCities } from '$lib/data/directory';
import { REGIONS } from '$lib/data/locations';
import { getCanonicalPath } from '$lib/data/paths';
import type { PageServerLoad } from './$types';

/**
 * Prerendered: the directory is a pure function of the registry, so it costs
 * nothing to serve as static HTML — which also makes it the fastest page on
 * the site for a crawler to fetch.
 *
 * This is a *server* load, not a universal one. A universal load is bundled
 * for client-side navigation too, which would ship all ~1,240 location records
 * (168 kB) to every visitor. Flattening to name/path pairs here keeps the
 * registry on the server.
 */

export const prerender = true;

export const load: PageServerLoad = () => {
	const regions = REGIONS.map((region) => ({
		name: region.name,
		path: getCanonicalPath(region),
		count: childCount(region.slug)
	}));

	const cities = toLinks(topCities(50));
	const towns = toLinks(largestTowns(60));
	const total = regions.reduce((n, r) => n + r.count, 0);

	return { regions, cities, towns, total };
};
