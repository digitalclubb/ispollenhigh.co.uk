import type { PollenCategory, PollenLevel } from '$lib/types/pollen';

const LEVEL_LABELS: Record<PollenLevel, string> = {
	none: 'None',
	'very-low': 'Very low',
	low: 'Low',
	moderate: 'Moderate',
	high: 'High',
	'very-high': 'Very high'
};

const CATEGORY_LABELS: Record<PollenCategory, string> = {
	grass: 'Grass',
	tree: 'Tree',
	weed: 'Weed'
};

export function levelLabel(level: PollenLevel): string {
	return LEVEL_LABELS[level];
}

export function categoryLabel(category: PollenCategory): string {
	return CATEGORY_LABELS[category];
}

/**
 * Long-form British date stamp like "Tuesday, 5 May 2026". Used under the H1.
 */
export function longDate(iso: string): string {
	const d = new Date(iso);
	return new Intl.DateTimeFormat('en-GB', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(d);
}

/**
 * Short day name for the forecast strip ("Mon", "Tue").
 */
export function shortWeekday(iso: string): string {
	const d = new Date(iso);
	return new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(d);
}

/**
 * Plain-language verdict for the H1. British, terse, no marketing register.
 */
export function verdict(level: PollenLevel, locationName: string): string {
	const labels: Record<PollenLevel, string> = {
		none: `No pollen in ${locationName} today.`,
		'very-low': `Pollen is very low in ${locationName} today.`,
		low: `Pollen is low in ${locationName} today.`,
		moderate: `Pollen is moderate in ${locationName} today.`,
		high: `Yes. Pollen is high in ${locationName} today.`,
		'very-high': `Yes. Pollen is very high in ${locationName} today.`
	};
	return labels[level];
}
