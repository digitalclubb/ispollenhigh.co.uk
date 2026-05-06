import { env } from '$env/dynamic/private';
import type { PollenReading } from '$lib/types/pollen';
import { bucketCoords } from './cache-key';
import { fetchGooglePollen } from './google-pollen';
import { fetchOpenMeteoPollen } from './open-meteo';
import { syntheticReading } from './synthetic';

/**
 * Orchestrates the pollen lookup. Google primary, Open-Meteo fallback,
 * synthetic data when no API key is configured (local dev).
 *
 * Coordinates are bucketed before any upstream call so cache pressure stays
 * sane regardless of caller precision.
 */

const TIMEOUT_MS = 4_000;

export async function getPollen(args: {
	lat: number;
	lon: number;
	locationName: string;
}): Promise<PollenReading> {
	const { lat, lon } = bucketCoords(args.lat, args.lon);
	const apiKey = env.GOOGLE_POLLEN_API_KEY;
	const fetchedAt = new Date().toISOString();
	const location = { name: args.locationName, lat, lon };

	if (!apiKey) {
		return syntheticReading({ lat, lon, locationName: args.locationName });
	}

	try {
		const data = await withTimeout(fetchGooglePollen({ lat, lon, apiKey }), TIMEOUT_MS);
		return { location, fetchedAt, ...data };
	} catch (googleErr) {
		try {
			const data = await withTimeout(fetchOpenMeteoPollen({ lat, lon }), TIMEOUT_MS);
			return { location, fetchedAt, ...data };
		} catch (meteoErr) {
			console.error('pollen-service: both providers failed', { googleErr, meteoErr });
			const synth = syntheticReading({ lat, lon, locationName: args.locationName });
			return { ...synth, stale: true };
		}
	}
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => reject(new Error(`timeout after ${ms}ms`)), ms);
		p.then(
			(v) => {
				clearTimeout(timer);
				resolve(v);
			},
			(e) => {
				clearTimeout(timer);
				reject(e);
			}
		);
	});
}
