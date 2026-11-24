import type { Handle } from '@sveltejs/kit';

/**
 * Security headers for Worker-rendered responses. Static assets and
 * prerendered pages get the same set from `_headers` in the project root.
 *
 * Edge caching needs no code here: adapter-cloudflare's worker already puts
 * every response through the Cache API, honouring s-maxage and skipping
 * anything private or no-store (bot /api/pollen responses). That is what
 * stands in for Vercel's CDN cache and ISR.
 */
const SECURITY_HEADERS: Record<string, string> = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'geolocation=(self), camera=(), microphone=(), interest-cohort=()',
	'Cross-Origin-Opener-Policy': 'same-origin'
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	for (const [k, v] of Object.entries(SECURITY_HEADERS)) response.headers.set(k, v);
	return response;
};
