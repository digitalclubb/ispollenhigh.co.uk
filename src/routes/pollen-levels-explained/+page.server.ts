import { toLinks, topCities } from '$lib/data/directory';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => ({
	cities: toLinks(topCities(12))
});
