<script lang="ts">
	import ForecastStrip from '$lib/components/ForecastStrip.svelte';
	import HeroAnswer from '$lib/components/HeroAnswer.svelte';
	import PollenCard from '$lib/components/PollenCard.svelte';
	import Search from '$lib/components/Search.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const reading = $derived(data.reading);
	const region = $derived(data.location);
</script>

<svelte:head>
	<title>Is pollen high in {region.name}? | ispollenhigh</title>
	<meta
		name="description"
		content="Pollen forecast for {region.name}. Today's grass, tree and weed levels with a five-day outlook."
	/>
	<link rel="canonical" href="https://ispollenhigh.co.uk/region/{region.slug}" />
</svelte:head>

<HeroAnswer
	level={reading.overall.level}
	locationName={reading.location.name}
	validFor={reading.validFor}
/>

<section class="cards" aria-label="Pollen by type">
	<PollenCard category="grass" reading={reading.types.grass} />
	<PollenCard category="tree" reading={reading.types.tree} />
	<PollenCard category="weed" reading={reading.types.weed} />
</section>

<ForecastStrip forecast={reading.forecast} />

<section class="search-zone" aria-label="Look up another location">
	<h2>Check another area</h2>
	<Search />
</section>

<style>
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

	.search-zone {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	.search-zone h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}
</style>
