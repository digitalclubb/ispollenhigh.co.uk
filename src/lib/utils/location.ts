/**
 * Phase 1 location lookup. Just enough to get the homepage rendering with a
 * sensible name and centroid. Phase 3 replaces this with the full 124 postcode
 * areas, 50 cities and 16 regions.
 */

export interface LocationCentroid {
	name: string;
	lat: number;
	lon: number;
}

export const UK_DEFAULT: LocationCentroid = {
	name: 'the UK',
	lat: 52.5,
	lon: -1.5
};

/**
 * Read the user's approximate location from Cloudflare's IP geolocation
 * (`request.cf`). Returns UK_DEFAULT when nothing useful is present (local
 * dev, or an IP Cloudflare cannot place).
 */
export function locationFromCf(
	cf: { latitude?: string; longitude?: string; city?: string } | undefined
): LocationCentroid {
	const latStr = cf?.latitude;
	const lonStr = cf?.longitude;
	const cityRaw = cf?.city;

	if (!latStr || !lonStr) return UK_DEFAULT;

	const lat = Number.parseFloat(latStr);
	const lon = Number.parseFloat(lonStr);
	if (!Number.isFinite(lat) || !Number.isFinite(lon)) return UK_DEFAULT;

	const name = cityRaw ? safeDecode(cityRaw) : 'your area';
	return { name, lat, lon };
}

function safeDecode(s: string): string {
	try {
		return decodeURIComponent(s);
	} catch {
		return s;
	}
}
