<script lang="ts">
	import type { PollenLevel } from '$lib/types/pollen';
	import { longDate, verdict } from '$lib/utils/format';

	type Props = {
		level: PollenLevel;
		locationName: string;
		validFor: string;
	};

	let { level, locationName, validFor }: Props = $props();

	let text = $derived(verdict(level, locationName));
	let date = $derived(longDate(validFor));
	let highlight = $derived(level === 'high' || level === 'very-high');
</script>

<header class="hero" data-level={level}>
	<p class="kicker">Pollen forecast for {date}</p>
	<h1 class:highlight>{text}</h1>
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
		font-weight: var(--weight-display);
		line-height: var(--lh-tight);
		letter-spacing: var(--tracking-tight);
		color: var(--ink);
		max-width: 16ch;
	}

	h1.highlight {
		color: var(--level-high-accent);
	}

	[data-level='very-high'] h1.highlight {
		color: var(--level-very-high-accent);
	}
</style>
