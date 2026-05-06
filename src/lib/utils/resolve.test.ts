import { describe, expect, it } from 'vitest';
import { resolveLocation, suggestLocations } from './resolve';

describe('resolveLocation', () => {
	it('detects a UK postcode and returns the corresponding postcode area', () => {
		const hit = resolveLocation('SW1A 1AA');
		expect(hit?.slug).toBe('sw');
		expect(hit?.type).toBe('postcode-area');
	});

	it('detects a short postcode prefix', () => {
		expect(resolveLocation('m1')?.slug).toBe('m');
		expect(resolveLocation('EH9')?.slug).toBe('eh');
	});

	it('matches a city by exact name', () => {
		const hit = resolveLocation('London');
		expect(hit?.slug).toBe('london');
		expect(hit?.type).toBe('city');
	});

	it('matches a city case-insensitively', () => {
		expect(resolveLocation('manchester')?.type).toBe('city');
	});

	it('prefers city over region when slugs collide (London)', () => {
		// "London" exists as a city and as the Greater London region.
		const hit = resolveLocation('london');
		expect(hit?.type).toBe('city');
	});

	it('matches a region by alias', () => {
		const hit = resolveLocation('south east');
		expect(hit?.slug).toBe('south-east');
	});

	it('falls back to prefix match', () => {
		const hit = resolveLocation('manch');
		expect(hit?.slug).toBe('manchester');
	});

	it('returns null for an empty string', () => {
		expect(resolveLocation('')).toBeNull();
	});

	it('returns null for an unrecognised input', () => {
		expect(resolveLocation('zzzzzzz')).toBeNull();
	});

	it('rejects very long input', () => {
		expect(resolveLocation('a'.repeat(50))).toBeNull();
	});
});

describe('suggestLocations', () => {
	it('returns matches ranked by closeness', () => {
		const results = suggestLocations('lon');
		expect(results.length).toBeGreaterThan(0);
		expect(results[0]?.slug).toBe('london');
	});

	it('returns an empty list for an empty query', () => {
		expect(suggestLocations('')).toEqual([]);
	});

	it('respects the limit', () => {
		expect(suggestLocations('e', 3).length).toBeLessThanOrEqual(3);
	});

	it('prefers city over region when both share a slug', () => {
		// "london" matches the city slug exactly and the region slug exactly;
		// the typeBonus tiebreak ranks the city ahead.
		const top = suggestLocations('london')[0];
		expect(top?.type).toBe('city');
	});

	it('returns the postcode area for a single-letter input rather than a city prefix', () => {
		// "m" is a postcode area slug exactly, beating Manchester's prefix match.
		// This regression-tests the typeBonus addition to scoreMatch.
		const top = suggestLocations('m')[0];
		expect(top?.slug).toBe('m');
		expect(top?.type).toBe('postcode-area');
	});
});
