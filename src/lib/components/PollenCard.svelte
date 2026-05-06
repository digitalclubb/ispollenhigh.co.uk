<script lang="ts">
	import type { PollenCategory, PollenTypeReading } from '$lib/types/pollen';
	import { categoryLabel, levelLabel } from '$lib/utils/format';

	type Props = {
		category: PollenCategory;
		reading: PollenTypeReading;
	};

	let { category, reading }: Props = $props();

	let speciesText = $derived(
		reading.dominantSpecies.length > 0
			? `${reading.dominantSpecies.slice(0, 2).join(' and ')} active.`
			: ''
	);
</script>

<article class="card" data-level={reading.level}>
	<header>
		<h2>{categoryLabel(category)}</h2>
		<p class="level-word">{levelLabel(reading.level)}</p>
	</header>

	<p class="numeral" aria-hidden="true">{reading.indexValue}</p>
	<p class="visually-hidden">Index value {reading.indexValue} of 5.</p>

	{#if speciesText}
		<p class="species">{speciesText}</p>
	{/if}
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--sp-3);
		padding: var(--sp-5);
		border-radius: var(--radius-lg);
		background-color: var(--bg);
		color: var(--fg);
		min-height: 14rem;
		container-type: inline-size;

		--bg: var(--level-none-bg);
		--fg: var(--level-none-fg);
		--accent: var(--level-none-accent);
	}

	.card[data-level='very-low'] {
		--bg: var(--level-low-bg);
		--fg: var(--level-low-fg);
		--accent: var(--level-low-accent);
	}
	.card[data-level='low'] {
		--bg: var(--level-low-bg);
		--fg: var(--level-low-fg);
		--accent: var(--level-low-accent);
	}
	.card[data-level='moderate'] {
		--bg: var(--level-moderate-bg);
		--fg: var(--level-moderate-fg);
		--accent: var(--level-moderate-accent);
	}
	.card[data-level='high'] {
		--bg: var(--level-high-bg);
		--fg: var(--level-high-fg);
		--accent: var(--level-high-accent);
	}
	.card[data-level='very-high'] {
		--bg: var(--level-very-high-bg);
		--fg: var(--level-very-high-fg);
		--accent: var(--level-very-high-accent);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--sp-3);
	}

	h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-bold);
		letter-spacing: var(--tracking-tight);
	}

	.level-word {
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		letter-spacing: var(--tracking-loose);
		text-transform: uppercase;
		color: var(--accent);
	}

	.numeral {
		font-family: var(--font-display);
		font-size: clamp(4rem, 18cqi, 8rem);
		font-weight: var(--weight-display);
		line-height: 0.85;
		letter-spacing: var(--tracking-tight);
		color: var(--accent);
		margin-block: auto var(--sp-2);
		font-feature-settings: 'tnum';
	}

	.species {
		font-size: var(--fs-sm);
		opacity: 0.85;
	}
</style>
