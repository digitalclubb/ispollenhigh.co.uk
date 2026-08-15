import type { LocationType } from './locations';

/**
 * URL construction, split out from the registry so the browser bundle can
 * import it without pulling in ~1,200 location records. Anything that needs
 * only a slug and a type belongs here.
 */

export interface PathTarget {
	slug: string;
	type: LocationType;
}

export function getCanonicalPath(loc: PathTarget): string {
	// Greater London the region and London the city share an audience and a
	// centroid. We canonicalise the region to the city URL so Google only
	// indexes one of them.
	if (loc.type === 'region' && loc.slug === 'london') return '/london';
	if (loc.type === 'region') return `/region/${loc.slug}`;
	return `/${loc.slug}`;
}

export function getServedPath(loc: PathTarget): string {
	// Where the route actually lives, ignoring canonicalisation.
	if (loc.type === 'region') return `/region/${loc.slug}`;
	return `/${loc.slug}`;
}
