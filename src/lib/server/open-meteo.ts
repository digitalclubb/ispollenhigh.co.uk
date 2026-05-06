import type {
	ForecastDay,
	PollenCategory,
	PollenLevel,
	PollenReading,
	PollenTypeReading
} from '$lib/types/pollen';

/**
 * Open-Meteo Air Quality fallback. Free CAMS-derived data with grass, alder,
 * birch, mugwort, olive, ragweed pollen. We map the European species onto our
 * grass/tree/weed buckets and threshold grains/m³ into UPI-style levels using
 * Met-Office-style bands.
 */

const ENDPOINT = 'https://air-quality-api.open-meteo.com/v1/air-quality';

const TREE_FIELDS = ['alder_pollen', 'birch_pollen', 'olive_pollen'] as const;
const WEED_FIELDS = ['mugwort_pollen', 'ragweed_pollen'] as const;
const GRASS_FIELD = 'grass_pollen';

const SPECIES_LABEL: Record<string, string> = {
	alder_pollen: 'Alder',
	birch_pollen: 'Birch',
	olive_pollen: 'Olive',
	mugwort_pollen: 'Mugwort',
	ragweed_pollen: 'Ragweed',
	grass_pollen: 'Grass'
};

interface OpenMeteoResponse {
	hourly?: {
		time?: string[];
	} & Partial<Record<string, number[]>>;
}

function bandGrass(grains: number): PollenLevel {
	if (grains < 1) return 'none';
	if (grains < 30) return 'very-low';
	if (grains < 50) return 'low';
	if (grains < 150) return 'moderate';
	if (grains < 300) return 'high';
	return 'very-high';
}

function bandTreeOrWeed(grains: number): PollenLevel {
	if (grains < 1) return 'none';
	if (grains < 15) return 'very-low';
	if (grains < 90) return 'low';
	if (grains < 200) return 'moderate';
	if (grains < 500) return 'high';
	return 'very-high';
}

function levelToIndex(level: PollenLevel): number {
	const idx: Record<PollenLevel, number> = {
		none: 0,
		'very-low': 1,
		low: 2,
		moderate: 3,
		high: 4,
		'very-high': 5
	};
	return idx[level];
}

function dailyMaxFromHourly(values: number[] | undefined, dayIdx: number): number {
	if (!values) return 0;
	const start = dayIdx * 24;
	const end = start + 24;
	let max = 0;
	for (let i = start; i < end && i < values.length; i++) {
		const v = values[i];
		if (v !== undefined && v > max) max = v;
	}
	return max;
}

function buildDay(
	hourly: NonNullable<OpenMeteoResponse['hourly']>,
	dayIdx: number,
	dateIso: string
): ForecastDay {
	const grass = dailyMaxFromHourly(hourly[GRASS_FIELD], dayIdx);
	const treeMax = Math.max(...TREE_FIELDS.map((f) => dailyMaxFromHourly(hourly[f], dayIdx)));
	const weedMax = Math.max(...WEED_FIELDS.map((f) => dailyMaxFromHourly(hourly[f], dayIdx)));

	const grassLevel = bandGrass(grass);
	const treeLevel = bandTreeOrWeed(treeMax);
	const weedLevel = bandTreeOrWeed(weedMax);

	const treeSpecies = dominantSpecies(hourly, TREE_FIELDS, dayIdx);
	const weedSpecies = dominantSpecies(hourly, WEED_FIELDS, dayIdx);

	const types: Record<PollenCategory, PollenTypeReading> = {
		grass: {
			level: grassLevel,
			indexValue: levelToIndex(grassLevel),
			dominantSpecies: grassLevel === 'none' ? [] : ['Grass']
		},
		tree: {
			level: treeLevel,
			indexValue: levelToIndex(treeLevel),
			dominantSpecies: treeSpecies
		},
		weed: {
			level: weedLevel,
			indexValue: levelToIndex(weedLevel),
			dominantSpecies: weedSpecies
		}
	};

	const overallIdx = Math.max(types.grass.indexValue, types.tree.indexValue, types.weed.indexValue);
	const overallLevels: PollenLevel[] = ['none', 'very-low', 'low', 'moderate', 'high', 'very-high'];
	return {
		date: dateIso,
		overall: { level: overallLevels[overallIdx] ?? 'none', indexValue: overallIdx },
		types
	};
}

function dominantSpecies(
	hourly: NonNullable<OpenMeteoResponse['hourly']>,
	fields: readonly string[],
	dayIdx: number
): string[] {
	const ranked = fields
		.map((f) => ({ field: f, value: dailyMaxFromHourly(hourly[f], dayIdx) }))
		.filter((r) => r.value > 5)
		.sort((a, b) => b.value - a.value)
		.slice(0, 2);
	return ranked.map((r) => SPECIES_LABEL[r.field] ?? r.field);
}

export async function fetchOpenMeteoPollen(args: {
	lat: number;
	lon: number;
	signal?: AbortSignal;
}): Promise<Pick<PollenReading, 'overall' | 'types' | 'forecast' | 'validFor' | 'source'>> {
	const url = new URL(ENDPOINT);
	url.searchParams.set('latitude', args.lat.toString());
	url.searchParams.set('longitude', args.lon.toString());
	url.searchParams.set('hourly', [GRASS_FIELD, ...TREE_FIELDS, ...WEED_FIELDS].join(','));
	url.searchParams.set('timezone', 'Europe/London');
	url.searchParams.set('forecast_days', '5');

	const res = await fetch(url, { signal: args.signal });
	if (!res.ok) throw new Error(`Open-Meteo ${res.status}`);
	const data = (await res.json()) as OpenMeteoResponse;
	const hourly = data.hourly;
	const times = hourly?.time ?? [];
	if (!hourly || times.length === 0) throw new Error('Open-Meteo: empty hourly');

	const dayCount = Math.min(5, Math.ceil(times.length / 24));
	const forecast: ForecastDay[] = [];
	for (let i = 0; i < dayCount; i++) {
		const t = times[i * 24];
		const dateIso = t ? t.slice(0, 10) : new Date().toISOString().slice(0, 10);
		forecast.push(buildDay(hourly, i, dateIso));
	}

	const today = forecast[0];
	if (!today) throw new Error('Open-Meteo: empty forecast');
	return {
		validFor: today.date,
		overall: today.overall,
		types: today.types,
		forecast,
		source: 'open-meteo'
	};
}
