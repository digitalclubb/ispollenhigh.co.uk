<script lang="ts">
	import type { ForecastDay, PollenReading } from '$lib/types/pollen';
	import { dayLabelForOffset, trendPreview } from '$lib/utils/format';
	import ForecastStrip from './ForecastStrip.svelte';
	import HeroAnswer from './HeroAnswer.svelte';
	import PollenCard from './PollenCard.svelte';

	type Props = {
		reading: PollenReading;
	};

	let { reading }: Props = $props();

	let selectedIndex = $state(0);

	/**
	 * Reset to today when a new reading arrives (geolocation override on the
	 * homepage, or navigation between location pages). The first-run guard
	 * keeps the effect from clobbering an explicit initial state set by a
	 * future deep-link scheme — Svelte 5 effects always fire once on mount.
	 */
	let initialised = false;
	$effect(() => {
		reading.fetchedAt;
		if (initialised) selectedIndex = 0;
		initialised = true;
	});

	const selected = $derived<ForecastDay>(reading.forecast[selectedIndex] ?? reading.forecast[0]);
	const dayInfo = $derived(dayLabelForOffset(selected.date, selectedIndex));
	const trend = $derived(trendPreview(reading.forecast, selectedIndex));

	const panelId = 'forecast-panel';
	const labelledBy = $derived(`forecast-tab-${selectedIndex}`);

	function onSelect(i: number) {
		selectedIndex = i;
	}
</script>

<div role="tabpanel" id={panelId} aria-labelledby={labelledBy} tabindex="0" class="panel">
	<HeroAnswer
		level={selected.overall.level}
		locationName={reading.location.name}
		validFor={selected.date}
		dayLabel={dayInfo.label}
		isToday={dayInfo.isToday}
		fetchedAt={reading.fetchedAt}
		{trend}
	/>

	<section class="cards" aria-label="Pollen by type">
		<PollenCard category="grass" reading={selected.types.grass} />
		<PollenCard category="tree" reading={selected.types.tree} />
		<PollenCard category="weed" reading={selected.types.weed} />
	</section>
</div>

<ForecastStrip forecast={reading.forecast} {selectedIndex} {onSelect} {panelId} />

<style>
	.panel {
		/* The tabpanel needs to be focusable so screen readers can land on it
		   after a tab activation, but it shouldn't show a default outline as
		   the H1 is what carries focus visually. */
		outline: none;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--sp-3);
	}

	@media (max-width: 720px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}
</style>
