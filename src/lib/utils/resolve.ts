import { ALL_LOCATIONS, CITIES, type Location, POSTCODE_AREAS, REGIONS } from '$lib/data/locations';

/**
 * Resolve user input ("sw1", "London", "south east", "M postcode") to the
 * best-matching known location. Returns null if nothing matches confidently.
 *
 * Priority:
 *   1. UK postcode shape: extract the area letters and look up.
 *   2. Exact slug match (case-insensitive, hyphens collapsed).
 *   3. Exact name match.
 *   4. Alias match.
 *   5. Prefix match against name.
 */

const POSTCODE_AREA_PATTERN = /^([A-Z]{1,2})\d/i;

export function resolveLocation(rawInput: string): Location | null {
	const input = rawInput.trim();
	if (input.length === 0 || input.length > 30) return null;

	const collapsed = input.toLowerCase().replace(/[\s_]+/g, '-');

	const postcodeMatch = input.replace(/\s+/g, '').match(POSTCODE_AREA_PATTERN);
	if (postcodeMatch?.[1]) {
		const area = postcodeMatch[1].toLowerCase();
		const hit = POSTCODE_AREAS.find((l) => l.slug === area);
		if (hit) return hit;
	}

	const exactSlug = ALL_LOCATIONS.find((l) => l.slug === collapsed);
	if (exactSlug) return preferType(exactSlug, collapsed);

	const exactName = ALL_LOCATIONS.find((l) => l.name.toLowerCase() === input.toLowerCase());
	if (exactName) return exactName;

	const aliasHit = ALL_LOCATIONS.find((l) =>
		l.aliases?.some((a) => a.toLowerCase() === input.toLowerCase())
	);
	if (aliasHit) return aliasHit;

	const prefixHit = ALL_LOCATIONS.find((l) => l.name.toLowerCase().startsWith(input.toLowerCase()));
	if (prefixHit) return prefixHit;

	return null;
}

/**
 * When two slugs collide (e.g. "london" exists as both a city and a region),
 * prefer the city. That's what users typing "London" expect.
 */
function preferType(found: Location, slug: string): Location {
	if (found.type === 'region') {
		const cityMatch = CITIES.find((l) => l.slug === slug);
		if (cityMatch) return cityMatch;
	}
	return found;
}

/**
 * Match candidates for autocomplete. Cheap, in-memory. Returns up to `limit`
 * locations whose slug, name or alias contains the query, ranked by best fit.
 */
export function suggestLocations(query: string, limit = 6): Location[] {
	const q = query.trim().toLowerCase();
	if (q.length === 0) return [];

	const scored: { loc: Location; score: number }[] = [];
	for (const loc of ALL_LOCATIONS) {
		const score = scoreMatch(loc, q);
		if (score > 0) scored.push({ loc, score });
	}
	scored.sort((a, b) => b.score - a.score);
	return scored.slice(0, limit).map((s) => s.loc);
}

function scoreMatch(loc: Location, q: string): number {
	const name = loc.name.toLowerCase();
	const slug = loc.slug.toLowerCase();
	if (slug === q) return 100;
	if (name === q) return 90;
	if (slug.startsWith(q)) return 70 + typeBonus(loc);
	if (name.startsWith(q)) return 60 + typeBonus(loc);
	if (loc.aliases?.some((a) => a.toLowerCase().startsWith(q))) return 55;
	if (name.includes(q)) return 30 + typeBonus(loc);
	return 0;
}

function typeBonus(loc: Location): number {
	if (loc.type === 'city') return 5;
	if (loc.type === 'postcode-area') return 3;
	return 0;
}

/** Small helper used by routes for linkable region rendering. */
export function regionFromSlug(slug: string | undefined): Location | undefined {
	if (!slug) return undefined;
	return REGIONS.find((r) => r.slug === slug);
}
