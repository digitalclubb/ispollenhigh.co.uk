import {
	SITE,
	SITEMAP_HEADERS,
	type SitemapEntry,
	STATIC_LASTMOD,
	urlSet
} from '$lib/data/sitemap';
import type { RequestHandler } from './$types';

/**
 * Homepage, the area directory and the legal pages. The homepage URL carries
 * the trailing slash so it matches the <link rel="canonical"> the page itself
 * emits — the old sitemap listed the bare origin, which is a different URL.
 */

export const config = { regions: ['lhr1'] };

const PAGES = [
	'/',
	'/locations',
	'/pollen-calendar',
	'/hay-fever-season',
	'/pollen-levels-explained',
	'/about',
	'/privacy',
	'/terms',
	'/cookies'
];

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().slice(0, 10);

	const entries: SitemapEntry[] = PAGES.map((path) => ({
		loc: `${SITE}${path}`,
		// The homepage shows a live reading; the rest are static copy.
		lastmod: path === '/' ? today : STATIC_LASTMOD,
		changefreq: path === '/' ? 'daily' : 'monthly'
	}));

	return new Response(urlSet(entries), { headers: SITEMAP_HEADERS });
};
