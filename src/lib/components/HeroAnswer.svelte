<script lang="ts">
	import type { PollenLevel } from '$lib/types/pollen';
	import { fetchedAtTime, verdict } from '$lib/utils/format';

	type Props = {
		level: PollenLevel;
		locationName: string;
		validFor: string;
		dayLabel: string;
		isToday: boolean;
		fetchedAt: string;
		trend: string | null;
	};

	let {
		level,
		locationName,
		validFor,
		dayLabel,
		isToday,
		fetchedAt,
		trend
	}: Props = $props();

	const text = $derived(verdict(level, locationName, dayLabel, isToday));

	const dateStamp = $derived(
		new Intl.DateTimeFormat('en-GB', {
			weekday: 'long',
			day: 'numeric',
			month: 'long'
		}).format(new Date(validFor))
	);

	const fetchedStamp = $derived(fetchedAtTime(fetchedAt));
</script>

<header class="hero" data-level={level}>
	<p class="kicker">
		<span>{dateStamp}</span>
		<span class="dot" aria-hidden="true"></span>
		<span class="freshness">Updated {fetchedStamp}</span>
	</p>
	<!--
		aria-live scoped to the H1 + trend only. The kicker date and the
		freshness stamp don't carry the user-facing answer, so leaving them
		out keeps screen readers from re-announcing them every day-switch.
	-->
	<div aria-live="polite" aria-atomic="true">
		<h1>{text}</h1>
		{#if trend}
			<p class="trend">{trend}</p>
		{/if}
	</div>
</header>

<style>
	.hero {
		padding-block: clamp(var(--sp-7), 8vw, var(--sp-9)) var(--sp-6);
	}

	.kicker {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--sp-3);
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		letter-spacing: var(--tracking-loose);
		text-transform: uppercase;
		color: var(--ink-mute);
		margin-bottom: var(--sp-5);
	}

	.dot {
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: currentColor;
		opacity: 0.5;
	}

	.freshness {
		font-variant-numeric: tabular-nums;
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

	.trend {
		margin-top: var(--sp-4);
		font-size: var(--fs-md);
		color: var(--ink-soft);
		max-width: 40ch;
	}

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
