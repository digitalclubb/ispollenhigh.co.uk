import { ALL_LOCATIONS, type Location } from '$lib/data/locations';

/**
 * Great-circle distance between two coordinates in kilometres. Uses the
 * standard haversine formula. Accurate enough for "which UK town is
 * nearest" use cases (~5% error at most over scales we care about).
 */
export function haversineKm(
	a: { lat: number; lon: number },
	b: { lat: number; lon: number }
): number {
	const R = 6371;
	const dLat = ((b.lat - a.lat) * Math.PI) / 180;
	const dLon = ((b.lon - a.lon) * Math.PI) / 180;
	const lat1 = (a.lat * Math.PI) / 180;
	const lat2 = (b.lat * Math.PI) / 180;
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
	return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Closest non-region location to a coordinate, capped at 50 km. Beyond
 * that we'd rather show "your area" than indexable nonsense like
 * "Pollen is high in Cromer today" for a Dogger Bank GPS glitch. Regions
 * are excluded because their centroids span hundreds of square kilometres
 * and would always "win" for users near the centre of England.
 */
export const NEAREST_KNOWN_MAX_KM = 50;

export function nearestKnown(lat: number, lon: number): Location | undefined {
	let best: { loc: Location; dist: number } | undefined;
	for (const loc of ALL_LOCATIONS) {
		if (loc.type === 'region') continue;
		const dist = haversineKm({ lat, lon }, loc);
		if (!best || dist < best.dist) best = { loc, dist };
	}
	if (!best) return undefined;
	return best.dist <= NEAREST_KNOWN_MAX_KM ? best.loc : undefined;
}

/**
 * Up to `count` nearest locations to a starting place, excluding the place
 * itself and excluding regions. Same-region candidates rank ahead of
 * out-of-region ones at equal distance, so an Aberdeen page links to other
 * Grampian places before falling back to nearest from anywhere.
 */
export function nearbyLocations(origin: Location, count: number): Location[] {
	const ranked = ALL_LOCATIONS.flatMap((loc) => {
		if (loc.type === 'region') return [];
		if (loc.slug === origin.slug && loc.type === origin.type) return [];
		return [{ loc, dist: haversineKm(origin, loc) }];
	}).sort((a, b) => {
		const aSame = a.loc.parentRegion === origin.parentRegion ? 0 : 1;
		const bSame = b.loc.parentRegion === origin.parentRegion ? 0 : 1;
		if (aSame !== bSame) return aSame - bSame;
		return a.dist - b.dist;
	});
	return ranked.slice(0, count).map((r) => r.loc);
}
