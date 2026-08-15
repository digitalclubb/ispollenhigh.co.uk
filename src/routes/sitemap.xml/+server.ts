import { SITE, SITEMAP_HEADERS, STATIC_LASTMOD } from '$lib/data/sitemap';
import type { RequestHandler } from './$types';

/**
 * Sitemap index. Google fetched the old single flat sitemap exactly once
 * (26 May) and never came back, so almost none of the URLs in it were ever
 * crawled. An index lets Google track the two halves independently: the
 * places half genuinely changes every day (the reading on the page changes),
 * while the static half almost never does — and mixing them meant every URL,
 * legal pages included, claimed a fresh <lastmod> every single day, which is
 * a signal a crawler learns to discount.
 *
 * The path stays /sitemap.xml so the already-submitted property keeps working.
 */

export const config = { regions: ['lhr1'] };

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().slice(0, 10);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<sitemap>
		<loc>${SITE}/sitemap-places.xml</loc>
		<lastmod>${today}</lastmod>
	</sitemap>
	<sitemap>
		<loc>${SITE}/sitemap-pages.xml</loc>
		<lastmod>${STATIC_LASTMOD}</lastmod>
	</sitemap>
</sitemapindex>`;

	return new Response(xml, { headers: SITEMAP_HEADERS });
};
