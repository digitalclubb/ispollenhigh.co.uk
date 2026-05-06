<script lang="ts">
	import type { ForecastDay } from '$lib/types/pollen';
	import { levelLabel, shortWeekday } from '$lib/utils/format';

	type Props = {
		forecast: ForecastDay[];
	};

	let { forecast }: Props = $props();
</script>

<section class="strip" aria-label="Five day pollen outlook">
	<h2 class="visually-hidden">Five-day outlook</h2>
	<ol>
		{#each forecast as day, i (day.date)}
			<li data-level={day.overall.level} class:today={i === 0}>
				<span class="day">{i === 0 ? 'Today' : shortWeekday(day.date)}</span>
				<span class="dot" aria-hidden="true"></span>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--sp-2);
		padding: var(--sp-4) var(--sp-2);
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		text-align: center;
		font-size: var(--fs-sm);
		--dot: var(--level-none-accent);
	}

	li[data-level='very-low'],
	li[data-level='low'] {
		--dot: var(--level-low-accent);
	}
	li[data-level='moderate'] {
		--dot: var(--level-moderate-accent);
	}
	li[data-level='high'] {
		--dot: var(--level-high-accent);
	}
	li[data-level='very-high'] {
		--dot: var(--level-very-high-accent);
	}

	li.today {
		outline: 1.5px solid var(--ink);
		outline-offset: -1.5px;
	}

	.day {
		font-weight: var(--weight-medium);
		color: var(--ink-soft);
	}

	.dot {
		display: block;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		background: var(--dot);
	}

	.lvl {
		color: var(--ink-mute);
		font-size: var(--fs-xs);
	}

	@media (max-width: 480px) {
		.lvl {
			display: none;
		}
	}
</style>
