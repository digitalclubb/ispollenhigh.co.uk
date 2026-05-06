import { redirect } from '@sveltejs/kit';
import { getCanonicalPath } from '$lib/data/locations';
import { resolveLocation } from '$lib/utils/resolve';
import type { PageServerLoad } from './$types';

/**
 * Search resolver. Takes ?postcode= input from the homepage form, resolves
 * to a known location and 308s to its canonical URL. Unknown inputs land
 * back on the homepage with a sanitised notfound param so the user sees
 * what they searched for.
 *
 * This route is no-indexed so the search-result hop never appears in Google.
 */

export const config = { runtime: 'edge' };

const SAFE_NOTFOUND = /[^A-Za-z0-9\s'-]/g;

export const load: PageServerLoad = async ({ url }) => {
	const raw = url.searchParams.get('postcode') ?? url.searchParams.get('q');
	if (!raw) throw redirect(303, '/');

	const hit = resolveLocation(raw);
	if (hit) throw redirect(308, getCanonicalPath(hit));

	const safe = raw.slice(0, 30).replace(SAFE_NOTFOUND, '').trim();
	throw redirect(303, safe ? `/?notfound=${encodeURIComponent(safe)}` : '/');
};
