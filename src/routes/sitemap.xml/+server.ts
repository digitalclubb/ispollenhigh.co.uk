import { ALL_LOCATIONS, getCanonicalPath } from '$lib/data/locations';
import type { RequestHandler } from './$types';

/**
 * Sitemap of every indexable URL: homepage, all 16 regions, all 121 postcode
 * areas, all 50 cities, plus the four legal pages added in phase 5.
 *
 * <lastmod> is "today" because the page content references today's pollen
 * level and changes every crawl. That keeps Google's freshness signal honest.
 */

export const config = { runtime: 'edge' };

const SITE = 'https://ispollenhigh.co.uk';
const LEGAL_PAGES = ['/about', '/privacy', '/terms', '/cookies'];

function xmlEscape(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().slice(0, 10);
	const urls: { loc: string; priority: string }[] = [{ loc: SITE, priority: '1.0' }];

	const seen = new Set<string>();
	for (const loc of ALL_LOCATIONS) {
		const path = getCanonicalPath(loc);
		if (seen.has(path)) continue;
		seen.add(path);
		const priority = loc.type === 'city' ? '0.9' : loc.type === 'postcode-area' ? '0.7' : '0.6';
		urls.push({ loc: `${SITE}${path}`, priority });
	}

	for (const path of LEGAL_PAGES) {
		urls.push({ loc: `${SITE}${path}`, priority: '0.3' });
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, priority }) =>
			`	<url>\n\t\t<loc>${xmlEscape(loc)}</loc>\n\t\t<lastmod>${today}</lastmod>\n\t\t<priority>${priority}</priority>\n\t</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
		}
	});
};
