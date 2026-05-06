import type { ForecastDay, PollenCategory, PollenLevel } from '$lib/types/pollen';

const LEVEL_LABELS: Record<PollenLevel, string> = {
	none: 'None',
	'very-low': 'Very low',
	low: 'Low',
	moderate: 'Moderate',
	high: 'High',
	'very-high': 'Very high'
};

const LEVEL_TEXT: Record<PollenLevel, string> = {
	none: '',
	'very-low': 'very low',
	low: 'low',
	moderate: 'moderate',
	high: 'high',
	'very-high': 'very high'
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
 * Trailing phrase for the H1 ("today", "tomorrow", "on Saturday") and a
 * boolean signalling whether we should use present tense rather than future.
 * Negative offsets fall back to today rather than producing nonsense.
 */
export function dayLabelForOffset(
	iso: string,
	offset: number
): { label: string; isToday: boolean } {
	if (offset <= 0) return { label: 'today', isToday: true };
	if (offset === 1) return { label: 'tomorrow', isToday: false };
	const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(new Date(iso));
	return { label: `on ${weekday}`, isToday: false };
}

/**
 * Plain-language verdict for the H1. British, terse, no marketing register.
 * `dayLabel` is the trailing phrase ("today", "tomorrow", "on Saturday") and
 * `isToday` flips the verb so future days read as forecasts ("will be")
 * rather than statements of fact ("is"). The "Yes." affirmative prefix
 * applies on high and very-high regardless of the day, so the brand voice
 * is consistent across today and the rest of the strip.
 */
export function verdict(
	level: PollenLevel,
	locationName: string,
	dayLabel: string,
	isToday: boolean
): string {
	if (level === 'none') return `No pollen in ${locationName} ${dayLabel}.`;

	const verb = isToday ? 'is' : 'will be';
	const yesPrefix = level === 'high' || level === 'very-high' ? 'Yes. ' : '';
	return `${yesPrefix}Pollen ${verb} ${LEVEL_TEXT[level]} in ${locationName} ${dayLabel}.`;
}

/**
 * One-line trend hint. Compares the level of the day after `fromIndex` to
 * `fromIndex` itself and produces a short phrase. Returns null when there
 * is no following day to compare with.
 */
export function trendPreview(forecast: ForecastDay[], fromIndex: number): string | null {
	const cur = forecast[fromIndex];
	const next = forecast[fromIndex + 1];
	if (!cur || !next) return null;

	const delta = next.overall.indexValue - cur.overall.indexValue;
	const nextDayName =
		fromIndex === 0
			? 'Tomorrow'
			: new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(new Date(next.date));

	if (delta < 0) return `${nextDayName} eases off.`;
	if (delta > 0) return `${nextDayName} climbs higher.`;
	return `${nextDayName} stays at this level.`;
}

/**
 * London-time HH:mm stamp for the data freshness pill. Hardcoded to
 * Europe/London because the product is UK-only and rendering "Updated 14:32"
 * in the user's own timezone would be misleading when our cache windows are
 * keyed off UK clock time.
 */
export function fetchedAtTime(iso: string): string {
	return new Intl.DateTimeFormat('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Europe/London',
		hour12: false
	}).format(new Date(iso));
}
