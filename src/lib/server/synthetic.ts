import type { ForecastDay, PollenCategory, PollenLevel, PollenReading } from '$lib/types/pollen';

/**
 * Deterministic synthetic data so local development works without an API key
 * and the UI looks alive. Seeded by date + bucketed coords so the same
 * location reads the same all day.
 */

const LEVELS: readonly PollenLevel[] = ['none', 'very-low', 'low', 'moderate', 'high', 'very-high'];

const SPECIES: Record<PollenCategory, string[]> = {
	grass: ['Rye', 'Timothy', 'Cocksfoot', 'Meadow Foxtail'],
	tree: ['Oak', 'Birch', 'Ash', 'Hazel', 'Plane', 'Pine'],
	weed: ['Nettle', 'Mugwort', 'Dock', 'Plantain']
};

function hash(s: string): number {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

function pickLevel(seed: number): PollenLevel {
	// Bias toward moderate/high during May-June. Today is the seed offset.
	const month = new Date().getUTCMonth(); // 0-11
	const peakBoost = month >= 3 && month <= 7 ? 1 : 0;
	const i = (seed % 5) + peakBoost;
	return LEVELS[Math.min(i + 1, LEVELS.length - 1)] ?? 'low';
}

function levelToIndex(level: PollenLevel): number {
	return Math.max(0, LEVELS.indexOf(level));
}

function buildDay(seed: number, dateIso: string): ForecastDay {
	const grass = pickLevel(seed * 3 + 1);
	const tree = pickLevel(seed * 5 + 2);
	const weed = pickLevel(seed * 7 + 3);
	const overallIdx = Math.max(levelToIndex(grass), levelToIndex(tree), levelToIndex(weed));
	const overallLevel = LEVELS[overallIdx] ?? 'low';
	return {
		date: dateIso,
		overall: { level: overallLevel, indexValue: overallIdx },
		types: {
			grass: {
				level: grass,
				indexValue: levelToIndex(grass),
				dominantSpecies: pickSpecies('grass', seed)
			},
			tree: {
				level: tree,
				indexValue: levelToIndex(tree),
				dominantSpecies: pickSpecies('tree', seed)
			},
			weed: { level: weed, indexValue: levelToIndex(weed), dominantSpecies: pickSpecies('weed', seed) }
		}
	};
}

function pickSpecies(cat: PollenCategory, seed: number): string[] {
	const list = SPECIES[cat];
	const a = list[seed % list.length];
	const b = list[(seed * 13 + 7) % list.length];
	return a && b && a !== b ? [a, b] : a ? [a] : [];
}

export function syntheticReading(args: {
	lat: number;
	lon: number;
	locationName: string;
}): PollenReading {
	const today = new Date();
	const todayIso = today.toISOString().slice(0, 10);
	const seedKey = `${args.lat.toFixed(2)}_${args.lon.toFixed(2)}_${todayIso}`;
	const seed = hash(seedKey);

	const forecast: ForecastDay[] = [];
	for (let i = 0; i < 5; i++) {
		const d = new Date(today);
		d.setUTCDate(d.getUTCDate() + i);
		forecast.push(buildDay(seed + i * 31, d.toISOString().slice(0, 10)));
	}

	const today0 = forecast[0];
	if (!today0) throw new Error('synthetic: forecast empty');

	return {
		location: { name: args.locationName, lat: args.lat, lon: args.lon },
		fetchedAt: new Date().toISOString(),
		validFor: today0.date,
		overall: today0.overall,
		types: today0.types,
		forecast: forecast as [ForecastDay, ...ForecastDay[]],
		source: 'synthetic'
	};
}
