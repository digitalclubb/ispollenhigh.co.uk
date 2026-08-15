import { toLinks, topCities } from '$lib/data/directory';
import { REGIONS } from '$lib/data/locations';
import type { PageServerLoad } from './$types';

/**
 * Prerendered, so nothing here may depend on the current date: whatever the
 * build stamps in stays until the next deploy. An earlier version rendered
 * "It is August now", which would have been wrong for up to eleven months on
 * a page whose whole value is being trustworthy out of season.
 */

export const prerender = true;

export const load: PageServerLoad = () => ({
	cities: toLinks(topCities(12)),
	regions: toLinks(REGIONS)
});
