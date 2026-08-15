import { describe, expect, it } from 'vitest';
import {
	ALL_LOCATIONS,
	CITIES,
	findPlace,
	getCanonicalPath,
	POSTCODE_AREAS,
	REGIONS,
	TOWNS
} from './locations';
import { SEARCH_INDEX } from './search-index';

/**
 * Integrity checks over the registry. `towns.ts` and `search-index.ts` are
 * generated from GeoNames, so these guard the generator's output as much as
 * the hand-written entries: a bad parent region silently gives a town the
 * wrong pollen calendar, and a duplicate slug silently makes a page
 * unreachable.
 */

const REGION_SLUGS = new Set(REGIONS.map((r) => r.slug));

describe('location registry', () => {
	it('contains regions, cities, towns and postcode areas', () => {
		expect(REGIONS.length).toBe(16);
		expect(CITIES.length).toBe(50);
		expect(TOWNS.length).toBeGreaterThan(1000);
		expect(POSTCODE_AREAS.length).toBeGreaterThan(100);
	});

	it('gives every location a unique canonical path, bar the London pair', () => {
		const byPath = new Map<string, string[]>();
		for (const loc of ALL_LOCATIONS) {
			const path = getCanonicalPath(loc);
			byPath.set(path, [...(byPath.get(path) ?? []), `${loc.type}:${loc.slug}`]);
		}
		const collisions = [...byPath.entries()].filter(([, v]) => v.length > 1);
		// Greater London (region) is deliberately canonicalised onto /london.
		expect(collisions.map(([path]) => path)).toEqual(['/london']);
	});

	it('points every town and city at a real forecast region', () => {
		for (const loc of [...CITIES, ...TOWNS, ...POSTCODE_AREAS]) {
			expect(REGION_SLUGS.has(loc.parentRegion ?? '')).toBe(true);
		}
	});

	it('keeps every coordinate inside the UK bounding box', () => {
		for (const loc of ALL_LOCATIONS) {
			expect(loc.lat).toBeGreaterThan(49);
			expect(loc.lat).toBeLessThan(61);
			expect(loc.lon).toBeGreaterThan(-9);
			expect(loc.lon).toBeLessThan(2);
		}
	});

	it('uses url-safe slugs', () => {
		for (const loc of ALL_LOCATIONS) {
			expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
		}
	});
});

describe('findPlace', () => {
	it('resolves a city', () => {
		expect(findPlace('bristol')?.type).toBe('city');
	});

	it('resolves a generated town', () => {
		const hit = findPlace('skegness');
		expect(hit?.type).toBe('town');
		expect(hit?.parentRegion).toBe('east-midlands');
	});

	it('resolves a postcode area', () => {
		expect(findPlace('sw')?.type).toBe('postcode-area');
	});

	it('prefers a city over a town of the same name', () => {
		// Cities are checked first, so a city slug can never be shadowed.
		const city = CITIES[0];
		if (!city) throw new Error('no cities');
		expect(findPlace(city.slug)?.type).toBe('city');
	});

	it('returns undefined for an unknown slug', () => {
		expect(findPlace('not-a-place-xyz')).toBeUndefined();
	});
});

describe('search index', () => {
	it('covers every location', () => {
		expect(SEARCH_INDEX.length).toBe(ALL_LOCATIONS.length);
	});

	it('carries no coordinates, so it stays small enough to ship to the browser', () => {
		for (const entry of SEARCH_INDEX.slice(0, 50)) {
			expect(entry).not.toHaveProperty('lat');
			expect(entry).not.toHaveProperty('population');
		}
	});

	it('matches the registry slug for slug', () => {
		const registry = new Set(ALL_LOCATIONS.map((l) => `${l.type}:${l.slug}`));
		for (const entry of SEARCH_INDEX) {
			expect(registry.has(`${entry.type}:${entry.slug}`)).toBe(true);
		}
	});

	/**
	 * The generator once parsed `aliases:` across entry boundaries, which
	 * credited each alias to the entry before its real owner: searching
	 * "southend" redirected to Swansea and "yorkshire" to the West Midlands.
	 * Slug/type parity did not catch it, so compare aliases explicitly.
	 */
	it('attaches every alias to the location that owns it', () => {
		for (const loc of ALL_LOCATIONS) {
			const entry = SEARCH_INDEX.find((e) => e.type === loc.type && e.slug === loc.slug);
			expect(entry?.aliases ?? []).toEqual(loc.aliases ?? []);
		}
	});
});
