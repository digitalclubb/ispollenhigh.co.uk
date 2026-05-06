/**
 * Coordinate bucketing. Rounding lat/lon to 0.05° (~5 km) before forming a
 * cache key collapses thousands of unique requests onto a small grid, which is
 * the difference between paying $0/month and $2,500/month for the upstream API.
 *
 * Pollen varies smoothly across small distances so the loss of precision is
 * imperceptible.
 */

const STEP = 0.05;

export function roundCoord(value: number): number {
	// Snap to the 0.05 grid, then round to 2 d.p. to flush the IEEE 754
	// noise (e.g. 0.05 * -3 = -0.15000000000000002 without this).
	return Math.round(Math.round(value / STEP) * STEP * 100) / 100;
}

export function bucketCoords(lat: number, lon: number): { lat: number; lon: number } {
	return { lat: roundCoord(lat), lon: roundCoord(lon) };
}

/**
 * Coerce arbitrary input into a bucketed UK-bounded coordinate pair, or
 * `null` if it falls outside what we serve. UK box is generous (covers the
 * Channel Islands and Shetland) but excludes obvious garbage.
 */
export function parseCoords(latStr: unknown, lonStr: unknown): { lat: number; lon: number } | null {
	if (typeof latStr !== 'string' || typeof lonStr !== 'string') return null;
	const lat = Number.parseFloat(latStr);
	const lon = Number.parseFloat(lonStr);
	if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
	if (lat < 49 || lat > 61) return null;
	if (lon < -9 || lon > 2) return null;
	return bucketCoords(lat, lon);
}
