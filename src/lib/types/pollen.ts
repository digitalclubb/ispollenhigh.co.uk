/**
 * Provider-agnostic shape of a pollen reading. Both the Google and Open-Meteo
 * adapters normalise to this. The UI never sees provider quirks.
 */

export type PollenLevel = 'none' | 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';

export type PollenCategory = 'grass' | 'tree' | 'weed';

export type PollenSource = 'google' | 'open-meteo' | 'synthetic';

export interface PollenTypeReading {
	level: PollenLevel;
	indexValue: number;
	dominantSpecies: string[];
}

export interface ForecastDay {
	date: string;
	overall: { level: PollenLevel; indexValue: number };
	types: Record<PollenCategory, PollenTypeReading>;
}

export interface PollenReading {
	location: { name: string; lat: number; lon: number };
	fetchedAt: string;
	validFor: string;
	overall: { level: PollenLevel; indexValue: number };
	types: Record<PollenCategory, PollenTypeReading>;
	/** Always non-empty. Day 0 is today. Both adapters and the synthetic
	   stub throw if they cannot produce at least one day. */
	forecast: [ForecastDay, ...ForecastDay[]];
	source: PollenSource;
	stale?: boolean;
}

export const POLLEN_LEVELS: readonly PollenLevel[] = [
	'none',
	'very-low',
	'low',
	'moderate',
	'high',
	'very-high'
] as const;

export function isHigh(level: PollenLevel): boolean {
	return level === 'high' || level === 'very-high';
}
