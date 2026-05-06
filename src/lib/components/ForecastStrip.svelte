<script lang="ts">
	import type { ForecastDay } from '$lib/types/pollen';
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

<!--
	Flat tablist: <div role="tablist"> with <button role="tab"> children.
	WAI-ARIA requires tabs to be direct children of a tablist; a previous
	<ol>/<li> wrapping broke aria-required-children + aria-required-parent
	in axe and dragged the listitem audit down too. Drop the list semantics
	(they were redundant given the tablist role anyway).
-->
<div role="tablist" aria-label="Five-day outlook" class="strip">
	{#each forecast as day, i (day.date)}
		<button
			bind:this={tabs[i]}
			type="button"
			role="tab"
			id="{tabIdPrefix}-{i}"
			data-level={day.overall.level}
			class:selected={i === selectedIndex}
			aria-controls={panelId}
			aria-selected={i === selectedIndex}
			tabindex={i === selectedIndex ? 0 : -1}
			onclick={() => onSelect(i)}
			onkeydown={(e) => onKeydown(e, i)}
		>
			<span class="day">{i === 0 ? 'Today' : shortWeekday(day.date)}</span>
			<span class="bar" aria-hidden="true"></span>
			<span class="lvl">{levelLabel(day.overall.level)}</span>
		</button>
	{/each}
</div>

<style>
	.strip {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--sp-2);
		margin-top: var(--sp-7);
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
		--accent: var(--level-none-accent);
	}

	button[data-level='very-low'],
	button[data-level='low'] {
		--accent: var(--level-low-accent);
	}
	button[data-level='moderate'] {
		--accent: var(--level-moderate-accent);
	}
	button[data-level='high'] {
		--accent: var(--level-high-accent);
	}
	button[data-level='very-high'] {
		--accent: var(--level-very-high-accent);
	}

	button:hover {
		background: color-mix(in srgb, var(--paper-warm) 60%, var(--paper));
	}

	button.selected {
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

	button.selected .day {
		color: var(--ink);
	}

	/* Mini-bar height grows with the level. None gets a smaller floor so
	   it reads as visibly "less" than very-low. Heights are level-keyed
	   via the data-level attribute on the button, which lets us avoid
	   inline style attributes (and so the strict 'style-src' CSP holds). */
	.bar {
		display: block;
		width: 1.25rem;
		border-radius: 999px;
		background: var(--accent);
		align-self: end;
	}

	button[data-level='none'] .bar {
		height: 0.375rem;
	}
	button[data-level='very-low'] .bar {
		height: 0.625rem;
	}
	button[data-level='low'] .bar {
		height: 1.25rem;
	}
	button[data-level='moderate'] .bar {
		height: 1.875rem;
	}
	button[data-level='high'] .bar {
		height: 2.5rem;
	}
	button[data-level='very-high'] .bar {
		height: 3.125rem;
	}

	.lvl {
		color: var(--ink-mute);
		font-size: var(--fs-xs);
	}

	/* Below 480px the level word is hidden visually but kept in the
	   accessibility tree so screen readers can still announce it. */
	@media (max-width: 480px) {
		.lvl {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
		button {
			min-height: 6.5rem;
		}
	}
</style>
