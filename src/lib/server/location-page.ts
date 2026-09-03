import { toLinks } from '$lib/data/directory';
import { renderedCopy } from '$lib/data/local-copy';
import type { Location } from '$lib/data/locations';
import { getCanonicalPath } from '$lib/data/paths';
import { calendarFor, MONTHS_SHORT, type PollenKind, seasonSummary } from '$lib/data/season';
import { bucketCoords } from '$lib/server/cache-key';
import type { PollenReading } from '$lib/types/pollen';
import { nearbyLocations } from '$lib/utils/geo';
import { jsonLdScript, locationJsonLd } from '$lib/utils/jsonld';

const SITE = 'https://ispollenhigh.co.uk';

export interface CalendarView {
	months: string[];
	currentMonth: number;
	overall: string;
	worstMonths: string;
	rows: { kind: PollenKind; label: string; values: number[]; text: string }[];
}

/**
 * Everything a location page renders that is derived from the registry:
 * canonical URL, JSON-LD, templated copy, the seasonal calendar and the
 * nearby links.
 *
 * Built here rather than in the component because the registry is ~1,240
 * records with coordinates. Computing this during hydration would have put
 * 176 kB of location data into the browser bundle — on a site whose whole
 * pitch is that it loads instantly.
 */
export function locationPageData(location: Location, reading: PollenReading) {
	const month = new Date().getUTCMonth();
	const summary = seasonSummary(location, month);
	const cal = calendarFor(location);

	const calendar: CalendarView = {
		months: [...MONTHS_SHORT],
		currentMonth: month,
		overall: summary.overall,
		worstMonths: joinAnd(summary.worstMonths),
		rows: summary.lines.map((line) => ({
			kind: line.kind,
			label: line.label,
			values: cal[line.kind],
			text: line.text
		}))
	};

	/**
	 * Where the browser goes to upgrade this page's reading. Pre-bucketed and
	 * fixed to 2 d.p. so it matches /api/pollen's canonical form and skips the
	 * 308. The page itself renders the free provider's data — that is what
	 * crawlers see and what Google indexes — and a real browser swaps in the
	 * paid reading after hydration.
	 */
	const b = bucketCoords(location.lat, location.lon);
	const pollenPath = `/api/pollen?lat=${b.lat.toFixed(2)}&lon=${b.lon.toFixed(2)}`;

	return {
		name: location.name,
		pollenPath,
		canonical: `${SITE}${getCanonicalPath(location)}`,
		jsonLd: jsonLdScript(locationJsonLd(location, reading, summary)),
		copy: renderedCopy(location),
		calendar,
		nearby: toLinks(nearbyLocations(location, 6))
	};
}

function joinAnd(items: string[]): string {
	if (items.length === 0) return 'hard to pin down';
	if (items.length === 1) return items[0] ?? '';
	return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}
