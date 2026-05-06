import { describe, expect, it } from 'vitest';
import { CITIES, POSTCODE_AREAS } from '$lib/data/locations';
import { haversineKm, nearbyLocations, nearestKnown } from './geo';

describe('haversineKm', () => {
	it('returns 0 for identical points', () => {
		expect(haversineKm({ lat: 51.5, lon: -0.1 }, { lat: 51.5, lon: -0.1 })).toBe(0);
	});

	it('roughly matches the known London to Manchester distance (~262 km)', () => {
		const london = { lat: 51.5074, lon: -0.1278 };
		const manchester = { lat: 53.4808, lon: -2.2426 };
		const d = haversineKm(london, manchester);
		expect(d).toBeGreaterThan(255);
		expect(d).toBeLessThan(270);
	});

	it('is symmetric', () => {
		const a = { lat: 55.95, lon: -3.19 };
		const b = { lat: 51.45, lon: -2.59 };
		expect(haversineKm(a, b)).toBeCloseTo(haversineKm(b, a), 5);
	});
});

describe('nearestKnown', () => {
	it('snaps a central London coordinate to a London-area location', () => {
		const hit = nearestKnown(51.51, -0.13);
		expect(hit).toBeDefined();
		expect(['london', 'wc', 'sw', 'ec'].includes(hit?.slug ?? '')).toBe(true);
	});

	it('snaps an Aberdeen coordinate to AB or Aberdeen', () => {
		const hit = nearestKnown(57.15, -2.09);
		expect(['ab', 'aberdeen']).toContain(hit?.slug);
	});

	it('never returns a region', () => {
		// Centre of England, where any of several regions could win on raw distance.
		const hit = nearestKnown(52.5, -1.5);
		expect(hit?.type).not.toBe('region');
	});

	it('returns undefined when the nearest place is over the 50 km cap', () => {
		// 60.0N, -8.0W is far west of Shetland in the Atlantic. Nearest known
		// location is hundreds of km away.
		expect(nearestKnown(60.0, -8.0)).toBeUndefined();
	});
});

describe('nearbyLocations', () => {
	it('excludes the origin from the result', () => {
		const london = CITIES.find((c) => c.slug === 'london');
		if (!london) throw new Error('London city missing from registry');
		const items = nearbyLocations(london, 6);
		const collisions = items.filter((l) => l.slug === 'london' && l.type === 'city');
		expect(collisions).toHaveLength(0);
	});

	it('returns the requested count when enough candidates exist', () => {
		const london = CITIES.find((c) => c.slug === 'london');
		if (!london) throw new Error('London city missing from registry');
		expect(nearbyLocations(london, 6)).toHaveLength(6);
	});

	it('only returns non-region locations', () => {
		const sw = POSTCODE_AREAS.find((p) => p.slug === 'sw');
		if (!sw) throw new Error('SW postcode area missing from registry');
		const items = nearbyLocations(sw, 6);
		expect(items.every((l) => l.type !== 'region')).toBe(true);
	});

	it('returns London-area neighbours for an SW origin', () => {
		const sw = POSTCODE_AREAS.find((p) => p.slug === 'sw');
		if (!sw) throw new Error('SW postcode area missing from registry');
		const items = nearbyLocations(sw, 6);
		// At least three of the six should be other London-area entries.
		const londonish = items.filter((l) => l.parentRegion === 'london' || l.slug === 'london');
		expect(londonish.length).toBeGreaterThanOrEqual(3);
	});
});
