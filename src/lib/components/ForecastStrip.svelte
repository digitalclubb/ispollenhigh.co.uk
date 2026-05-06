<script lang="ts">
	import type { ForecastDay, PollenLevel } from '$lib/types/pollen';
	import { levelLabel, shortWeekday } from '$lib/utils/format';

	type Props = {
		forecast: readonly ForecastDay[];
		selectedIndex: number;
		onSelect: (index: number) => void;
		panelId: string;
		tabIdPrefix?: string;
	};

	let {
		forecast,
		selectedIndex,
		onSelect,
		panelId,
		tabIdPrefix = 'forecast-tab'
	}: Props = $props();

	const tabs: HTMLButtonElement[] = $state([]);

	function bar(level: PollenLevel): number {
		// "none" and "very-low" both deserve to be visible but they should
		// not look identical; very-low gets the next discrete step up.
		const idx: Record<PollenLevel, number> = {
			none: 0.6,
			'very-low': 1,
			low: 2,
			moderate: 3,
			high: 4,
			'very-high': 5
		};
		return idx[level];
	}

	/**
	 * WAI-ARIA tablist with manual activation. Arrow keys move focus between
	 * tabs but do not commit the selection. The user activates with Enter or
	 * Space (the default button behaviour) or by clicking. This avoids the
	 * "every arrow press re-announces the H1" problem that auto-activation
	 * would cause for screen-reader users exploring the strip.
	 */
	function onKeydown(e: KeyboardEvent, index: number) {
		const total = forecast.length;
		let next = index;
		if (e.key === 'ArrowRight') next = Math.min(index + 1, total - 1);
		else if (e.key === 'ArrowLeft') next = Math.max(index - 1, 0);
		else if (e.key === 'Home') next = 0;
		else if (e.key === 'End') next = total - 1;
		else return;

		e.preventDefault();
		tabs[next]?.focus();
	}
</script>

<ol role="tablist" aria-label="Five-day outlook">
	{#each forecast as day, i (day.date)}
		<li data-level={day.overall.level} class:selected={i === selectedIndex}>
			<button
				bind:this={tabs[i]}
				type="button"
				role="tab"
				id="{tabIdPrefix}-{i}"
				aria-controls={panelId}
				aria-selected={i === selectedIndex}
				tabindex={i === selectedIndex ? 0 : -1}
				aria-label={`${i === 0 ? 'Today' : shortWeekday(day.date)}, pollen ${levelLabel(day.overall.level).toLowerCase()}`}
				onclick={() => onSelect(i)}
				onkeydown={(e) => onKeydown(e, i)}
			>
				<span class="day">{i === 0 ? 'Today' : shortWeekday(day.date)}</span>
				<span class="bar" aria-hidden="true" style="--height: {bar(day.overall.level)}"></span>
				<span class="lvl">{levelLabel(day.overall.level)}</span>
			</button>
		</li>
	{/each}
</ol>

<style>
	ol {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--sp-2);
		list-style: none;
		padding: 0;
		margin-top: var(--sp-7);
	}

	li {
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

	button {
		display: grid;
		grid-template-rows: auto 1fr auto;
		align-items: center;
		justify-items: center;
		gap: var(--sp-2);
		width: 100%;
		padding: var(--sp-4) var(--sp-2);
		min-height: 8.5rem;
		border: 0;
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		color: inherit;
		text-align: center;
		font-size: var(--fs-sm);
		font-family: inherit;
		cursor: pointer;
		transition:
			background var(--ease-quick),
			outline-color var(--ease-quick);
	}

	button:hover {
		background: color-mix(in srgb, var(--paper-warm) 60%, var(--paper));
	}

	li.selected button {
		background: var(--paper);
		outline: 1.5px solid var(--ink);
		outline-offset: -1.5px;
	}

	button:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-offset);
	}

	.day {
		font-weight: var(--weight-medium);
		color: var(--ink-soft);
	}

	li.selected .day {
		color: var(--ink);
	}

	/* Mini-bar height grows with the level (0.6 = none, 5 = very-high). */
	.bar {
		display: block;
		width: 1.25rem;
		height: calc(var(--height) * 0.625rem);
		min-height: 0.375rem;
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
		button {
			min-height: 6.5rem;
		}
	}
</style>
