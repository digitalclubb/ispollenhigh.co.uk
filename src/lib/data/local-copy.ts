import { type Location, REGIONS } from './locations';

/**
 * Per-location copy. Rather than hand-writing 191 paragraphs, we template by
 * region so southern locations mention the species that actually peak there
 * (London plane, oak) and northern ones mention theirs (birch, alder).
 *
 * Each rendered block is 80-120 words, and the regional variation plus the
 * location name itself is enough to make every page unique to a crawler.
 */

interface RegionCopy {
	dominantTrees: string[];
	dominantGrasses: string[];
	dominantWeeds: string[];
	peakGrass: string;
	peakTree: string;
	flavour: string;
}

const REGION_COPY: Record<string, RegionCopy> = {
	london: {
		dominantTrees: ['London plane', 'oak', 'lime'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle', 'mugwort'],
		peakGrass: 'late May into early July',
		peakTree: 'late March to early May',
		flavour:
			'mature urban canopy with high plane and lime cover keeps the tree count active well into May'
	},
	'south-east': {
		dominantTrees: ['oak', 'ash', 'silver birch'],
		dominantGrasses: ['ryegrass', 'timothy', 'cocksfoot'],
		dominantWeeds: ['nettle', 'plantain'],
		peakGrass: 'late May to early July',
		peakTree: 'April',
		flavour:
			'a long warm season and a high oak count make for one of the most active pollen calendars in the UK'
	},
	'south-west': {
		dominantTrees: ['oak', 'ash', 'hornbeam'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle', 'dock'],
		peakGrass: 'June',
		peakTree: 'April',
		flavour:
			'mild winters bring tree pollen forward; coastal breezes can keep the grass count down on the worst days'
	},
	'east-of-england': {
		dominantTrees: ['oak', 'ash', 'silver birch'],
		dominantGrasses: ['ryegrass', 'timothy'],
		dominantWeeds: ['nettle', 'plantain'],
		peakGrass: 'June',
		peakTree: 'April',
		flavour: 'the dry, flat farmland tends to give grass pollen a long run from late May through July'
	},
	'east-midlands': {
		dominantTrees: ['oak', 'silver birch', 'ash'],
		dominantGrasses: ['ryegrass', 'timothy'],
		dominantWeeds: ['nettle', 'mugwort'],
		peakGrass: 'late May to June',
		peakTree: 'April',
		flavour:
			'a mix of farmland and woodland produces a long grass season and a sharp tree peak in April'
	},
	'west-midlands': {
		dominantTrees: ['oak', 'silver birch', 'ash'],
		dominantGrasses: ['ryegrass', 'timothy'],
		dominantWeeds: ['nettle', 'dock'],
		peakGrass: 'late May to June',
		peakTree: 'April',
		flavour:
			'tree pollen typically peaks earlier here than in the north and grass keeps going through June'
	},
	'yorkshire-and-humber': {
		dominantTrees: ['silver birch', 'oak', 'ash'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle', 'plantain'],
		peakGrass: 'June',
		peakTree: 'April',
		flavour: 'birch is a notable trigger here in April; grass takes over by mid-June'
	},
	'north-west': {
		dominantTrees: ['silver birch', 'oak', 'alder'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle'],
		peakGrass: 'June into early July',
		peakTree: 'April',
		flavour:
			'damper conditions can suppress airborne grains, but birch can spike sharply on dry April days'
	},
	'north-east': {
		dominantTrees: ['silver birch', 'alder', 'oak'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle', 'plantain'],
		peakGrass: 'June into early July',
		peakTree: 'April',
		flavour: 'cooler springs push the tree peak slightly later than the south'
	},
	wales: {
		dominantTrees: ['oak', 'birch', 'alder'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle', 'dock'],
		peakGrass: 'June',
		peakTree: 'April',
		flavour:
			'mountain rain can clear the air quickly but valley pockets see persistent grass counts in June'
	},
	'northern-ireland': {
		dominantTrees: ['birch', 'alder', 'oak'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle'],
		peakGrass: 'June',
		peakTree: 'April',
		flavour:
			'birch and alder are the headline tree triggers; the grass season is shorter than in southern England'
	},
	'highland-and-eilean-siar': {
		dominantTrees: ['birch', 'alder'],
		dominantGrasses: ['ryegrass'],
		dominantWeeds: ['nettle'],
		peakGrass: 'late June to early July',
		peakTree: 'late April to May',
		flavour: 'a short, sharp pollen season pushed back by cool springs and wet weather'
	},
	grampian: {
		dominantTrees: ['birch', 'alder', 'pine'],
		dominantGrasses: ['ryegrass'],
		dominantWeeds: ['nettle'],
		peakGrass: 'late June to early July',
		peakTree: 'late April',
		flavour: 'the season runs later than in the south, with birch as the standout tree'
	},
	'tayside-and-fife': {
		dominantTrees: ['birch', 'oak', 'alder'],
		dominantGrasses: ['ryegrass'],
		dominantWeeds: ['nettle'],
		peakGrass: 'late June',
		peakTree: 'late April',
		flavour: 'inland stretches can register higher counts than the coastal towns on dry days'
	},
	strathclyde: {
		dominantTrees: ['birch', 'alder', 'oak'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle'],
		peakGrass: 'late June',
		peakTree: 'late April',
		flavour:
			'wet weather can suppress counts, but breaks of fine weather see sharp birch and grass peaks'
	},
	'dumfries-and-borders': {
		dominantTrees: ['birch', 'alder', 'oak'],
		dominantGrasses: ['ryegrass', 'cocksfoot'],
		dominantWeeds: ['nettle'],
		peakGrass: 'late June',
		peakTree: 'late April',
		flavour:
			'a similar profile to the rest of southern Scotland with a tree peak slightly later than England'
	}
};

const DEFAULT_COPY: RegionCopy = {
	dominantTrees: ['oak', 'birch', 'ash'],
	dominantGrasses: ['ryegrass', 'timothy', 'cocksfoot'],
	dominantWeeds: ['nettle', 'mugwort'],
	peakGrass: 'late May to early July',
	peakTree: 'April',
	flavour:
		'follows the typical UK pattern of a tree peak in spring and a long grass season into early summer'
};

export interface LocationCopyVars {
	intro: string;
	species: string;
	timing: string;
	cross: string;
}

/**
 * Produces a 80-120 word block of copy for a location, varied by parent region.
 * Returns four sentences as separate fields so the template can mark them up.
 */
export function locationCopy(loc: Location): LocationCopyVars {
	const region = loc.parentRegion ? REGION_COPY[loc.parentRegion] : undefined;
	const r = region ?? DEFAULT_COPY;

	const intro = introFor(loc);
	const species = `Tree pollen here is dominated by ${listAnd(r.dominantTrees)}, with grass led by ${listAnd(r.dominantGrasses)} and weeds by ${listAnd(r.dominantWeeds)}.`;
	const timing = `Tree pollen typically peaks in ${r.peakTree}, and grass counts are highest from ${r.peakGrass}. ${capitalise(r.flavour)}.`;
	const cross = crossLink(loc);

	return { intro, species, timing, cross };
}

function introFor(loc: Location): string {
	if (loc.type === 'city') {
		return `Hayfever sufferers in ${loc.name} should track all three pollen types from March through August.`;
	}
	if (loc.type === 'postcode-area') {
		return `${loc.name.split(' ')[0]} covers part of ${parentName(loc) ?? 'the UK'} and follows its regional pollen pattern closely.`;
	}
	return `${loc.name} sees the typical UK pollen calendar, with a tree-led spring peak and a grass-led early summer.`;
}

function crossLink(loc: Location): string {
	if (loc.type === 'region') {
		return `If you're in a specific town or postcode area, search above for a more local view.`;
	}
	const region = REGIONS.find((r) => r.slug === loc.parentRegion);
	if (!region) return `Search above to compare neighbouring postcode areas and towns.`;
	return `For the wider regional view see ${region.name}.`;
}

function parentName(loc: Location): string | undefined {
	const region = REGIONS.find((r) => r.slug === loc.parentRegion);
	return region?.name;
}

function listAnd(items: readonly string[]): string {
	if (items.length === 0) return '';
	if (items.length === 1) return items[0] ?? '';
	if (items.length === 2) return `${items[0]} and ${items[1]}`;
	return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function capitalise(s: string): string {
	const first = s.charAt(0);
	return first ? first.toUpperCase() + s.slice(1) : s;
}
