import { redirect } from '@sveltejs/kit';
import { getCanonicalPath } from '$lib/data/locations';
import { resolveLocation } from '$lib/utils/resolve';
import type { PageServerLoad } from './$types';

/**
 * Search resolver. Takes ?postcode= input from the homepage form, resolves
 * to a known location and 308s to its canonical URL. Unknown inputs land
 * back on the homepage with an error param.
 *
 * This route is no-indexed so the search-result hop never appears in Google.
 */

export const config = { runtime: 'edge' };

export const load: PageServerLoad = async ({ url }) => {
	const raw = url.searchParams.get('postcode') ?? url.searchParams.get('q');
	if (!raw) redirect(303, '/');

	const hit = resolveLocation(raw);
	if (!hit) redirect(303, `/?notfound=${encodeURIComponent(raw.slice(0, 30))}`);

	redirect(308, getCanonicalPath(hit));
};
