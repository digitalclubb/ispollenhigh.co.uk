import { ALL_LOCATIONS, getCanonicalPath } from '$lib/data/locations';
import { SITE, SITEMAP_HEADERS, type SitemapEntry, urlSet } from '$lib/data/sitemap';
import type { RequestHandler } from './$types';

/**
 * Every location page: 16 regions, 50 cities and 120 postcode areas, deduped
 * by canonical path (Greater London and London share /london).
 *
 * <lastmod> is today because the reading on these pages really does change
 * daily. <priority> is gone: Google has said for years that it ignores it,
 * and it was the only per-URL variation the old sitemap carried.
 */

export const config = { regions: ['lhr1'] };

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().slice(0, 10);

	const entries: SitemapEntry[] = [];
	const seen = new Set<string>();

	for (const loc of ALL_LOCATIONS) {
		const path = getCanonicalPath(loc);
		if (seen.has(path)) continue;
		seen.add(path);
		entries.push({ loc: `${SITE}${path}`, lastmod: today, changefreq: 'daily' });
	}

	return new Response(urlSet(entries), { headers: SITEMAP_HEADERS });
};
