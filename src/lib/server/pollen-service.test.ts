import { describe, expect, it } from 'vitest';
import { CITIES, TOWNS } from '$lib/data/locations';
import { usesPaidProvider } from './pollen-service';

/**
 * The paid/free split is the only thing standing between a crawler sweep of
 * ~1,260 pages and a four-figure Google Pollen bill, so it gets a test.
 */
describe('usesPaidProvider', () => {
	it('routes the largest cities to the paid provider', () => {
		for (const city of CITIES.slice(0, 20)) {
			expect(usesPaidProvider(city.lat, city.lon), city.name).toBe(true);
		}
	});

	it('keeps the paid set small — it is the whole cost control', () => {
		const paid = [...CITIES, ...TOWNS].filter((l) => usesPaidProvider(l.lat, l.lon));
		expect(paid.length).toBeLessThan(60);
	});

	it('keeps the overwhelming majority of towns off the paid provider', () => {
		const paid = TOWNS.filter((t) => usesPaidProvider(t.lat, t.lon));
		// A handful of towns sit inside a city's 5 km bucket (Salford within
		// Manchester, say). That is fine — they share the city's cached call.
		expect(paid.length).toBeLessThan(TOWNS.length * 0.05);
	});

	it('does not pay for arbitrary coordinates', () => {
		expect(usesPaidProvider(54.0, -3.5)).toBe(false); // Irish Sea
	});
});
