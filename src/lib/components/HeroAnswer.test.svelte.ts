import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import HeroAnswer from './HeroAnswer.svelte';

describe('HeroAnswer', () => {
	it('renders the affirmative verdict for high pollen today', () => {
		const { getByRole } = render(HeroAnswer, {
			props: {
				level: 'high',
				locationName: 'London',
				validFor: '2026-05-06',
				dayLabel: 'today',
				isToday: true,
				fetchedAt: '2026-05-06T10:30:00Z',
				trend: 'Tomorrow eases off.'
			}
		});

		expect(getByRole('heading', { level: 1 }).textContent).toBe(
			'Yes. Pollen is high in London today.'
		);
	});

	it('renders the no-pollen form when level is none', () => {
		const { getByRole } = render(HeroAnswer, {
			props: {
				level: 'none',
				locationName: 'Glasgow',
				validFor: '2026-05-06',
				dayLabel: 'today',
				isToday: true,
				fetchedAt: '2026-05-06T10:30:00Z',
				trend: null
			}
		});

		expect(getByRole('heading', { level: 1 }).textContent).toBe('No pollen in Glasgow today.');
	});

	it('renders the trend line when provided', () => {
		const { getByText } = render(HeroAnswer, {
			props: {
				level: 'moderate',
				locationName: 'Bristol',
				validFor: '2026-05-06',
				dayLabel: 'today',
				isToday: true,
				fetchedAt: '2026-05-06T10:30:00Z',
				trend: 'Tomorrow climbs higher.'
			}
		});

		expect(getByText('Tomorrow climbs higher.')).toBeTruthy();
	});

	it('uses future tense for non-today days', () => {
		const { getByRole } = render(HeroAnswer, {
			props: {
				level: 'high',
				locationName: 'London',
				validFor: '2026-05-09',
				dayLabel: 'on Saturday',
				isToday: false,
				fetchedAt: '2026-05-06T10:30:00Z',
				trend: null
			}
		});

		expect(getByRole('heading', { level: 1 }).textContent).toBe(
			'Yes. Pollen will be high in London on Saturday.'
		);
	});

	it('shows the freshness stamp in the kicker', () => {
		const { getByText } = render(HeroAnswer, {
			props: {
				level: 'low',
				locationName: 'Cardiff',
				validFor: '2026-05-06',
				dayLabel: 'today',
				isToday: true,
				fetchedAt: '2026-05-06T13:32:00Z',
				trend: null
			}
		});

		// 13:32 UTC in May = 14:32 BST.
		expect(getByText(/Updated 14:32/)).toBeTruthy();
	});
});
