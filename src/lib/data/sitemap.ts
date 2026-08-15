/**
 * Shared sitemap constants and XML helpers.
 *
 * Lives in $lib rather than in the route files because SvelteKit only allows
 * a known set of exports from a +server.ts.
 */

export const SITE = 'https://ispollenhigh.co.uk';

/**
 * Date the static pages last meaningfully changed. Bump by hand when the
 * homepage, directory or legal copy is edited — an honest fixed date is worth
 * more to a crawler than a rolling "today" that is never true.
 */
export const STATIC_LASTMOD = '2026-08-15';

export function xmlEscape(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export interface SitemapEntry {
	loc: string;
	lastmod: string;
	changefreq?: string;
}

export function urlSet(entries: SitemapEntry[]): string {
	const body = entries
		.map(({ loc, lastmod, changefreq }) => {
			const freq = changefreq ? `\n\t\t<changefreq>${changefreq}</changefreq>` : '';
			return `\t<url>\n\t\t<loc>${xmlEscape(loc)}</loc>\n\t\t<lastmod>${lastmod}</lastmod>${freq}\n\t</url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

export const SITEMAP_HEADERS = {
	'Content-Type': 'application/xml; charset=utf-8',
	'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
};
