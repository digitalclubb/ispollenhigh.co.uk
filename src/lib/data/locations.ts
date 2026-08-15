/**
 * Full location registry: 16 Met Office regions, 121 UK postcode areas,
 * 50 cities by population (ONS mid-2024 estimates) and every UK town of
 * 10,000 people or more (generated into `towns.ts` from GeoNames). Each
 * entry has a centroid lat/lon used for both the live pollen call and the
 * canonical URL.
 *
 * Coordinates are the main settlement of each area, rounded to 4 decimals.
 *
 * Local-copy metadata (peakMonths, dominant species) is computed from the
 * parent region in `local-copy.ts` rather than hand-tuned per location, so
 * the copy stays authentic without a thousand hand-written paragraphs.
 */

import { TOWNS } from './towns';

export { TOWNS };

export type LocationType = 'postcode-area' | 'city' | 'region' | 'town';

export interface Location {
	slug: string;
	name: string;
	type: LocationType;
	lat: number;
	lon: number;
	parentRegion?: string;
	aliases?: string[];
	/** County or unitary authority. Towns only; used in copy and for
	 * disambiguating two towns that share a name. */
	county?: string;
	/** Settlement population, towns only. Orders the region listings. */
	population?: number;
}

/**
 * Met Office's 16 pollen forecast regions: 9 English ITL1 regions, Wales,
 * Northern Ireland and 5 Scottish sub-regions.
 */
export const REGIONS: Location[] = [
	{
		slug: 'south-east',
		name: 'South East England',
		type: 'region',
		lat: 51.1,
		lon: -0.4,
		aliases: ['south east']
	},
	{
		slug: 'south-west',
		name: 'South West England',
		type: 'region',
		lat: 50.96,
		lon: -3.5,
		aliases: ['south west']
	},
	{ slug: 'london', name: 'Greater London', type: 'region', lat: 51.5074, lon: -0.1278 },
	{ slug: 'east-of-england', name: 'East of England', type: 'region', lat: 52.24, lon: 0.71 },
	{ slug: 'east-midlands', name: 'East Midlands', type: 'region', lat: 52.85, lon: -1.1 },
	{ slug: 'west-midlands', name: 'West Midlands', type: 'region', lat: 52.55, lon: -2.05 },
	{
		slug: 'yorkshire-and-humber',
		name: 'Yorkshire and the Humber',
		type: 'region',
		lat: 53.93,
		lon: -1.08,
		aliases: ['yorkshire']
	},
	{ slug: 'north-west', name: 'North West England', type: 'region', lat: 53.7, lon: -2.6 },
	{ slug: 'north-east', name: 'North East England', type: 'region', lat: 54.97, lon: -1.6 },
	{ slug: 'wales', name: 'Wales', type: 'region', lat: 52.13, lon: -3.78, aliases: ['cymru'] },
	{ slug: 'northern-ireland', name: 'Northern Ireland', type: 'region', lat: 54.79, lon: -6.49 },
	{
		slug: 'highland-and-eilean-siar',
		name: 'Highland and Eilean Siar',
		type: 'region',
		lat: 57.5,
		lon: -5.0,
		aliases: ['highlands']
	},
	{ slug: 'grampian', name: 'Grampian', type: 'region', lat: 57.15, lon: -2.5 },
	{
		slug: 'tayside-and-fife',
		name: 'Tayside, Central and Fife',
		type: 'region',
		lat: 56.4,
		lon: -3.4
	},
	{ slug: 'strathclyde', name: 'Strathclyde', type: 'region', lat: 55.86, lon: -4.5 },
	{
		slug: 'dumfries-and-borders',
		name: 'Dumfries, Galloway, Lothian and Borders',
		type: 'region',
		lat: 55.7,
		lon: -3.4
	}
];

/** Top 50 UK cities by population. ONS mid-2024 mid-year estimates. */
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
		slug: 'birmingham',
		name: 'Birmingham',
		type: 'city',
		lat: 52.4862,
		lon: -1.8904,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'glasgow',
		name: 'Glasgow',
		type: 'city',
		lat: 55.8642,
		lon: -4.2518,
		parentRegion: 'strathclyde'
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
		slug: 'leeds',
		name: 'Leeds',
		type: 'city',
		lat: 53.8008,
		lon: -1.5491,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'sheffield',
		name: 'Sheffield',
		type: 'city',
		lat: 53.3811,
		lon: -1.4701,
		parentRegion: 'yorkshire-and-humber'
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
		slug: 'edinburgh',
		name: 'Edinburgh',
		type: 'city',
		lat: 55.9533,
		lon: -3.1883,
		parentRegion: 'dumfries-and-borders'
	},
	{
		slug: 'leicester',
		name: 'Leicester',
		type: 'city',
		lat: 52.6369,
		lon: -1.1398,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'coventry',
		name: 'Coventry',
		type: 'city',
		lat: 52.4068,
		lon: -1.5197,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'bradford',
		name: 'Bradford',
		type: 'city',
		lat: 53.7938,
		lon: -1.7522,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'cardiff',
		name: 'Cardiff',
		type: 'city',
		lat: 51.4816,
		lon: -3.1791,
		parentRegion: 'wales'
	},
	{
		slug: 'belfast',
		name: 'Belfast',
		type: 'city',
		lat: 54.5973,
		lon: -5.9301,
		parentRegion: 'northern-ireland'
	},
	{
		slug: 'nottingham',
		name: 'Nottingham',
		type: 'city',
		lat: 52.9548,
		lon: -1.1581,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'kingston-upon-hull',
		name: 'Kingston upon Hull',
		type: 'city',
		lat: 53.7676,
		lon: -0.3274,
		parentRegion: 'yorkshire-and-humber',
		aliases: ['hull']
	},
	{
		slug: 'newcastle-upon-tyne',
		name: 'Newcastle upon Tyne',
		type: 'city',
		lat: 54.9783,
		lon: -1.6178,
		parentRegion: 'north-east',
		aliases: ['newcastle']
	},
	{
		slug: 'stoke-on-trent',
		name: 'Stoke-on-Trent',
		type: 'city',
		lat: 53.0027,
		lon: -2.1794,
		parentRegion: 'west-midlands',
		aliases: ['stoke']
	},
	{
		slug: 'southampton',
		name: 'Southampton',
		type: 'city',
		lat: 50.9097,
		lon: -1.4044,
		parentRegion: 'south-east'
	},
	{
		slug: 'derby',
		name: 'Derby',
		type: 'city',
		lat: 52.9225,
		lon: -1.4746,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'portsmouth',
		name: 'Portsmouth',
		type: 'city',
		lat: 50.8198,
		lon: -1.0879,
		parentRegion: 'south-east'
	},
	{
		slug: 'brighton-and-hove',
		name: 'Brighton and Hove',
		type: 'city',
		lat: 50.8225,
		lon: -0.1372,
		parentRegion: 'south-east',
		aliases: ['brighton']
	},
	{
		slug: 'plymouth',
		name: 'Plymouth',
		type: 'city',
		lat: 50.3755,
		lon: -4.1427,
		parentRegion: 'south-west'
	},
	{
		slug: 'northampton',
		name: 'Northampton',
		type: 'city',
		lat: 52.2405,
		lon: -0.9027,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'reading',
		name: 'Reading',
		type: 'city',
		lat: 51.4543,
		lon: -0.9781,
		parentRegion: 'south-east'
	},
	{
		slug: 'luton',
		name: 'Luton',
		type: 'city',
		lat: 51.8787,
		lon: -0.4203,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'wolverhampton',
		name: 'Wolverhampton',
		type: 'city',
		lat: 52.5862,
		lon: -2.1288,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'bolton',
		name: 'Bolton',
		type: 'city',
		lat: 53.5779,
		lon: -2.4282,
		parentRegion: 'north-west'
	},
	{
		slug: 'aberdeen',
		name: 'Aberdeen',
		type: 'city',
		lat: 57.1497,
		lon: -2.0943,
		parentRegion: 'grampian'
	},
	{
		slug: 'bournemouth',
		name: 'Bournemouth',
		type: 'city',
		lat: 50.7192,
		lon: -1.8808,
		parentRegion: 'south-west'
	},
	{
		slug: 'norwich',
		name: 'Norwich',
		type: 'city',
		lat: 52.6309,
		lon: 1.2974,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'swindon',
		name: 'Swindon',
		type: 'city',
		lat: 51.5558,
		lon: -1.7797,
		parentRegion: 'south-west'
	},
	{
		slug: 'swansea',
		name: 'Swansea',
		type: 'city',
		lat: 51.6214,
		lon: -3.9436,
		parentRegion: 'wales'
	},
	{
		slug: 'southend-on-sea',
		name: 'Southend-on-Sea',
		type: 'city',
		lat: 51.5454,
		lon: 0.7077,
		parentRegion: 'east-of-england',
		aliases: ['southend']
	},
	{
		slug: 'milton-keynes',
		name: 'Milton Keynes',
		type: 'city',
		lat: 52.0406,
		lon: -0.7594,
		parentRegion: 'south-east'
	},
	{
		slug: 'sunderland',
		name: 'Sunderland',
		type: 'city',
		lat: 54.9069,
		lon: -1.3838,
		parentRegion: 'north-east'
	},
	{
		slug: 'telford',
		name: 'Telford',
		type: 'city',
		lat: 52.6766,
		lon: -2.4469,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'warrington',
		name: 'Warrington',
		type: 'city',
		lat: 53.388,
		lon: -2.5986,
		parentRegion: 'north-west'
	},
	{
		slug: 'walsall',
		name: 'Walsall',
		type: 'city',
		lat: 52.5862,
		lon: -1.9826,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'salford',
		name: 'Salford',
		type: 'city',
		lat: 53.4875,
		lon: -2.2901,
		parentRegion: 'north-west'
	},
	{
		slug: 'crawley',
		name: 'Crawley',
		type: 'city',
		lat: 51.1092,
		lon: -0.1872,
		parentRegion: 'south-east'
	},
	{
		slug: 'ipswich',
		name: 'Ipswich',
		type: 'city',
		lat: 52.0567,
		lon: 1.1482,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'wigan',
		name: 'Wigan',
		type: 'city',
		lat: 53.5446,
		lon: -2.6318,
		parentRegion: 'north-west'
	},
	{
		slug: 'oxford',
		name: 'Oxford',
		type: 'city',
		lat: 51.752,
		lon: -1.2577,
		parentRegion: 'south-east'
	},
	{
		slug: 'mansfield',
		name: 'Mansfield',
		type: 'city',
		lat: 53.1394,
		lon: -1.1986,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'cambridge',
		name: 'Cambridge',
		type: 'city',
		lat: 52.2053,
		lon: 0.1218,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'slough',
		name: 'Slough',
		type: 'city',
		lat: 51.5105,
		lon: -0.5953,
		parentRegion: 'south-east'
	},
	{
		slug: 'doncaster',
		name: 'Doncaster',
		type: 'city',
		lat: 53.5228,
		lon: -1.1285,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'watford',
		name: 'Watford',
		type: 'city',
		lat: 51.6565,
		lon: -0.3903,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'york',
		name: 'York',
		type: 'city',
		lat: 53.96,
		lon: -1.0873,
		parentRegion: 'yorkshire-and-humber'
	}
];

/** All 121 UK postcode areas (BT covers Northern Ireland). */
export const POSTCODE_AREAS: Location[] = [
	{
		slug: 'ab',
		name: 'AB (Aberdeen)',
		type: 'postcode-area',
		lat: 57.1497,
		lon: -2.0943,
		parentRegion: 'grampian'
	},
	{
		slug: 'al',
		name: 'AL (St Albans)',
		type: 'postcode-area',
		lat: 51.7515,
		lon: -0.336,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'b',
		name: 'B (Birmingham)',
		type: 'postcode-area',
		lat: 52.4862,
		lon: -1.8904,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'ba',
		name: 'BA (Bath)',
		type: 'postcode-area',
		lat: 51.3811,
		lon: -2.359,
		parentRegion: 'south-west'
	},
	{
		slug: 'bb',
		name: 'BB (Blackburn)',
		type: 'postcode-area',
		lat: 53.7486,
		lon: -2.4936,
		parentRegion: 'north-west'
	},
	{
		slug: 'bd',
		name: 'BD (Bradford)',
		type: 'postcode-area',
		lat: 53.7938,
		lon: -1.7522,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'bh',
		name: 'BH (Bournemouth)',
		type: 'postcode-area',
		lat: 50.7192,
		lon: -1.8808,
		parentRegion: 'south-west'
	},
	{
		slug: 'bl',
		name: 'BL (Bolton)',
		type: 'postcode-area',
		lat: 53.5779,
		lon: -2.4282,
		parentRegion: 'north-west'
	},
	{
		slug: 'bn',
		name: 'BN (Brighton)',
		type: 'postcode-area',
		lat: 50.8225,
		lon: -0.1372,
		parentRegion: 'south-east'
	},
	{
		slug: 'br',
		name: 'BR (Bromley)',
		type: 'postcode-area',
		lat: 51.406,
		lon: 0.0145,
		parentRegion: 'london'
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
		slug: 'bt',
		name: 'BT (Belfast)',
		type: 'postcode-area',
		lat: 54.5973,
		lon: -5.9301,
		parentRegion: 'northern-ireland'
	},
	{
		slug: 'ca',
		name: 'CA (Carlisle)',
		type: 'postcode-area',
		lat: 54.892,
		lon: -2.9329,
		parentRegion: 'north-west'
	},
	{
		slug: 'cb',
		name: 'CB (Cambridge)',
		type: 'postcode-area',
		lat: 52.2053,
		lon: 0.1218,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'cf',
		name: 'CF (Cardiff)',
		type: 'postcode-area',
		lat: 51.4816,
		lon: -3.1791,
		parentRegion: 'wales'
	},
	{
		slug: 'ch',
		name: 'CH (Chester)',
		type: 'postcode-area',
		lat: 53.1934,
		lon: -2.8931,
		parentRegion: 'north-west'
	},
	{
		slug: 'cm',
		name: 'CM (Chelmsford)',
		type: 'postcode-area',
		lat: 51.7356,
		lon: 0.4685,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'co',
		name: 'CO (Colchester)',
		type: 'postcode-area',
		lat: 51.8959,
		lon: 0.8919,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'cr',
		name: 'CR (Croydon)',
		type: 'postcode-area',
		lat: 51.3762,
		lon: -0.0982,
		parentRegion: 'london'
	},
	{
		slug: 'ct',
		name: 'CT (Canterbury)',
		type: 'postcode-area',
		lat: 51.2802,
		lon: 1.0789,
		parentRegion: 'south-east'
	},
	{
		slug: 'cv',
		name: 'CV (Coventry)',
		type: 'postcode-area',
		lat: 52.4068,
		lon: -1.5197,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'cw',
		name: 'CW (Crewe)',
		type: 'postcode-area',
		lat: 53.0977,
		lon: -2.4404,
		parentRegion: 'north-west'
	},
	{
		slug: 'da',
		name: 'DA (Dartford)',
		type: 'postcode-area',
		lat: 51.4465,
		lon: 0.2161,
		parentRegion: 'london'
	},
	{
		slug: 'dd',
		name: 'DD (Dundee)',
		type: 'postcode-area',
		lat: 56.462,
		lon: -2.9707,
		parentRegion: 'tayside-and-fife'
	},
	{
		slug: 'de',
		name: 'DE (Derby)',
		type: 'postcode-area',
		lat: 52.9225,
		lon: -1.4746,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'dg',
		name: 'DG (Dumfries)',
		type: 'postcode-area',
		lat: 55.0709,
		lon: -3.6028,
		parentRegion: 'dumfries-and-borders'
	},
	{
		slug: 'dh',
		name: 'DH (Durham)',
		type: 'postcode-area',
		lat: 54.7753,
		lon: -1.5849,
		parentRegion: 'north-east'
	},
	{
		slug: 'dl',
		name: 'DL (Darlington)',
		type: 'postcode-area',
		lat: 54.5236,
		lon: -1.5594,
		parentRegion: 'north-east'
	},
	{
		slug: 'dn',
		name: 'DN (Doncaster)',
		type: 'postcode-area',
		lat: 53.5228,
		lon: -1.1285,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'dt',
		name: 'DT (Dorchester)',
		type: 'postcode-area',
		lat: 50.7156,
		lon: -2.4364,
		parentRegion: 'south-west'
	},
	{
		slug: 'dy',
		name: 'DY (Dudley)',
		type: 'postcode-area',
		lat: 52.5095,
		lon: -2.0814,
		parentRegion: 'west-midlands'
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
		slug: 'ec',
		name: 'EC (City of London)',
		type: 'postcode-area',
		lat: 51.515,
		lon: -0.09,
		parentRegion: 'london'
	},
	{
		slug: 'eh',
		name: 'EH (Edinburgh)',
		type: 'postcode-area',
		lat: 55.9533,
		lon: -3.1883,
		parentRegion: 'dumfries-and-borders'
	},
	{
		slug: 'en',
		name: 'EN (Enfield)',
		type: 'postcode-area',
		lat: 51.6523,
		lon: -0.0807,
		parentRegion: 'london'
	},
	{
		slug: 'ex',
		name: 'EX (Exeter)',
		type: 'postcode-area',
		lat: 50.7184,
		lon: -3.5339,
		parentRegion: 'south-west'
	},
	{
		slug: 'fk',
		name: 'FK (Falkirk)',
		type: 'postcode-area',
		lat: 56.0,
		lon: -3.7833,
		parentRegion: 'tayside-and-fife'
	},
	{
		slug: 'fy',
		name: 'FY (Blackpool)',
		type: 'postcode-area',
		lat: 53.8175,
		lon: -3.0357,
		parentRegion: 'north-west'
	},
	{
		slug: 'g',
		name: 'G (Glasgow)',
		type: 'postcode-area',
		lat: 55.8642,
		lon: -4.2518,
		parentRegion: 'strathclyde'
	},
	{
		slug: 'gl',
		name: 'GL (Gloucester)',
		type: 'postcode-area',
		lat: 51.8642,
		lon: -2.2381,
		parentRegion: 'south-west'
	},
	{
		slug: 'gu',
		name: 'GU (Guildford)',
		type: 'postcode-area',
		lat: 51.2362,
		lon: -0.5704,
		parentRegion: 'south-east'
	},
	{
		slug: 'ha',
		name: 'HA (Harrow)',
		type: 'postcode-area',
		lat: 51.5793,
		lon: -0.3346,
		parentRegion: 'london'
	},
	{
		slug: 'hd',
		name: 'HD (Huddersfield)',
		type: 'postcode-area',
		lat: 53.6458,
		lon: -1.7849,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'hg',
		name: 'HG (Harrogate)',
		type: 'postcode-area',
		lat: 53.9919,
		lon: -1.5378,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'hp',
		name: 'HP (Hemel Hempstead)',
		type: 'postcode-area',
		lat: 51.7526,
		lon: -0.4692,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'hr',
		name: 'HR (Hereford)',
		type: 'postcode-area',
		lat: 52.0567,
		lon: -2.7156,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'hs',
		name: 'HS (Hebrides)',
		type: 'postcode-area',
		lat: 57.7559,
		lon: -7.0207,
		parentRegion: 'highland-and-eilean-siar'
	},
	{
		slug: 'hu',
		name: 'HU (Hull)',
		type: 'postcode-area',
		lat: 53.7676,
		lon: -0.3274,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'hx',
		name: 'HX (Halifax)',
		type: 'postcode-area',
		lat: 53.7244,
		lon: -1.8631,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'ig',
		name: 'IG (Ilford)',
		type: 'postcode-area',
		lat: 51.5586,
		lon: 0.085,
		parentRegion: 'london'
	},
	{
		slug: 'ip',
		name: 'IP (Ipswich)',
		type: 'postcode-area',
		lat: 52.0567,
		lon: 1.1482,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'iv',
		name: 'IV (Inverness)',
		type: 'postcode-area',
		lat: 57.4778,
		lon: -4.2247,
		parentRegion: 'highland-and-eilean-siar'
	},
	{
		slug: 'ka',
		name: 'KA (Kilmarnock)',
		type: 'postcode-area',
		lat: 55.6113,
		lon: -4.4951,
		parentRegion: 'strathclyde'
	},
	{
		slug: 'kt',
		name: 'KT (Kingston upon Thames)',
		type: 'postcode-area',
		lat: 51.4123,
		lon: -0.3007,
		parentRegion: 'london'
	},
	{
		slug: 'kw',
		name: 'KW (Kirkwall)',
		type: 'postcode-area',
		lat: 58.9809,
		lon: -2.96,
		parentRegion: 'highland-and-eilean-siar'
	},
	{
		slug: 'ky',
		name: 'KY (Kirkcaldy)',
		type: 'postcode-area',
		lat: 56.1108,
		lon: -3.157,
		parentRegion: 'tayside-and-fife'
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
		slug: 'la',
		name: 'LA (Lancaster)',
		type: 'postcode-area',
		lat: 54.0466,
		lon: -2.8007,
		parentRegion: 'north-west'
	},
	{
		slug: 'ld',
		name: 'LD (Llandrindod Wells)',
		type: 'postcode-area',
		lat: 52.2419,
		lon: -3.3779,
		parentRegion: 'wales'
	},
	{
		slug: 'le',
		name: 'LE (Leicester)',
		type: 'postcode-area',
		lat: 52.6369,
		lon: -1.1398,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'll',
		name: 'LL (Llandudno)',
		type: 'postcode-area',
		lat: 53.3247,
		lon: -3.8276,
		parentRegion: 'wales'
	},
	{
		slug: 'ln',
		name: 'LN (Lincoln)',
		type: 'postcode-area',
		lat: 53.2307,
		lon: -0.5406,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'ls',
		name: 'LS (Leeds)',
		type: 'postcode-area',
		lat: 53.8008,
		lon: -1.5491,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'lu',
		name: 'LU (Luton)',
		type: 'postcode-area',
		lat: 51.8787,
		lon: -0.4203,
		parentRegion: 'east-of-england'
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
		slug: 'me',
		name: 'ME (Medway)',
		type: 'postcode-area',
		lat: 51.3886,
		lon: 0.5444,
		parentRegion: 'south-east'
	},
	{
		slug: 'mk',
		name: 'MK (Milton Keynes)',
		type: 'postcode-area',
		lat: 52.0406,
		lon: -0.7594,
		parentRegion: 'south-east'
	},
	{
		slug: 'ml',
		name: 'ML (Motherwell)',
		type: 'postcode-area',
		lat: 55.78,
		lon: -3.99,
		parentRegion: 'strathclyde'
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
		slug: 'ne',
		name: 'NE (Newcastle)',
		type: 'postcode-area',
		lat: 54.9783,
		lon: -1.6178,
		parentRegion: 'north-east'
	},
	{
		slug: 'ng',
		name: 'NG (Nottingham)',
		type: 'postcode-area',
		lat: 52.9548,
		lon: -1.1581,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'nn',
		name: 'NN (Northampton)',
		type: 'postcode-area',
		lat: 52.2405,
		lon: -0.9027,
		parentRegion: 'east-midlands'
	},
	{
		slug: 'np',
		name: 'NP (Newport)',
		type: 'postcode-area',
		lat: 51.5842,
		lon: -2.9977,
		parentRegion: 'wales'
	},
	{
		slug: 'nr',
		name: 'NR (Norwich)',
		type: 'postcode-area',
		lat: 52.6309,
		lon: 1.2974,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'nw',
		name: 'NW (north-west London)',
		type: 'postcode-area',
		lat: 51.55,
		lon: -0.2,
		parentRegion: 'london'
	},
	{
		slug: 'ol',
		name: 'OL (Oldham)',
		type: 'postcode-area',
		lat: 53.5409,
		lon: -2.1114,
		parentRegion: 'north-west'
	},
	{
		slug: 'ox',
		name: 'OX (Oxford)',
		type: 'postcode-area',
		lat: 51.752,
		lon: -1.2577,
		parentRegion: 'south-east'
	},
	{
		slug: 'pa',
		name: 'PA (Paisley)',
		type: 'postcode-area',
		lat: 55.8456,
		lon: -4.4239,
		parentRegion: 'strathclyde'
	},
	{
		slug: 'pe',
		name: 'PE (Peterborough)',
		type: 'postcode-area',
		lat: 52.5695,
		lon: -0.2405,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'ph',
		name: 'PH (Perth)',
		type: 'postcode-area',
		lat: 56.3957,
		lon: -3.4379,
		parentRegion: 'tayside-and-fife'
	},
	{
		slug: 'pl',
		name: 'PL (Plymouth)',
		type: 'postcode-area',
		lat: 50.3755,
		lon: -4.1427,
		parentRegion: 'south-west'
	},
	{
		slug: 'po',
		name: 'PO (Portsmouth)',
		type: 'postcode-area',
		lat: 50.8198,
		lon: -1.0879,
		parentRegion: 'south-east'
	},
	{
		slug: 'pr',
		name: 'PR (Preston)',
		type: 'postcode-area',
		lat: 53.7632,
		lon: -2.7031,
		parentRegion: 'north-west'
	},
	{
		slug: 'rg',
		name: 'RG (Reading)',
		type: 'postcode-area',
		lat: 51.4543,
		lon: -0.9781,
		parentRegion: 'south-east'
	},
	{
		slug: 'rh',
		name: 'RH (Redhill)',
		type: 'postcode-area',
		lat: 51.2398,
		lon: -0.1683,
		parentRegion: 'south-east'
	},
	{
		slug: 'rm',
		name: 'RM (Romford)',
		type: 'postcode-area',
		lat: 51.575,
		lon: 0.1833,
		parentRegion: 'london'
	},
	{
		slug: 's',
		name: 'S (Sheffield)',
		type: 'postcode-area',
		lat: 53.3811,
		lon: -1.4701,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'sa',
		name: 'SA (Swansea)',
		type: 'postcode-area',
		lat: 51.6214,
		lon: -3.9436,
		parentRegion: 'wales'
	},
	{
		slug: 'se',
		name: 'SE (south-east London)',
		type: 'postcode-area',
		lat: 51.46,
		lon: -0.05,
		parentRegion: 'london'
	},
	{
		slug: 'sg',
		name: 'SG (Stevenage)',
		type: 'postcode-area',
		lat: 51.9038,
		lon: -0.2018,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'sk',
		name: 'SK (Stockport)',
		type: 'postcode-area',
		lat: 53.4106,
		lon: -2.1576,
		parentRegion: 'north-west'
	},
	{
		slug: 'sl',
		name: 'SL (Slough)',
		type: 'postcode-area',
		lat: 51.5105,
		lon: -0.5953,
		parentRegion: 'south-east'
	},
	{
		slug: 'sm',
		name: 'SM (Sutton)',
		type: 'postcode-area',
		lat: 51.3618,
		lon: -0.1945,
		parentRegion: 'london'
	},
	{
		slug: 'sn',
		name: 'SN (Swindon)',
		type: 'postcode-area',
		lat: 51.5558,
		lon: -1.7797,
		parentRegion: 'south-west'
	},
	{
		slug: 'so',
		name: 'SO (Southampton)',
		type: 'postcode-area',
		lat: 50.9097,
		lon: -1.4044,
		parentRegion: 'south-east'
	},
	{
		slug: 'sp',
		name: 'SP (Salisbury)',
		type: 'postcode-area',
		lat: 51.0689,
		lon: -1.7945,
		parentRegion: 'south-west'
	},
	{
		slug: 'sr',
		name: 'SR (Sunderland)',
		type: 'postcode-area',
		lat: 54.9069,
		lon: -1.3838,
		parentRegion: 'north-east'
	},
	{
		slug: 'ss',
		name: 'SS (Southend-on-Sea)',
		type: 'postcode-area',
		lat: 51.5454,
		lon: 0.7077,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'st',
		name: 'ST (Stoke-on-Trent)',
		type: 'postcode-area',
		lat: 53.0027,
		lon: -2.1794,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'sw',
		name: 'SW (south-west London)',
		type: 'postcode-area',
		lat: 51.46,
		lon: -0.18,
		parentRegion: 'london'
	},
	{
		slug: 'sy',
		name: 'SY (Shrewsbury)',
		type: 'postcode-area',
		lat: 52.7077,
		lon: -2.7478,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'ta',
		name: 'TA (Taunton)',
		type: 'postcode-area',
		lat: 51.0148,
		lon: -3.1058,
		parentRegion: 'south-west'
	},
	{
		slug: 'td',
		name: 'TD (Galashiels)',
		type: 'postcode-area',
		lat: 55.6178,
		lon: -2.8108,
		parentRegion: 'dumfries-and-borders'
	},
	{
		slug: 'tf',
		name: 'TF (Telford)',
		type: 'postcode-area',
		lat: 52.6766,
		lon: -2.4469,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'tn',
		name: 'TN (Tunbridge Wells)',
		type: 'postcode-area',
		lat: 51.1324,
		lon: 0.2632,
		parentRegion: 'south-east'
	},
	{
		slug: 'tq',
		name: 'TQ (Torquay)',
		type: 'postcode-area',
		lat: 50.4619,
		lon: -3.5253,
		parentRegion: 'south-west'
	},
	{
		slug: 'tr',
		name: 'TR (Truro)',
		type: 'postcode-area',
		lat: 50.2632,
		lon: -5.051,
		parentRegion: 'south-west'
	},
	{
		slug: 'ts',
		name: 'TS (Cleveland / Teesside)',
		type: 'postcode-area',
		lat: 54.5742,
		lon: -1.235,
		parentRegion: 'north-east'
	},
	{
		slug: 'tw',
		name: 'TW (Twickenham)',
		type: 'postcode-area',
		lat: 51.4486,
		lon: -0.3236,
		parentRegion: 'london'
	},
	{
		slug: 'ub',
		name: 'UB (Uxbridge)',
		type: 'postcode-area',
		lat: 51.5484,
		lon: -0.4814,
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
		slug: 'wa',
		name: 'WA (Warrington)',
		type: 'postcode-area',
		lat: 53.388,
		lon: -2.5986,
		parentRegion: 'north-west'
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
		slug: 'wd',
		name: 'WD (Watford)',
		type: 'postcode-area',
		lat: 51.6565,
		lon: -0.3903,
		parentRegion: 'east-of-england'
	},
	{
		slug: 'wf',
		name: 'WF (Wakefield)',
		type: 'postcode-area',
		lat: 53.6833,
		lon: -1.4977,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'wn',
		name: 'WN (Wigan)',
		type: 'postcode-area',
		lat: 53.5446,
		lon: -2.6318,
		parentRegion: 'north-west'
	},
	{
		slug: 'wr',
		name: 'WR (Worcester)',
		type: 'postcode-area',
		lat: 52.1936,
		lon: -2.2215,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'ws',
		name: 'WS (Walsall)',
		type: 'postcode-area',
		lat: 52.5862,
		lon: -1.9826,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'wv',
		name: 'WV (Wolverhampton)',
		type: 'postcode-area',
		lat: 52.5862,
		lon: -2.1288,
		parentRegion: 'west-midlands'
	},
	{
		slug: 'yo',
		name: 'YO (York)',
		type: 'postcode-area',
		lat: 53.96,
		lon: -1.0873,
		parentRegion: 'yorkshire-and-humber'
	},
	{
		slug: 'ze',
		name: 'ZE (Lerwick)',
		type: 'postcode-area',
		lat: 60.155,
		lon: -1.1452,
		parentRegion: 'highland-and-eilean-siar'
	}
];

export const ALL_LOCATIONS: Location[] = [...REGIONS, ...CITIES, ...TOWNS, ...POSTCODE_AREAS];

export function findBySlug(type: LocationType, slug: string): Location | undefined {
	const slugLower = slug.toLowerCase();
	return ALL_LOCATIONS.find((l) => l.type === type && l.slug === slugLower);
}

/**
 * Single-segment lookup for the /[slug] route. Cities win over towns (London
 * the city, not any London-named hamlet) and towns over postcode areas, which
 * matters for two-letter names — no town is called "SW", but the ordering
 * keeps the rule explicit.
 */
export function findPlace(slug: string): Location | undefined {
	return findBySlug('city', slug) ?? findBySlug('town', slug) ?? findBySlug('postcode-area', slug);
}

export function findRegion(slug: string | undefined): Location | undefined {
	if (!slug) return undefined;
	return REGIONS.find((r) => r.slug === slug);
}

// Path helpers live in ./paths so client-side code can build a URL without
// importing the registry itself. Re-exported here for existing callers.
export { getCanonicalPath, getServedPath } from './paths';
