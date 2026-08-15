import { SEARCH_INDEX, type SearchEntry } from '$lib/data/search-index';

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
 *
 * Works against the compact search index (slug, name, type) rather than the
 * full registry: this module runs in the browser, and the registry now
 * carries coordinates and population for ~1,200 places.
 */

const POSTCODE_AREA_PATTERN = /^([A-Z]{1,2})\d/i;

export function resolveLocation(rawInput: string): SearchEntry | null {
	const input = rawInput.trim();
	if (input.length === 0 || input.length > 30) return null;

	const collapsed = input.toLowerCase().replace(/[\s_]+/g, '-');

	const postcodeMatch = input.replace(/\s+/g, '').match(POSTCODE_AREA_PATTERN);
	if (postcodeMatch?.[1]) {
		const area = postcodeMatch[1].toLowerCase();
		const hit = SEARCH_INDEX.find((l) => l.type === 'postcode-area' && l.slug === area);
		if (hit) return hit;
	}

	const exactSlug = SEARCH_INDEX.find((l) => l.slug === collapsed);
	if (exactSlug) return preferType(exactSlug, collapsed);

	const exactName = SEARCH_INDEX.find((l) => l.name.toLowerCase() === input.toLowerCase());
	if (exactName) return preferType(exactName, exactName.slug);

	const aliasHit = SEARCH_INDEX.find((l) =>
		l.aliases?.some((a) => a.toLowerCase() === input.toLowerCase())
	);
	if (aliasHit) return aliasHit;

	const prefixHit = SEARCH_INDEX.find((l) => l.name.toLowerCase().startsWith(input.toLowerCase()));
	if (prefixHit) return prefixHit;

	return null;
}

/**
 * When two slugs collide (e.g. "london" exists as both a city and a region),
 * prefer the city. That's what users typing "London" expect.
 */
function preferType(found: SearchEntry, slug: string): SearchEntry {
	if (found.type === 'region') {
		const cityMatch = SEARCH_INDEX.find((l) => l.type === 'city' && l.slug === slug);
		if (cityMatch) return cityMatch;
	}
	return found;
}

/**
 * Match candidates for autocomplete. Cheap, in-memory. Returns up to `limit`
 * locations whose slug, name or alias contains the query, ranked by best fit.
 */
export function suggestLocations(query: string, limit = 6): SearchEntry[] {
	const q = query.trim().toLowerCase();
	if (q.length === 0) return [];

	const scored: { loc: SearchEntry; score: number }[] = [];
	for (const loc of SEARCH_INDEX) {
		const score = scoreMatch(loc, q);
		if (score > 0) scored.push({ loc, score });
	}
	scored.sort((a, b) => b.score - a.score);
	return scored.slice(0, limit).map((s) => s.loc);
}

function scoreMatch(loc: SearchEntry, q: string): number {
	const name = loc.name.toLowerCase();
	const slug = loc.slug.toLowerCase();
	// typeBonus on every branch so that when two locations tie at the same
	// kind of match (e.g. London the city and London the region both have
	// slug "london"), the city wins consistently.
	if (slug === q) return 100 + typeBonus(loc);
	if (name === q) return 90 + typeBonus(loc);
	if (slug.startsWith(q)) return 70 + typeBonus(loc);
	if (name.startsWith(q)) return 60 + typeBonus(loc);
	if (loc.aliases?.some((a) => a.toLowerCase().startsWith(q))) return 55 + typeBonus(loc);
	if (name.includes(q)) return 30 + typeBonus(loc);
	return 0;
}

function typeBonus(loc: SearchEntry): number {
	if (loc.type === 'city') return 5;
	// Towns outrank postcode areas: someone typing "read" wants Reading, not
	// the RG postcode area.
	if (loc.type === 'town') return 4;
	if (loc.type === 'postcode-area') return 3;
	return 0;
}
