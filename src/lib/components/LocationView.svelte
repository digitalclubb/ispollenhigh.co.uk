<script lang="ts">
	import { type Location, getCanonicalPath } from '$lib/data/locations';
	import type { PollenReading } from '$lib/types/pollen';
	import { jsonLdScript, locationJsonLd } from '$lib/utils/jsonld';
	import ForecastStrip from './ForecastStrip.svelte';
	import HeroAnswer from './HeroAnswer.svelte';
	import LocationCopy from './LocationCopy.svelte';
	import PollenCard from './PollenCard.svelte';
	import Search from './Search.svelte';

	type Props = {
		reading: PollenReading;
		location: Location;
	};

	let { reading, location }: Props = $props();

	const canonical = $derived(`https://ispollenhigh.co.uk${getCanonicalPath(location)}`);

	const ld = $derived(jsonLdScript(locationJsonLd(location, reading)));
</script>

<svelte:head>
	<title>Is pollen high in {location.name}? | ispollenhigh</title>
	<meta
		name="description"
		content={`Pollen forecast for ${location.name}. Today's grass, tree and weed levels with a five-day outlook.`}
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={`Is pollen high in ${location.name}?`} />
	<meta
		property="og:description"
		content={`Today's grass, tree and weed pollen levels for ${location.name} with a five-day outlook.`}
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta name="twitter:card" content="summary" />
	{@html `<script type="application/ld+json">${ld}</script>`}
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

<LocationCopy {location} />

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
