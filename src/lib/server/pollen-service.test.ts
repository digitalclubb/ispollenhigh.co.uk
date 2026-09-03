import { beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * The paid/free split is the only thing standing between a crawler sweep of
 * ~1,260 pages and a four-figure Google Pollen bill, so it gets a test.
 * `looksHuman` decides who asks; this covers what happens once they have.
 */

vi.mock('$env/dynamic/private', () => ({ env: { GOOGLE_POLLEN_API_KEY: 'test-key' } }));

const google = vi.fn();
const openMeteo = vi.fn();
vi.mock('./google-pollen', () => ({ fetchGooglePollen: () => google() }));
vi.mock('./open-meteo', () => ({ fetchOpenMeteoPollen: () => openMeteo() }));

const { getPollen } = await import('./pollen-service');

function reading(source: string) {
	const day = {
		date: '2026-09-03',
		overall: { level: 'low', indexValue: 2 },
		types: {
			grass: { level: 'low', indexValue: 2, dominantSpecies: [] },
			tree: { level: 'none', indexValue: 0, dominantSpecies: [] },
			weed: { level: 'none', indexValue: 0, dominantSpecies: [] }
		}
	};
	return { validFor: day.date, overall: day.overall, types: day.types, forecast: [day], source };
}

// Each test uses its own coordinates: the memo is module state and outlives
// the test that filled it.
let n = 0;
function coords() {
	n += 1;
	return { lat: 51 + n * 0.1, lon: -1, locationName: 'Nowhere' };
}

beforeEach(() => {
	google.mockReset().mockResolvedValue(reading('google'));
	openMeteo.mockReset().mockResolvedValue(reading('open-meteo'));
});

describe('getPollen', () => {
	it('never spends money unless the caller asks', async () => {
		const res = await getPollen(coords());
		expect(res.source).toBe('open-meteo');
		expect(google).not.toHaveBeenCalled();
	});

	it('uses Google when the caller asks, and falls back when it fails', async () => {
		expect((await getPollen({ ...coords(), paid: true })).source).toBe('google');

		google.mockRejectedValue(new Error('quota'));
		const res = await getPollen({ ...coords(), paid: true });
		expect(res.source).toBe('open-meteo');
	});

	it('does not serve a crawler-warmed free reading to a paying caller', async () => {
		const where = coords();
		await getPollen(where);
		expect(google).not.toHaveBeenCalled();

		expect((await getPollen({ ...where, paid: true })).source).toBe('google');
		expect(google).toHaveBeenCalledTimes(1);
	});

	it('reuses a paid reading for everyone behind it', async () => {
		const where = coords();
		await getPollen({ ...where, paid: true });
		expect((await getPollen(where)).source).toBe('google');
		expect(google).toHaveBeenCalledTimes(1);
		expect(openMeteo).not.toHaveBeenCalled();
	});

	it('buckets neighbouring coordinates onto one upstream call', async () => {
		const where = coords();
		await getPollen({ ...where, paid: true });
		await getPollen({ ...where, lat: where.lat + 0.01, paid: true });
		expect(google).toHaveBeenCalledTimes(1);
	});

	it('degrades to a synthetic reading when nothing answers', async () => {
		google.mockRejectedValue(new Error('down'));
		openMeteo.mockRejectedValue(new Error('down'));
		const res = await getPollen({ ...coords(), paid: true });
		expect(res.stale).toBe(true);
	});
});
