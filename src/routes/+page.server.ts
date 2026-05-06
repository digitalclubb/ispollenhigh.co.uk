import { getPollen } from '$lib/server/pollen-service';
import { locationFromHeaders } from '$lib/utils/location';
import type { PageServerLoad } from './$types';

export const config = {
	runtime: 'edge',
	regions: ['lhr1']
};

export const prerender = false;

export const load: PageServerLoad = async ({ request, setHeaders }) => {
	const location = locationFromHeaders(request.headers);
	const reading = await getPollen({
		lat: location.lat,
		lon: location.lon,
		locationName: location.name
	});

	setHeaders({
		'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=1800'
	});

	return { reading };
};
