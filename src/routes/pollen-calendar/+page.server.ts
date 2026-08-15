import { toLinks } from '$lib/data/directory';
import { REGIONS } from '$lib/data/locations';
import { calendarFor, MONTHS_SHORT, seasonSummary } from '$lib/data/season';
import type { PageServerLoad } from './$types';

/**
 * The UK pollen calendar: the site's main evergreen page. Pollen search
 * demand collapses between September and February, but "pollen calendar" and
 * "when does hay fever season start" are asked all year — and a page that has
 * been indexed since the autumn is in a far better position come March than
 * one published the week the birch pollen arrives.
 */

export const prerender = true;

/** One representative region per climate band, so the tables differ. */
const BAND_EXAMPLES = [
	{
		slug: 'south-east',
		label: 'Southern England',
		blurb: 'London, the South East, South West and East of England'
	},
	{
		slug: 'west-midlands',
		label: 'The Midlands and Wales',
		blurb: 'the East and West Midlands and Wales'
	},
	{
		slug: 'north-west',
		label: 'Northern England and Northern Ireland',
		blurb: 'the North West, North East, Yorkshire and Northern Ireland'
	},
	{ slug: 'strathclyde', label: 'Scotland', blurb: 'all five Scottish forecast regions' }
];

export const load: PageServerLoad = () => {
	// Any month works for building the tables — seasonSummary only reads the
	// month for its `inSeason` flag, which this page does not render. The
	// "this month" highlight is applied in the browser instead: this page is
	// prerendered, so a build-time month would sit here until the next deploy.
	const month = 0;

	const bands = BAND_EXAMPLES.map((band) => {
		const region = REGIONS.find((r) => r.slug === band.slug);
		if (!region) throw new Error(`unknown region ${band.slug}`);
		const cal = calendarFor(region);
		const summary = seasonSummary(region, month);
		return {
			label: band.label,
			blurb: band.blurb,
			overall: summary.overall,
			rows: summary.lines.map((line) => ({
				kind: line.kind,
				label: line.label,
				values: cal[line.kind]
			}))
		};
	});

	return {
		months: [...MONTHS_SHORT],
		bands,
		regions: toLinks(REGIONS)
	};
};
