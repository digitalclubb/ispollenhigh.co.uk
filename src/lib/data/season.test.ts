import { describe, expect, it } from 'vitest';
import type { Location } from './locations';
import { calendarFor, peakMonth, seasonRange, seasonSummary } from './season';

const APRIL = 3;
const JUNE = 5;
const JULY = 6;

function place(parentRegion: string, name = 'Testville'): Location {
	return { slug: 'testville', name, type: 'town', lat: 52, lon: -1, parentRegion };
}

describe('pollen calendar', () => {
	it('peaks tree pollen in spring and grass pollen in early summer', () => {
		const cal = calendarFor(place('south-east'));
		expect(peakMonth(cal, 'tree')).toBe(APRIL);
		expect(peakMonth(cal, 'grass')).toBe(JUNE);
	});

	it('runs the grass season later in Scotland than in the south', () => {
		const south = seasonRange(calendarFor(place('south-east')), 'grass');
		const scotland = seasonRange(calendarFor(place('strathclyde')), 'grass');
		expect(south).not.toBeNull();
		expect(scotland).not.toBeNull();
		expect(scotland?.from ?? 0).toBeGreaterThan(south?.from ?? 0);
		expect(peakMonth(calendarFor(place('strathclyde')), 'grass')).toBe(JULY);
	});

	it('has no pollen in the depths of winter anywhere', () => {
		for (const region of ['south-east', 'west-midlands', 'north-west', 'grampian']) {
			const cal = calendarFor(place(region));
			for (const kind of ['tree', 'grass', 'weed'] as const) {
				expect(cal[kind][11]).toBe(0); // December
				expect(cal[kind][0]).toBe(0); // January
			}
		}
	});

	it('falls back to the midlands calendar for a location with no region', () => {
		const orphan: Location = { slug: 'x', name: 'X', type: 'town', lat: 52, lon: -1 };
		expect(calendarFor(orphan)).toEqual(calendarFor(place('west-midlands')));
	});
});

describe('seasonSummary', () => {
	it('names the location in every sentence', () => {
		const summary = seasonSummary(place('south-east', 'Skegness'), JUNE);
		for (const line of summary.lines) {
			expect(line.text).toContain('Skegness');
		}
	});

	it('reports being in season in June and out of it in December', () => {
		expect(seasonSummary(place('south-east'), JUNE).inSeason).toBe(true);
		expect(seasonSummary(place('south-east'), 11).inSeason).toBe(false);
	});

	it('describes the whole season as a month range', () => {
		const summary = seasonSummary(place('south-east'), JUNE);
		expect(summary.overall).toBe('February to October');
		expect(summary.worstMonths.length).toBeGreaterThan(0);
	});
});
