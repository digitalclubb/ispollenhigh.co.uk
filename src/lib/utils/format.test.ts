import { describe, expect, it } from 'vitest';
import type { ForecastDay, PollenLevel } from '$lib/types/pollen';
import {
	categoryLabel,
	dayLabelForOffset,
	fetchedAtTime,
	levelLabel,
	trendPreview,
	verdict
} from './format';

describe('levelLabel', () => {
	it('returns the human-readable name for each level', () => {
		expect(levelLabel('none')).toBe('None');
		expect(levelLabel('very-low')).toBe('Very low');
		expect(levelLabel('low')).toBe('Low');
		expect(levelLabel('moderate')).toBe('Moderate');
		expect(levelLabel('high')).toBe('High');
		expect(levelLabel('very-high')).toBe('Very high');
	});
});

describe('categoryLabel', () => {
	it('returns the human-readable name for each pollen category', () => {
		expect(categoryLabel('grass')).toBe('Grass');
		expect(categoryLabel('tree')).toBe('Tree');
		expect(categoryLabel('weed')).toBe('Weed');
	});
});

describe('dayLabelForOffset', () => {
	it('returns "today" for offset 0', () => {
		expect(dayLabelForOffset('2026-05-06', 0)).toEqual({ label: 'today', isToday: true });
	});

	it('returns "tomorrow" for offset 1', () => {
		expect(dayLabelForOffset('2026-05-07', 1)).toEqual({ label: 'tomorrow', isToday: false });
	});

	it('returns "on Saturday" for offset 4 with a Saturday date', () => {
		// 2026-05-09 is a Saturday.
		expect(dayLabelForOffset('2026-05-09', 4)).toEqual({
			label: 'on Saturday',
			isToday: false
		});
	});

	it('falls back to today for negative offsets', () => {
		expect(dayLabelForOffset('2026-05-06', -1)).toEqual({ label: 'today', isToday: true });
	});
});

describe('verdict', () => {
	it('returns affirmative form for high today', () => {
		expect(verdict('high', 'London', 'today', true)).toBe('Yes. Pollen is high in London today.');
	});

	it('returns affirmative form for very-high today', () => {
		expect(verdict('very-high', 'Manchester', 'today', true)).toBe(
			'Yes. Pollen is very high in Manchester today.'
		);
	});

	it('keeps the Yes. prefix for non-today high days', () => {
		expect(verdict('high', 'London', 'on Saturday', false)).toBe(
			'Yes. Pollen will be high in London on Saturday.'
		);
	});

	it('uses present tense for today, future for other days', () => {
		expect(verdict('moderate', 'Bristol', 'today', true)).toBe(
			'Pollen is moderate in Bristol today.'
		);
		expect(verdict('moderate', 'Bristol', 'tomorrow', false)).toBe(
			'Pollen will be moderate in Bristol tomorrow.'
		);
	});

	it('uses the no-pollen form for none', () => {
		expect(verdict('none', 'Edinburgh', 'today', true)).toBe('No pollen in Edinburgh today.');
		expect(verdict('none', 'Edinburgh', 'on Sunday', false)).toBe(
			'No pollen in Edinburgh on Sunday.'
		);
	});

	it('does not prefix Yes. on low or moderate', () => {
		expect(verdict('low', 'Cardiff', 'today', true)).toMatch(/^Pollen/);
		expect(verdict('moderate', 'Leeds', 'today', true)).toMatch(/^Pollen/);
	});
});

describe('trendPreview', () => {
	function day(level: PollenLevel, indexValue: number, date = '2026-05-06'): ForecastDay {
		return {
			date,
			overall: { level, indexValue },
			types: {
				grass: { level, indexValue, dominantSpecies: [] },
				tree: { level, indexValue, dominantSpecies: [] },
				weed: { level, indexValue, dominantSpecies: [] }
			}
		};
	}

	it('says "Tomorrow eases off" when next day is lower', () => {
		const f = [day('high', 4, '2026-05-06'), day('moderate', 3, '2026-05-07')];
		expect(trendPreview(f, 0)).toBe('Tomorrow eases off.');
	});

	it('says "Tomorrow climbs higher" when next day is higher', () => {
		const f = [day('moderate', 3, '2026-05-06'), day('high', 4, '2026-05-07')];
		expect(trendPreview(f, 0)).toBe('Tomorrow climbs higher.');
	});

	it('says "Tomorrow stays at this level" when equal', () => {
		const f = [day('high', 4, '2026-05-06'), day('high', 4, '2026-05-07')];
		expect(trendPreview(f, 0)).toBe('Tomorrow stays at this level.');
	});

	it('uses the weekday name when fromIndex is not 0', () => {
		// 2026-05-09 is a Saturday.
		const f = [day('high', 4, '2026-05-08'), day('moderate', 3, '2026-05-09')];
		expect(trendPreview(f, 0)).toContain('eases off');
		// fromIndex 0 says "Tomorrow"; fromIndex 1 onwards says the next day's name.
	});

	it('returns null when there is no next day', () => {
		const f = [day('high', 4)];
		expect(trendPreview(f, 0)).toBeNull();
	});

	it('returns null when fromIndex is out of bounds', () => {
		const f = [day('high', 4)];
		expect(trendPreview(f, 5)).toBeNull();
	});
});

describe('fetchedAtTime', () => {
	it('formats an ISO string as London-time HH:mm', () => {
		// 13:32 UTC in May is 14:32 BST (London summer time).
		expect(fetchedAtTime('2026-05-06T13:32:00Z')).toBe('14:32');
	});

	it('handles midnight rollover', () => {
		// 23:30 UTC in May is 00:30 BST next day.
		expect(fetchedAtTime('2026-05-06T23:30:00Z')).toBe('00:30');
	});
});
