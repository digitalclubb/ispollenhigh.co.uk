<script lang="ts">
	import type { ForecastDay, PollenLevel } from '$lib/types/pollen';
	import { levelLabel, shortWeekday } from '$lib/utils/format';

	type Props = {
		forecast: ForecastDay[];
	};

	let { forecast }: Props = $props();

	function bar(level: PollenLevel): number {
		const idx: Record<PollenLevel, number> = {
			none: 0,
			'very-low': 1,
			low: 2,
			moderate: 3,
			high: 4,
			'very-high': 5
		};
		return Math.max(idx[level], 1);
	}
</script>

<section class="strip" aria-label="Five day pollen outlook">
	<h2 class="visually-hidden">Five-day outlook</h2>
	<ol>
		{#each forecast as day, i (day.date)}
			<li data-level={day.overall.level} class:today={i === 0}>
				<span class="day">{i === 0 ? 'Today' : shortWeekday(day.date)}</span>
				<span class="bar" aria-hidden="true" style="--height: {bar(day.overall.level)}"></span>
				<span class="lvl">{levelLabel(day.overall.level)}</span>
			</li>
		{/each}
	</ol>
</section>

<style>
	.strip {
		margin-top: var(--sp-7);
	}

	ol {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--sp-2);
		list-style: none;
		padding: 0;
	}

	li {
		display: grid;
		grid-template-rows: auto 1fr auto;
		align-items: center;
		justify-items: center;
		gap: var(--sp-2);
		padding: var(--sp-4) var(--sp-2);
		min-height: 8.5rem;
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		text-align: center;
		font-size: var(--fs-sm);
		--accent: var(--level-none-accent);
	}

	li[data-level='very-low'],
	li[data-level='low'] {
		--accent: var(--level-low-accent);
	}
	li[data-level='moderate'] {
		--accent: var(--level-moderate-accent);
	}
	li[data-level='high'] {
		--accent: var(--level-high-accent);
	}
	li[data-level='very-high'] {
		--accent: var(--level-very-high-accent);
	}

	li.today {
		background: var(--paper);
		outline: 1.5px solid var(--ink);
		outline-offset: -1.5px;
	}

	.day {
		font-weight: var(--weight-medium);
		color: var(--ink-soft);
	}

	li.today .day {
		color: var(--ink);
	}

	/* Mini-bar height grows with the level (1 = none, 5 = very-high). The
	   width is constant so the eye reads the bars as a row. */
	.bar {
		display: block;
		width: 1.25rem;
		height: calc(var(--height) * 0.625rem);
		min-height: 0.625rem;
		max-height: 3.5rem;
		border-radius: 999px;
		background: var(--accent);
		align-self: end;
	}

	.lvl {
		color: var(--ink-mute);
		font-size: var(--fs-xs);
	}

	@media (max-width: 480px) {
		.lvl {
			display: none;
		}
		li {
			min-height: 6.5rem;
		}
	}
</style>
