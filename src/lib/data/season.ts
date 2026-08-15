import type { Location } from './locations';

/**
 * Month-by-month pollen calendar.
 *
 * The live forecast only answers "today". Most of the year — and most of the
 * searching that happens outside June — the question is "when does it start",
 * "when will it end", "why am I sneezing in April". This module answers those
 * without an API call, which is also what makes a location page worth serving
 * in February.
 *
 * Timings follow the Met Office / Royal Meteorological Society picture of the
 * UK season: tree pollen from late February (alder, hazel) peaking with birch
 * in April; grass — the trigger for roughly 95% of UK hayfever — from mid-May
 * with a June/July peak; weeds from June into September. The season runs
 * progressively later the further north you go, by about a fortnight between
 * the south coast and central Scotland.
 */

export type PollenKind = 'tree' | 'grass' | 'weed';

/** 0 = none, 1 = starting or trailing off, 2 = active, 3 = peak. */
export type Intensity = 0 | 1 | 2 | 3;

export type Calendar = Record<PollenKind, Intensity[]>;

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
] as const;

export const MONTHS_SHORT = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
] as const;

/**
 * Four climate bands. Within a band the differences are smaller than the
 * year-to-year variation, so pretending otherwise would be false precision.
 */
type Band = 'south' | 'midlands' | 'north' | 'scotland';

const BAND_BY_REGION: Record<string, Band> = {
	london: 'south',
	'south-east': 'south',
	'south-west': 'south',
	'east-of-england': 'south',
	'east-midlands': 'midlands',
	'west-midlands': 'midlands',
	wales: 'midlands',
	'north-west': 'north',
	'north-east': 'north',
	'yorkshire-and-humber': 'north',
	'northern-ireland': 'north',
	grampian: 'scotland',
	'highland-and-eilean-siar': 'scotland',
	'tayside-and-fife': 'scotland',
	strathclyde: 'scotland',
	'dumfries-and-borders': 'scotland'
};

//                        J  F  M  A  M  J  J  A  S  O  N  D
const CALENDARS: Record<Band, Calendar> = {
	south: {
		tree: [0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0],
		grass: [0, 0, 0, 0, 2, 3, 3, 1, 0, 0, 0, 0],
		weed: [0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0]
	},
	midlands: {
		tree: [0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0],
		grass: [0, 0, 0, 0, 1, 3, 3, 2, 0, 0, 0, 0],
		weed: [0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0]
	},
	north: {
		tree: [0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0],
		grass: [0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0],
		weed: [0, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 0]
	},
	scotland: {
		tree: [0, 0, 1, 2, 3, 2, 0, 0, 0, 0, 0, 0],
		grass: [0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 0, 0],
		weed: [0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 0, 0]
	}
};

function bandFor(loc: Location): Band {
	const key = loc.type === 'region' ? loc.slug : loc.parentRegion;
	return (key && BAND_BY_REGION[key]) || 'midlands';
}

export function calendarFor(loc: Location): Calendar {
	return CALENDARS[bandFor(loc)];
}

/** Inclusive month range where a pollen type is active at all. */
export function seasonRange(cal: Calendar, kind: PollenKind): { from: number; to: number } | null {
	const months = cal[kind];
	const from = months.findIndex((v) => v > 0);
	if (from === -1) return null;
	let to = from;
	for (let i = from; i < months.length; i++) if ((months[i] ?? 0) > 0) to = i;
	return { from, to };
}

/** The peak month index for a pollen type, or null if it never peaks. */
export function peakMonth(cal: Calendar, kind: PollenKind): number | null {
	const months = cal[kind];
	let best = -1;
	let bestValue = 0;
	months.forEach((v, i) => {
		if (v > bestValue) {
			bestValue = v;
			best = i;
		}
	});
	return best === -1 ? null : best;
}

export interface SeasonSummary {
	/** "late February to early June" style range for the whole season. */
	overall: string;
	/** One sentence per pollen type, naming months. */
	lines: { kind: PollenKind; label: string; text: string }[];
	/** True when today falls inside any active month. */
	inSeason: boolean;
	/** Months where something is peaking, for the "worst time" sentence. */
	worstMonths: string[];
}

const KIND_LABEL: Record<PollenKind, string> = {
	tree: 'Tree pollen',
	grass: 'Grass pollen',
	weed: 'Weed pollen'
};

function range(cal: Calendar, kind: PollenKind): string {
	const r = seasonRange(cal, kind);
	if (!r) return 'rarely a problem here';
	if (r.from === r.to) return `${MONTHS[r.from]} only`;
	return `${MONTHS[r.from]} to ${MONTHS[r.to]}`;
}

/**
 * Prose summary for a location. Built from the same table the grid renders,
 * so the words and the chart can never disagree.
 */
export function seasonSummary(loc: Location, month: number): SeasonSummary {
	const cal = calendarFor(loc);
	const kinds: PollenKind[] = ['tree', 'grass', 'weed'];

	const lines = kinds.map((kind) => {
		const peak = peakMonth(cal, kind);
		const peakText = peak === null ? '' : ` It peaks in ${MONTHS[peak]}.`;
		return {
			kind,
			label: KIND_LABEL[kind],
			text: `${KIND_LABEL[kind]} in ${loc.name} runs from ${range(cal, kind)}.${peakText}`
		};
	});

	const active = kinds.some((k) => (cal[k][month] ?? 0) > 0);
	const worst = MONTHS.filter((_, i) => kinds.some((k) => cal[k][i] === 3));

	const starts = Math.min(...kinds.map((k) => seasonRange(cal, k)?.from ?? 11));
	const ends = Math.max(...kinds.map((k) => seasonRange(cal, k)?.to ?? 0));

	return {
		overall: `${MONTHS[starts]} to ${MONTHS[ends]}`,
		lines,
		inSeason: active,
		worstMonths: [...worst]
	};
}
