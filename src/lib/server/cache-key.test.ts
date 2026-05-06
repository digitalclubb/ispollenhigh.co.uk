import { describe, expect, it } from 'vitest';
import { bucketCoords, parseCoords, roundCoord } from './cache-key';

describe('roundCoord', () => {
	it('rounds to the nearest 0.05 step', () => {
		expect(roundCoord(51.5074)).toBe(51.5);
		expect(roundCoord(51.5251)).toBe(51.55);
		expect(roundCoord(-0.1278)).toBe(-0.15);
		expect(roundCoord(-0.1)).toBe(-0.1);
	});
});

describe('bucketCoords', () => {
	it('rounds both lat and lon', () => {
		expect(bucketCoords(51.5074, -0.1278)).toEqual({ lat: 51.5, lon: -0.15 });
	});
});

describe('parseCoords', () => {
	it('returns bucketed coordinates for valid UK strings', () => {
		expect(parseCoords('51.5074', '-0.1278')).toEqual({ lat: 51.5, lon: -0.15 });
	});

	it('returns null for non-string input', () => {
		expect(parseCoords(null, '0')).toBeNull();
		expect(parseCoords('51', undefined)).toBeNull();
	});

	it('returns null for non-numeric strings', () => {
		expect(parseCoords('abc', 'def')).toBeNull();
	});

	it('rejects coordinates outside the UK bounding box', () => {
		expect(parseCoords('40', '-0.1')).toBeNull(); // too far south
		expect(parseCoords('70', '-0.1')).toBeNull(); // too far north
		expect(parseCoords('51.5', '-20')).toBeNull(); // too far west
		expect(parseCoords('51.5', '10')).toBeNull(); // too far east
	});

	it('accepts the southern Channel Islands (49N) and Shetland (60N)', () => {
		expect(parseCoords('49.4', '-2.5')).not.toBeNull();
		expect(parseCoords('60.5', '-1.2')).not.toBeNull();
	});
});
