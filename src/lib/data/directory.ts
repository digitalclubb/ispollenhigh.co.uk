import {
	CITIES,
	getCanonicalPath,
	type Location,
	POSTCODE_AREAS,
	REGIONS,
	TOWNS
} from './locations';

/**
 * Grouping helpers for the directory hub and the region pages.
 *
 * These exist so every location page is reachable from the homepage in two or
 * three clicks. Before this, the only route to a location page was the sitemap
 * or the client-side search box (which posts to /q, a robots-blocked URL), so
 * Googlebot had no crawl path at all and 185 of 191 pages were never fetched.
 *
 * The shape is deliberately a shallow tree rather than one flat index page:
 * home → /locations → region → town. A single page listing all ~1,240 places
 * would be 100 kB of links and would spread its own authority too thin to
 * push any of them.
 */

export interface RegionGroup {
	region: Location;
	cities: Location[];
	towns: Location[];
	postcodeAreas: Location[];
}

/**
 * A link, flattened for the browser. Loaders hand these to pages instead of
 * whole Location records so the registry — coordinates, populations and all —
 * never reaches the client bundle.
 */
export interface DirectoryLink {
	name: string;
	path: string;
}

export function toLinks(locations: Location[]): DirectoryLink[] {
	return locations.map((loc) => ({ name: loc.name, path: getCanonicalPath(loc) }));
}

function byName(a: Location, b: Location): number {
	return a.name.localeCompare(b.name, 'en-GB');
}

/** Cities, towns and postcode areas that sit under a region. */
export function childrenOf(regionSlug: string): Omit<RegionGroup, 'region'> {
	return {
		cities: CITIES.filter((c) => c.parentRegion === regionSlug).sort(byName),
		towns: TOWNS.filter((t) => t.parentRegion === regionSlug).sort(byName),
		postcodeAreas: POSTCODE_AREAS.filter((p) => p.parentRegion === regionSlug).sort(byName)
	};
}

/** Every region with its children, in the registry's own region order. */
export function regionGroups(): RegionGroup[] {
	return REGIONS.map((region) => ({ region, ...childrenOf(region.slug) }));
}

/** How many places sit under a region, for the directory's counts. */
export function childCount(regionSlug: string): number {
	const c = childrenOf(regionSlug);
	return c.cities.length + c.towns.length + c.postcodeAreas.length;
}

/**
 * The cities people actually search for by name, in registry order (which is
 * population order). Used for the homepage's crawlable link block.
 */
export function topCities(count: number): Location[] {
	return CITIES.slice(0, count);
}

/**
 * The largest towns nationally, so the directory can surface some of the
 * long tail directly rather than hiding all of it one click deeper.
 */
export function largestTowns(count: number): Location[] {
	return [...TOWNS].sort((a, b) => (b.population ?? 0) - (a.population ?? 0)).slice(0, count);
}

export { getCanonicalPath };
