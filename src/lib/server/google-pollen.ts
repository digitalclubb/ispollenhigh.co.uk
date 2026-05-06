import type {
	ForecastDay,
	PollenCategory,
	PollenLevel,
	PollenReading,
	PollenTypeReading
} from '$lib/types/pollen';

/**
 * Google Pollen API client. Docs: https://developers.google.com/maps/documentation/pollen
 *
 * Forecast Lookup endpoint returns a 5-day forecast keyed by Universal Pollen
 * Index (UPI 0-5). Maps cleanly to our PollenLevel.
 */

const ENDPOINT = 'https://pollen.googleapis.com/v1/forecast:lookup';

interface GoogleDateObj {
	year: number;
	month: number;
	day: number;
}

interface GoogleIndexInfo {
	code: string;
	displayName: string;
	value?: number;
	category?: string;
}

interface GooglePollenTypeInfo {
	code: 'GRASS' | 'TREE' | 'WEED';
	displayName: string;
	inSeason?: boolean;
	indexInfo?: GoogleIndexInfo;
}

interface GooglePlantInfo {
	code: string;
	displayName: string;
	inSeason?: boolean;
	indexInfo?: GoogleIndexInfo;
	plantDescription?: { type: 'GRASS' | 'TREE' | 'WEED' };
}

interface GoogleDailyInfo {
	date: GoogleDateObj;
	pollenTypeInfo?: GooglePollenTypeInfo[];
	plantInfo?: GooglePlantInfo[];
}

interface GoogleForecastResponse {
	regionCode?: string;
	dailyInfo?: GoogleDailyInfo[];
}

const TYPE_TO_CATEGORY: Record<'GRASS' | 'TREE' | 'WEED', PollenCategory> = {
	GRASS: 'grass',
	TREE: 'tree',
	WEED: 'weed'
};

function upiToLevel(value: number | undefined): PollenLevel {
	if (value === undefined || value === 0) return 'none';
	if (value === 1) return 'very-low';
	if (value === 2) return 'low';
	if (value === 3) return 'moderate';
	if (value === 4) return 'high';
	return 'very-high';
}

function dateObjToIso(d: GoogleDateObj): string {
	const m = String(d.month).padStart(2, '0');
	const day = String(d.day).padStart(2, '0');
	return `${d.year}-${m}-${day}`;
}

function emptyTypeReading(): PollenTypeReading {
	return { level: 'none', indexValue: 0, dominantSpecies: [] };
}

function buildForecastDay(daily: GoogleDailyInfo): ForecastDay {
	const types: Record<PollenCategory, PollenTypeReading> = {
		grass: emptyTypeReading(),
		tree: emptyTypeReading(),
		weed: emptyTypeReading()
	};

	for (const t of daily.pollenTypeInfo ?? []) {
		const cat = TYPE_TO_CATEGORY[t.code];
		if (!cat) continue;
		types[cat] = {
			level: upiToLevel(t.indexInfo?.value),
			indexValue: t.indexInfo?.value ?? 0,
			dominantSpecies: []
		};
	}

	for (const p of daily.plantInfo ?? []) {
		const cat = p.plantDescription?.type ? TYPE_TO_CATEGORY[p.plantDescription.type] : undefined;
		if (!cat) continue;
		if (!p.inSeason) continue;
		const value = p.indexInfo?.value ?? 0;
		if (value < 3) continue;
		const list = types[cat].dominantSpecies;
		if (list.length < 2 && !list.includes(p.displayName)) list.push(p.displayName);
	}

	const overallIdx = Math.max(types.grass.indexValue, types.tree.indexValue, types.weed.indexValue);
	return {
		date: dateObjToIso(daily.date),
		overall: { level: upiToLevel(overallIdx), indexValue: overallIdx },
		types
	};
}

export async function fetchGooglePollen(args: {
	lat: number;
	lon: number;
	apiKey: string;
	signal?: AbortSignal;
}): Promise<Pick<PollenReading, 'overall' | 'types' | 'forecast' | 'validFor' | 'source'>> {
	const url = new URL(ENDPOINT);
	url.searchParams.set('key', args.apiKey);
	url.searchParams.set('location.latitude', args.lat.toString());
	url.searchParams.set('location.longitude', args.lon.toString());
	url.searchParams.set('days', '5');
	url.searchParams.set('languageCode', 'en-GB');

	const res = await fetchWithRetry(url, args.signal);
	if (!res.ok) {
		throw new Error(`Google Pollen API ${res.status}`);
	}
	const data = (await res.json()) as GoogleForecastResponse;
	const days = (data.dailyInfo ?? []).map(buildForecastDay);
	const today = days[0];
	if (!today) throw new Error('Google Pollen API: empty dailyInfo');

	return {
		validFor: today.date,
		overall: today.overall,
		types: today.types,
		forecast: days as [ForecastDay, ...ForecastDay[]],
		source: 'google'
	};
}

async function fetchWithRetry(url: URL, signal: AbortSignal | undefined): Promise<Response> {
	const res = await fetch(url, { signal });
	if (res.status >= 500 && res.status < 600) {
		await new Promise((r) => setTimeout(r, 250));
		return fetch(url, { signal });
	}
	return res;
}
