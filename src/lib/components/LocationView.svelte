<script lang="ts">
	import { onMount } from 'svelte';
	import AnswerView from '$lib/components/AnswerView.svelte';
	import { type Location, getCanonicalPath } from '$lib/data/locations';
	import { markAnswerRendered } from '$lib/state/install-prompt.svelte';
	import type { PollenReading } from '$lib/types/pollen';
	import { jsonLdScript, locationJsonLd } from '$lib/utils/jsonld';
	import LocationCopy from './LocationCopy.svelte';
	import NearbyLocations from './NearbyLocations.svelte';
	import Search from './Search.svelte';
	import ShareButton from './ShareButton.svelte';

	type Props = {
		reading: PollenReading;
		location: Location;
	};

	let { reading, location }: Props = $props();

	onMount(() => markAnswerRendered());

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
	<meta
		property="og:image"
		content={`https://ispollenhigh.co.uk/api/og?slug=${location.slug}&type=${location.type}`}
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${ld}</script>`}
</svelte:head>

<AnswerView {reading} />

<div class="share-row">
	<ShareButton title={`Is pollen high in ${location.name}?`} url={canonical} />
</div>

<LocationCopy {location} />

<NearbyLocations origin={location} />

<section class="search-zone" aria-label="Look up another location">
	<h2>Check another area</h2>
	<Search />
</section>

<style>
	.share-row {
		margin-top: var(--sp-6);
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
