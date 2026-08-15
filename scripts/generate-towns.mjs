#!/usr/bin/env node
/**
 * Generates src/lib/data/towns.ts and src/lib/data/search-index.ts from the
 * GeoNames GB dump.
 *
 *   curl -O https://download.geonames.org/export/dump/GB.zip && unzip GB.zip
 *   node scripts/generate-towns.mjs path/to/GB.txt
 *
 * Why a generator rather than a hand-written file: 1,100 towns need real
 * coordinates (they drive the upstream pollen call, not just the copy) and
 * real names. GeoNames is CC-BY, ODbL-free and updates monthly, so this can
 * be re-run to pick up boundary and population changes.
 *
 * Places are keyed to a Met Office pollen region via their GeoNames admin2
 * code (county / unitary authority), which is exact, rather than by nearest
 * region centroid, which puts half of Lincolnshire in Yorkshire.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const MIN_POPULATION = 10_000;

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.join(here, '..');

/** GeoNames admin2 code → Met Office pollen region slug. */
const COUNTY_TO_REGION = {
	// England — North East
	D8: 'north-east', D1: 'north-east', F5: 'north-east', I5: 'north-east',
	K9: 'north-east', N3: 'north-east', E5: 'north-east', I7: 'north-east',
	J5: 'north-east', M7: 'north-east', N6: 'north-east', J6: 'north-east',
	// England — North West
	C9: 'north-west', H2: 'north-west', A8: 'north-west', A9: 'north-west',
	Z7: 'north-west', Z8: 'north-west', E9: 'north-west', P2: 'north-west',
	I2: 'north-west', B1: 'north-west', C1: 'north-west', K1: 'north-west',
	L2: 'north-west', L5: 'north-west', N2: 'north-west', O1: 'north-west',
	O6: 'north-west', P7: 'north-west', H8: 'north-west', G9: 'north-west',
	L8: 'north-west', N1: 'north-west', Q1: 'north-west',
	// England — Yorkshire and the Humber
	A3: 'yorkshire-and-humber', B4: 'yorkshire-and-humber', C2: 'yorkshire-and-humber',
	D5: 'yorkshire-and-humber', E1: 'yorkshire-and-humber', G6: 'yorkshire-and-humber',
	G8: 'yorkshire-and-humber', H3: 'yorkshire-and-humber', J2: 'yorkshire-and-humber',
	J3: 'yorkshire-and-humber', J7: 'yorkshire-and-humber', L3: 'yorkshire-and-humber',
	L9: 'yorkshire-and-humber', O7: 'yorkshire-and-humber', Q5: 'yorkshire-and-humber',
	// England — East Midlands
	D2: 'east-midlands', D3: 'east-midlands', H4: 'east-midlands', H5: 'east-midlands',
	H7: 'east-midlands', L4: 'east-midlands', NNH: 'east-midlands', WNH: 'east-midlands',
	J8: 'east-midlands', J9: 'east-midlands',
	// England — West Midlands
	A7: 'west-midlands', C7: 'west-midlands', D7: 'west-midlands', L7: 'west-midlands',
	M2: 'west-midlands', O8: 'west-midlands', Q3: 'west-midlands', F7: 'west-midlands',
	L6: 'west-midlands', O2: 'west-midlands', M9: 'west-midlands', N4: 'west-midlands',
	P3: 'west-midlands', Q4: 'west-midlands',
	// England — East of England
	Z5: 'east-of-england', Z6: 'east-of-england', I1: 'east-of-england',
	C3: 'east-of-england', K3: 'east-of-england', E4: 'east-of-england',
	M5: 'east-of-england', O3: 'east-of-england', F8: 'east-of-england',
	I9: 'east-of-england', N5: 'east-of-england',
	// England — London
	GLA: 'london',
	// England — South East
	B3: 'south-east', K7: 'south-east', M1: 'south-east', P4: 'south-east',
	P9: 'south-east', Q2: 'south-east', B9: 'south-east', I6: 'south-east',
	E2: 'south-east', B6: 'south-east', F2: 'south-east', K6: 'south-east',
	M4: 'south-east', G2: 'south-east', G5: 'south-east', I3: 'south-east',
	K2: 'south-east', N7: 'south-east', P6: 'south-east',
	// England — South West
	A4: 'south-west', B7: 'south-west', J4: 'south-west', M6: 'south-west',
	C6: 'south-west', Z9: 'south-west', D4: 'south-west', K4: 'south-west',
	O4: 'south-west', D6: 'south-west', AA: 'south-west', E6: 'south-west',
	M3: 'south-west', N9: 'south-west', P8: 'south-west',
	// Scotland — Met Office splits Scotland into five
	T5: 'grampian', T6: 'grampian', V6: 'grampian',
	V3: 'highland-and-eilean-siar', W8: 'highland-and-eilean-siar',
	V9: 'highland-and-eilean-siar', W3: 'highland-and-eilean-siar',
	T7: 'tayside-and-fife', U3: 'tayside-and-fife', W1: 'tayside-and-fife',
	V1: 'tayside-and-fife', U1: 'tayside-and-fife', W6: 'tayside-and-fife',
	U9: 'tayside-and-fife',
	T8: 'strathclyde', U4: 'strathclyde', V7: 'strathclyde', W4: 'strathclyde',
	U5: 'strathclyde', W7: 'strathclyde', U7: 'strathclyde', W2: 'strathclyde',
	V4: 'strathclyde', V2: 'strathclyde', V8: 'strathclyde', W5: 'strathclyde',
	U2: 'dumfries-and-borders', T9: 'dumfries-and-borders', U8: 'dumfries-and-borders',
	U6: 'dumfries-and-borders', V5: 'dumfries-and-borders', W9: 'dumfries-and-borders'
};

/** Human-readable county per admin2 code, for disambiguating duplicate names. */
const COUNTY_NAMES = {};

function loadAdmin2(file) {
	const text = readFileSync(file, 'utf8');
	for (const line of text.split('\n')) {
		const [code, name] = line.split('\t');
		if (!code?.startsWith('GB.')) continue;
		const parts = code.split('.');
		COUNTY_NAMES[parts[2]] = name;
	}
}

function slugify(name) {
	return name
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/['’.]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * The hand-maintained registry: slugs, search aliases and coordinates.
 *
 * Slugs and aliases are both reserved. A generated town called "Brighton"
 * would not collide with the `brighton-and-hove` slug, but it would take over
 * that city's `brighton` alias — which is how a search for "brighton" ended up
 * on a duplicate town page 700 m from the city page.
 */
function existingRegistry() {
	const src = readFileSync(path.join(repo, 'src/lib/data/locations.ts'), 'utf8');
	const slugs = new Set();
	const aliases = new Set();
	const places = [];

	for (const block of src.match(/\{[^{}]*\}/g) ?? []) {
		const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
		const name = block.match(/name:\s*'([^']+)'/)?.[1];
		const lat = Number(block.match(/lat:\s*(-?[\d.]+)/)?.[1]);
		const lon = Number(block.match(/lon:\s*(-?[\d.]+)/)?.[1]);
		if (!slug) continue;
		slugs.add(slug);

		const aliasBlock = block.match(/aliases:\s*\[([^\]]*)\]/)?.[1];
		if (aliasBlock) {
			for (const m of aliasBlock.matchAll(/'([^']+)'/g)) aliases.add(slugify(m[1]));
		}
		// Cities only. A postcode area is named for its sorting office —
		// "PR (Preston)", "FY (Blackpool)" — so matching town names against
		// those labels would delete Preston and Blackpool as "duplicates" of
		// a two-letter URL nobody searches for.
		const type = block.match(/type:\s*'([^']+)'/)?.[1];
		if (type === 'city' && name && Number.isFinite(lat) && Number.isFinite(lon)) {
			places.push({ name, lat, lon });
		}
	}

	return { slugs, aliases, places };
}

function haversineKm(a, b) {
	const R = 6371;
	const dLat = ((b.lat - a.lat) * Math.PI) / 180;
	const dLon = ((b.lon - a.lon) * Math.PI) / 180;
	const h =
		Math.sin(dLat / 2) ** 2 +
		Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
	return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Is this candidate the same settlement as an existing *city* page under
 * another label? Requires both a shared name stem and near-identical
 * coordinates, so Brighton/Brighton and Hove is caught while genuinely
 * separate neighbours — Birkenhead by Liverpool, Gateshead by Newcastle,
 * Hove itself — are kept.
 */
const SAME_PLACE_KM = 1.5;

function duplicatesExistingPlace(candidate, places) {
	const a = candidate.name.toLowerCase();
	return places.some((p) => {
		const b = p.name.toLowerCase();
		if (!(a.includes(b) || b.includes(a))) return false;
		return haversineKm(candidate, p) < SAME_PLACE_KM;
	});
}

function main() {
	const dump = process.argv[2];
	const admin2 = process.argv[3];
	if (!dump) {
		console.error('usage: node scripts/generate-towns.mjs GB.txt [admin2Codes.txt]');
		process.exit(1);
	}
	if (admin2) loadAdmin2(admin2);

	const registry = existingRegistry();
	const taken = registry.slugs;
	const rows = [];

	for (const line of readFileSync(dump, 'utf8').split('\n')) {
		const f = line.split('\t');
		if (f.length < 15) continue;
		const [, name, , , lat, lon, fclass, fcode, , , adm1, adm2] = f;
		const population = Number(f[14]);
		if (fclass !== 'P') continue;
		// PPL and the administrative-seat variants are real settlements.
		// PPLX (section of a place) and PPLL (locality) are suburbs and
		// hamlets: they duplicate their parent town's forecast exactly.
		if (!/^PPLA?[0-9]?$/.test(fcode)) continue;
		if (!Number.isFinite(population) || population < MIN_POPULATION) continue;

		const region = COUNTY_TO_REGION[adm2] ?? fallbackRegion(adm1);
		if (!region) continue;

		rows.push({
			name: name.trim(),
			lat: Number(Number(lat).toFixed(4)),
			lon: Number(Number(lon).toFixed(4)),
			region,
			county: COUNTY_NAMES[adm2] ?? '',
			population
		});
	}

	// Biggest first: when two places share a name, the one people mean gets
	// the clean slug and the smaller gets a county-qualified one.
	rows.sort((a, b) => b.population - a.population);

	const towns = [];
	const usedSlugs = new Set(taken);
	let shadowed = 0;
	let qualified = 0;
	let duplicates = 0;

	for (const row of rows) {
		const base = slugify(row.name);
		if (!base) continue;

		if (taken.has(base) || registry.aliases.has(base)) {
			// Already covered as a city, region or postcode area — or reachable
			// under this name as an alias of one.
			shadowed++;
			continue;
		}

		if (duplicatesExistingPlace(row, registry.places)) {
			// Same settlement as an existing page under a different label.
			duplicates++;
			continue;
		}

		let slug = base;
		if (usedSlugs.has(slug)) {
			const suffix = slugify(row.county.replace(/^(City|County|Borough) (and|of) /i, ''));
			slug = suffix ? `${base}-${suffix}` : '';
			if (!slug || usedSlugs.has(slug)) continue;
			qualified++;
		}

		usedSlugs.add(slug);
		towns.push({ ...row, slug });
	}

	towns.sort((a, b) => a.name.localeCompare(b.name, 'en-GB'));

	writeFileSync(path.join(repo, 'src/lib/data/towns.ts'), renderTowns(towns));
	writeFileSync(path.join(repo, 'src/lib/data/search-index.ts'), renderSearchIndex(towns));

	const byRegion = {};
	for (const t of towns) byRegion[t.region] = (byRegion[t.region] ?? 0) + 1;
	console.log(`towns: ${towns.length}`);
	console.log(`skipped (slug or alias already in registry): ${shadowed}`);
	console.log(`skipped (same settlement as an existing page): ${duplicates}`);
	console.log(`county-qualified slugs: ${qualified}`);
	console.log('by region:', byRegion);
}

function fallbackRegion(adm1) {
	if (adm1 === 'WLS') return 'wales';
	if (adm1 === 'NIR') return 'northern-ireland';
	// England and Scotland must resolve through a county: a bare country code
	// is not specific enough to pick one of nine (or five) forecast regions.
	return null;
}

function renderTowns(towns) {
	const body = towns
		.map(
			(t) =>
				`\t{ slug: '${t.slug}', name: ${JSON.stringify(t.name)}, type: 'town', lat: ${t.lat}, lon: ${t.lon}, parentRegion: '${t.region}', county: ${JSON.stringify(t.county)}, population: ${t.population} }`
		)
		.join(',\n');

	return `import type { Location } from './locations';

/**
 * UK towns with a population of ${MIN_POPULATION.toLocaleString('en-GB')} or more, from the GeoNames GB
 * gazetteer (CC BY 4.0). GENERATED FILE — do not edit by hand. Regenerate with:
 *
 *   node scripts/generate-towns.mjs GB.txt admin2Codes.txt
 *
 * Coordinates are the settlement centre and drive the live pollen lookup, so
 * they are kept to 4 decimal places (~11 m) even though the upstream call
 * buckets to 0.05°.
 */

export const TOWNS: Location[] = [
${body}
];
`;
}

/**
 * The client-side autocomplete only needs slug, name and type. Shipping the
 * full registry (coordinates, county, population, region) would put ~180 kB
 * of data in the browser bundle for a search box.
 */
function renderSearchIndex(towns) {
	const src = readFileSync(path.join(repo, 'src/lib/data/locations.ts'), 'utf8');

	/**
	 * Parse the registry one object literal at a time.
	 *
	 * Location literals contain no nested braces, so `\{[^{}]*\}` matches
	 * exactly one entry and cannot run across a boundary. An earlier version
	 * scanned for `slug: ... aliases: [...]` across a character window, which
	 * silently credited an alias to whichever entry preceded the one that
	 * owned it — "southend" resolved to Swansea, "yorkshire" to the West
	 * Midlands. Never parse fields across entry boundaries.
	 */
	const entries = [];
	for (const block of src.match(/\{[^{}]*\}/g) ?? []) {
		const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
		const name = block.match(/name:\s*'([^']+)'/)?.[1];
		const type = block.match(/type:\s*'([^']+)'/)?.[1];
		if (!slug || !name || !type) continue;
		if (!['region', 'city', 'postcode-area'].includes(type)) continue;

		const aliasBlock = block.match(/aliases:\s*\[([^\]]*)\]/)?.[1];
		const aliases = aliasBlock ? [...aliasBlock.matchAll(/'([^']+)'/g)].map((a) => a[1]) : [];

		entries.push({ slug, name, type, aliases });
	}

	for (const t of towns) entries.push({ slug: t.slug, name: t.name, type: 'town', aliases: [] });

	const body = entries
		.map((e) => {
			const aliasPart =
				e.aliases.length > 0 ? `, aliases: [${e.aliases.map((a) => `'${a}'`).join(', ')}]` : '';
			return `\t{ slug: '${e.slug}', name: ${JSON.stringify(e.name)}, type: '${e.type}'${aliasPart} }`;
		})
		.join(',\n');

	return `import type { LocationType } from './locations';

/**
 * Compact index for search and autocomplete: slug, name and type only.
 * GENERATED FILE — do not edit by hand. Regenerate with:
 *
 *   node scripts/generate-towns.mjs GB.txt admin2Codes.txt
 *
 * This is the only location data that reaches the browser. The full registry
 * (coordinates, parent region, population) stays server-side.
 */

export interface SearchEntry {
	slug: string;
	name: string;
	type: LocationType;
	aliases?: string[];
}

export const SEARCH_INDEX: SearchEntry[] = [
${body}
];
`;
}

main();
