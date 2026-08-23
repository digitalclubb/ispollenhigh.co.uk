import { error } from '@sveltejs/kit';
import { childrenOf, toLinks } from '$lib/data/directory';
import { findBySlug, findPlace } from '$lib/data/locations';
import { locationPageData } from '$lib/server/location-page';
import { getPollen } from '$lib/server/pollen-service';
import type { PageServerLoad } from './$types';

/**
 * Generic location page covering cities (`/london`), towns (`/skegness`) and
 * postcode areas (`/sw`). Regions live under /region/[slug] because their
 * names collide with too much else.
 */

/**
 * Vercel ISR: page is generated on demand and cached at the edge for 6
 * hours, matching the upstream pollen memo. Hot pages serve as static HTML
 * to crawlers and to repeat visitors; the function only runs when the cache
 * expires. ISR requires the Node runtime so the edge config stays on
 * /api/pollen and /q.
 *
 * The window is 6 h rather than 30 min because both providers publish a
 * *daily* forecast: revalidating 48 times a day bought no fresh data and
 * multiplied upstream calls by 48 across ~1,260 crawled pages. 6 h keeps the
 * date label honest either side of midnight without paying for the rest.
 */
export const config = {
	runtime: 'nodejs22.x',
	regions: ['lhr1'],
	isr: { expiration: 21600 }
};

export const prerender = false;

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const location = findPlace(params.slug);
	if (!location) error(404, 'Unknown location');

	const reading = await getPollen({
		lat: location.lat,
		lon: location.lon,
		locationName: location.name
	});

	// Match the ISR window so the page never holds older data than the data
	// behind it.
	setHeaders({
		'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200'
	});

	/**
	 * A region whose canonical URL is this page hands over its child list.
	 * Greater London is the only such region: it canonicalises to /london, so
	 * /region/london is excluded from the sitemap and carries a canonical tag
	 * pointing here. Without this, the 132 London towns would be listed only
	 * on a page Google is told not to index — the same orphaning this whole
	 * change set exists to fix, on the largest region in the country.
	 */
	const hostedRegion = location.type === 'city' ? findBySlug('region', location.slug) : undefined;
	const kids = hostedRegion ? childrenOf(hostedRegion.slug) : undefined;

	return {
		reading,
		...locationPageData(location, reading),
		children: kids
			? {
					regionName: hostedRegion?.name ?? location.name,
					cities: toLinks(kids.cities.filter((c) => c.slug !== location.slug)),
					towns: toLinks(kids.towns),
					postcodeAreas: toLinks(kids.postcodeAreas)
				}
			: null
	};
};
