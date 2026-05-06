import { checkRateLimit, clientKey } from '$lib/server/rate-limit';
import type { RequestHandler } from './$types';

/**
 * CSP violation report endpoint. Browsers POST a report here when our
 * Content-Security-Policy is violated. We log to the function output;
 * Vercel function logs collect them so we hear about CSP breakage
 * before users do.
 *
 * Rate-limited because a malicious browser extension could spam reports.
 * Always returns 204 (browser doesn't care about the response).
 */

export const config = { regions: ['lhr1'] };

export const POST: RequestHandler = async ({ request }) => {
	const limit = checkRateLimit(`csp:${clientKey(request.headers)}`, {
		tokens: 30,
		windowMs: 60_000
	});
	if (!limit.allowed) return new Response(null, { status: 204 });

	try {
		const body = await request.json();
		// CSP Level 2 reports nest under "csp-report"; Reporting API is flat.
		const report = body['csp-report'] ?? body;
		console.warn('[csp-violation]', JSON.stringify(report));
	} catch {
		// Malformed body — ignore.
	}

	return new Response(null, { status: 204 });
};
