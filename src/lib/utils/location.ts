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
 * Read the user's approximate location from Vercel's geo headers. Returns
 * UK_DEFAULT when nothing useful is present (local dev or non-Vercel).
 */
export function locationFromHeaders(headers: Headers): LocationCentroid {
	const latStr = headers.get('x-vercel-ip-latitude');
	const lonStr = headers.get('x-vercel-ip-longitude');
	const cityRaw = headers.get('x-vercel-ip-city');

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
