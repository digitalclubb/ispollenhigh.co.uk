<script lang="ts">
	import type { PollenLevel } from '$lib/types/pollen';
	import { verdict } from '$lib/utils/format';

	type Props = {
		level: PollenLevel;
		locationName: string;
		validFor: string;
	};

	let { level, locationName, validFor }: Props = $props();

	const text = $derived(verdict(level, locationName));

	/**
	 * Short masthead-style date stamp ("Tuesday, 6 May") rather than the full
	 * year. The H1 already establishes that this is a forecast, so the kicker
	 * just dates it.
	 */
	const date = $derived(
		new Intl.DateTimeFormat('en-GB', {
			weekday: 'long',
			day: 'numeric',
			month: 'long'
		}).format(new Date(validFor))
	);
</script>

<header class="hero" data-level={level}>
	<p class="kicker">{date}</p>
	<h1>{text}</h1>
</header>

<style>
	.hero {
		padding-block: clamp(var(--sp-7), 8vw, var(--sp-9)) var(--sp-6);
	}

	.kicker {
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		letter-spacing: var(--tracking-loose);
		text-transform: uppercase;
		color: var(--ink-mute);
		margin-bottom: var(--sp-5);
	}

	h1 {
		font-family: var(--font-display);
		font-size: var(--fs-display);
		font-weight: var(--weight-bold);
		line-height: var(--lh-tight);
		letter-spacing: var(--tracking-tight);
		color: var(--ink);
		max-width: 16ch;
	}

	/*
	 * Headline colour cycles through the level palette so the reassuring
	 * cases read calm and the alarming cases read urgent. None and very-low
	 * stay neutral ink because there is nothing to flag.
	 */
	[data-level='low'] h1 {
		color: var(--level-low-accent);
	}
	[data-level='moderate'] h1 {
		color: var(--level-moderate-accent);
	}
	[data-level='high'] h1 {
		color: var(--level-high-accent);
	}
	[data-level='very-high'] h1 {
		color: var(--level-very-high-accent);
	}
</style>
