import type { Location } from '$lib/data/locations';
import { findRegion, getCanonicalPath } from '$lib/data/locations';
import type { PollenReading } from '$lib/types/pollen';
import { levelLabel } from './format';

const SITE = 'https://ispollenhigh.co.uk';
const ORG = {
	'@type': 'Organization',
	name: 'ispollenhigh',
	url: SITE
};

interface JsonLd {
	'@context': string;
	'@graph': unknown[];
}

/**
 * Serialise structured data for inclusion inside a `<script type="application/ld+json">`
 * tag. The `</` replacement defeats the classic HTML-in-JSON injection where a
 * malicious string containing "</script>" would prematurely close the script
 * element. JSON.stringify alone does not escape these.
 */
export function jsonLdScript(obj: unknown): string {
	return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export function homepageJsonLd(): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${SITE}/#website`,
				url: SITE,
				name: 'ispollenhigh',
				description: 'Is pollen high in your area in the UK today?',
				publisher: ORG,
				inLanguage: 'en-GB'
			},
			{
				'@type': 'WebPage',
				'@id': `${SITE}/#webpage`,
				url: SITE,
				name: 'Is pollen high today?',
				inLanguage: 'en-GB',
				isPartOf: { '@id': `${SITE}/#website` }
			},
			faqPage()
		]
	};
}

export function locationJsonLd(loc: Location, reading: PollenReading): JsonLd {
	const url = `${SITE}${getCanonicalPath(loc)}`;
	const region = findRegion(loc.parentRegion);
	const breadcrumb = breadcrumbList(loc, region);

	const description = `Pollen forecast for ${loc.name}: overall ${levelLabel(
		reading.overall.level
	).toLowerCase()}, grass ${levelLabel(reading.types.grass.level).toLowerCase()}, tree ${levelLabel(
		reading.types.tree.level
	).toLowerCase()}, weed ${levelLabel(reading.types.weed.level).toLowerCase()} for ${reading.validFor}.`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name: `Is pollen high in ${loc.name}?`,
				description,
				inLanguage: 'en-GB',
				datePublished: reading.validFor,
				dateModified: reading.fetchedAt,
				about: { '@id': `${url}#place` },
				mainEntity: { '@id': `${url}#place` }
			},
			{
				'@type': 'Place',
				'@id': `${url}#place`,
				name: loc.name,
				geo: {
					'@type': 'GeoCoordinates',
					latitude: reading.location.lat,
					longitude: reading.location.lon
				},
				address: { '@type': 'PostalAddress', addressCountry: 'GB' },
				...(region ? { containedInPlace: { '@type': 'Place', name: region.name } } : {})
			},
			breadcrumb
		]
	};
}

function breadcrumbList(loc: Location, region: Location | undefined) {
	const items: Array<{ name: string; url: string; position: number }> = [
		{ name: 'ispollenhigh', url: SITE, position: 1 }
	];
	if (region && loc.type !== 'region') {
		items.push({ name: region.name, url: `${SITE}${getCanonicalPath(region)}`, position: 2 });
		items.push({ name: loc.name, url: `${SITE}${getCanonicalPath(loc)}`, position: 3 });
	} else {
		items.push({ name: loc.name, url: `${SITE}${getCanonicalPath(loc)}`, position: 2 });
	}
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((i) => ({
			'@type': 'ListItem',
			position: i.position,
			name: i.name,
			item: { '@id': i.url, '@type': 'WebPage', url: i.url, name: i.name }
		}))
	};
}

function faqPage() {
	return {
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Is pollen high today?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'It depends on where you are. Use the search above or share your location to see whether pollen is high in your area today, broken down by grass, tree and weed.'
				}
			},
			{
				'@type': 'Question',
				name: 'When is pollen highest in the UK?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'Tree pollen typically peaks from late March to mid-May. Grass pollen, the most common UK trigger, runs from late May through July. Weed pollen is most active from late June into September.'
				}
			},
			{
				'@type': 'Question',
				name: 'What pollen is high right now?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'The site breaks today down into grass, tree and weed pollen with a level for each. Look at the three cards on the page to see which is the strongest trigger today.'
				}
			},
			{
				'@type': 'Question',
				name: 'Where does the data come from?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'Live data is sourced from the Google Pollen API, which is itself derived from atmospheric models including CAMS. We are not affiliated with the Met Office.'
				}
			}
		]
	};
}
