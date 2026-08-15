<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import AnswerView from '$lib/components/AnswerView.svelte';
	import type { DirectoryLink } from '$lib/data/directory';
	import type { RenderedCopy } from '$lib/data/local-copy';
	import type { CalendarView } from '$lib/server/location-page';
	import SeasonCalendar from './SeasonCalendar.svelte';
	import { markAnswerRendered } from '$lib/state/install-prompt.svelte';
	import type { PollenReading } from '$lib/types/pollen';
	import { levelLabel } from '$lib/utils/format';
	import LocationCopy from './LocationCopy.svelte';
	import NearbyLocations from './NearbyLocations.svelte';
	import Search from './Search.svelte';
	import ShareButton from './ShareButton.svelte';

	type Props = {
		reading: PollenReading;
		/** Name only — everything derived from the registry arrives prepared. */
		name: string;
		canonical: string;
		/** Serialised JSON-LD, built in the server load. */
		jsonLd: string;
		copy: RenderedCopy;
		calendar: CalendarView;
		nearby: DirectoryLink[];
		/** Extra crawlable links, e.g. the child list on a region page. */
		children?: Snippet;
	};

	let { reading, name, canonical, jsonLd, copy, calendar, nearby, children }: Props = $props();

	onMount(() => markAnswerRendered());

	/**
	 * "pollen count <place>" is how people actually search — roughly an order
	 * of magnitude more than "is pollen high in <place>" — so the title leads
	 * with it and the brand phrasing follows. The title deliberately does NOT
	 * carry today's level: pages are ISR-cached and Google may serve a title
	 * it crawled days ago, which would show "low" on a high day. The live
	 * answer goes in the description instead, which Google regenerates from
	 * the page far more often.
	 */
	const lower = $derived(levelLabel(reading.overall.level).toLowerCase());
	const description = $derived(
		`Pollen is ${lower} in ${name} today. Live grass, tree and weed pollen counts with a five-day outlook and local peak-season dates.`
	);
</script>

<svelte:head>
	<title>Pollen count in {name} today — is pollen high? | ispollenhigh</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={`Pollen count in ${name} today`} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content="https://ispollenhigh.co.uk/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<AnswerView {reading} />

<div class="share-row">
	<ShareButton title={`Is pollen high in ${name}?`} url={canonical} />
</div>

<LocationCopy {copy} />

<SeasonCalendar {calendar} {name} />

{#if children}
	{@render children()}
{/if}

<NearbyLocations items={nearby} />

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
