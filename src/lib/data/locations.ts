/**
 * Phase 2 location registry. Phase 3 expands this to the full v1 set:
 * 124 UK postcode areas + 50 cities + 16 Met Office regions = 190 places.
 *
 * Centroid coordinates are taken from the named main settlement of each area
 * (or the geographic centre for regions) and rounded to 4 decimals.
 *
 * Search terms are alternate strings users might type. Slug + name are
 * matched automatically; only add aliases that aren't already captured.
 */

export type LocationType = 'postcode-area' | 'city' | 'region';

export interface Location {
	slug: string;
	name: string;
	type: LocationType;
	lat: number;
	lon: number;
	parentRegion?: string;
	aliases?: string[];
}

/** Met Office regional groupings used for parentRegion cross-linking. */
export const REGIONS: Location[] = [
	{
		slug: 'south-east',
		name: 'South East England',
		type: 'region',
		lat: 51.4,
		lon: -0.4,
		aliases: ['south east', 'se england']
	},
	{
		slug: 'south-west',
		name: 'South West England',
		type: 'region',
		lat: 50.96,
		lon: -3.5,
		aliases: ['south west', 'sw england']
	},
	{ slug: 'london', name: 'Greater London', type: 'region', lat: 51.5074, lon: -0.1278 },
	{
		slug: 'north-west',
		name: 'North West England',
		type: 'region',
		lat: 53.7,
		lon: -2.6,
		aliases: ['north west', 'nw england']
	},
	{ slug: 'scotland', name: 'Scotland', type: 'region', lat: 56.49, lon: -4.2 }
];

export const CITIES: Location[] = [
	{
		slug: 'london',
		name: 'London',
		type: 'city',
		lat: 51.5074,
		lon: -0.1278,
		parentRegion: 'london'
	},
	{
		slug: 'manchester',
		name: 'Manchester',
		type: 'city',
		lat: 53.4808,
		lon: -2.2426,
		parentRegion: 'north-west'
	},
	{
		slug: 'birmingham',
		name: 'Birmingham',
		type: 'city',
		lat: 52.4862,
		lon: -1.8904,
		parentRegion: 'south-east'
	},
	{
		slug: 'leeds',
		name: 'Leeds',
		type: 'city',
		lat: 53.8008,
		lon: -1.5491,
		parentRegion: 'north-west'
	},
	{
		slug: 'liverpool',
		name: 'Liverpool',
		type: 'city',
		lat: 53.4084,
		lon: -2.9916,
		parentRegion: 'north-west'
	},
	{
		slug: 'bristol',
		name: 'Bristol',
		type: 'city',
		lat: 51.4545,
		lon: -2.5879,
		parentRegion: 'south-west'
	},
	{
		slug: 'glasgow',
		name: 'Glasgow',
		type: 'city',
		lat: 55.8642,
		lon: -4.2518,
		parentRegion: 'scotland'
	},
	{
		slug: 'edinburgh',
		name: 'Edinburgh',
		type: 'city',
		lat: 55.9533,
		lon: -3.1883,
		parentRegion: 'scotland'
	},
	{
		slug: 'cardiff',
		name: 'Cardiff',
		type: 'city',
		lat: 51.4816,
		lon: -3.1791,
		parentRegion: 'south-west'
	},
	{
		slug: 'sheffield',
		name: 'Sheffield',
		type: 'city',
		lat: 53.3811,
		lon: -1.4701,
		parentRegion: 'north-west'
	}
];

/**
 * Postcode areas. Slug is the lowercased area code; the name uses the
 * conventional "{CODE} ({main town})" form so the H1 reads naturally:
 * "Pollen is high in SW (London) today.".
 */
export const POSTCODE_AREAS: Location[] = [
	{
		slug: 'sw',
		name: 'SW (south-west London)',
		type: 'postcode-area',
		lat: 51.46,
		lon: -0.18,
		parentRegion: 'london'
	},
	{
		slug: 'n',
		name: 'N (north London)',
		type: 'postcode-area',
		lat: 51.56,
		lon: -0.1,
		parentRegion: 'london'
	},
	{
		slug: 'e',
		name: 'E (east London)',
		type: 'postcode-area',
		lat: 51.54,
		lon: 0.03,
		parentRegion: 'london'
	},
	{
		slug: 'w',
		name: 'W (west London)',
		type: 'postcode-area',
		lat: 51.51,
		lon: -0.21,
		parentRegion: 'london'
	},
	{
		slug: 'ec',
		name: 'EC (City of London)',
		type: 'postcode-area',
		lat: 51.515,
		lon: -0.09,
		parentRegion: 'london'
	},
	{
		slug: 'wc',
		name: 'WC (London Westminster)',
		type: 'postcode-area',
		lat: 51.515,
		lon: -0.12,
		parentRegion: 'london'
	},
	{
		slug: 'm',
		name: 'M (Manchester)',
		type: 'postcode-area',
		lat: 53.4808,
		lon: -2.2426,
		parentRegion: 'north-west'
	},
	{
		slug: 'b',
		name: 'B (Birmingham)',
		type: 'postcode-area',
		lat: 52.4862,
		lon: -1.8904,
		parentRegion: 'south-east'
	},
	{
		slug: 'l',
		name: 'L (Liverpool)',
		type: 'postcode-area',
		lat: 53.4084,
		lon: -2.9916,
		parentRegion: 'north-west'
	},
	{
		slug: 'ls',
		name: 'LS (Leeds)',
		type: 'postcode-area',
		lat: 53.8008,
		lon: -1.5491,
		parentRegion: 'north-west'
	},
	{
		slug: 'bs',
		name: 'BS (Bristol)',
		type: 'postcode-area',
		lat: 51.4545,
		lon: -2.5879,
		parentRegion: 'south-west'
	},
	{
		slug: 'eh',
		name: 'EH (Edinburgh)',
		type: 'postcode-area',
		lat: 55.9533,
		lon: -3.1883,
		parentRegion: 'scotland'
	},
	{
		slug: 'g',
		name: 'G (Glasgow)',
		type: 'postcode-area',
		lat: 55.8642,
		lon: -4.2518,
		parentRegion: 'scotland'
	},
	{
		slug: 'cf',
		name: 'CF (Cardiff)',
		type: 'postcode-area',
		lat: 51.4816,
		lon: -3.1791,
		parentRegion: 'south-west'
	},
	{
		slug: 's',
		name: 'S (Sheffield)',
		type: 'postcode-area',
		lat: 53.3811,
		lon: -1.4701,
		parentRegion: 'north-west'
	}
];

export const ALL_LOCATIONS: Location[] = [...REGIONS, ...CITIES, ...POSTCODE_AREAS];

export function findBySlug(type: LocationType, slug: string): Location | undefined {
	const slugLower = slug.toLowerCase();
	return ALL_LOCATIONS.find((l) => l.type === type && l.slug === slugLower);
}

export function getCanonicalPath(loc: Location): string {
	if (loc.type === 'region') return `/region/${loc.slug}`;
	return `/${loc.slug}`;
}
