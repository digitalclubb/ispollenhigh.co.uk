<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const canonical = 'https://ispollenhigh.co.uk/locations';
</script>

<svelte:head>
	<title>Pollen count by area — every UK town, city and postcode | ispollenhigh</title>
	<meta
		name="description"
		content="Today's pollen count for {data.total} UK towns, cities, regions and postcode areas. Pick your area for live grass, tree and weed levels with a five-day outlook."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Pollen count by area — every UK town and city" />
	<meta
		property="og:description"
		content="Today's pollen count for every UK town, city, region and postcode area."
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<article class="directory">
	<h1>Pollen count by area</h1>
	<p class="lede">
		Live grass, tree and weed pollen for {data.total} places across the UK. Start with
		your forecast region for the full list of towns in it, or jump straight to a
		city below.
	</p>

	<section>
		<h2>Forecast regions</h2>
		<p class="hint">
			The Met Office divides the UK into 16 pollen forecast regions. Each one
			lists every town and postcode area inside it.
		</p>
		<ul class="links">
			{#each data.regions as region (region.path)}
				<li>
					<a href={region.path}>
						{region.name}
						<span class="count">{region.count}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Cities</h2>
		<ul class="links">
			{#each data.cities as city (city.path)}
				<li><a href={city.path}>{city.name}</a></li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Largest towns</h2>
		<ul class="links muted">
			{#each data.towns as town (town.path)}
				<li><a href={town.path}>{town.name}</a></li>
			{/each}
		</ul>
		<p class="hint">
			Every other town of 10,000 people or more is listed on its forecast
			region's page above.
		</p>
	</section>
</article>

<style>
	.directory {
		max-width: var(--content-width);
		margin-inline: auto;
		padding: var(--sp-7) var(--gutter) var(--sp-6);
	}

	h1 {
		font-family: var(--font-display);
		font-size: var(--fs-2xl);
		line-height: var(--lh-tight);
		margin-bottom: var(--sp-4);
	}

	.lede {
		max-width: 60ch;
		color: var(--ink-soft);
		line-height: var(--lh-base);
		margin-bottom: var(--sp-7);
	}

	section {
		padding-top: var(--sp-6);
		margin-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	h2 {
		font-size: var(--fs-lg);
		margin-bottom: var(--sp-3);
	}

	.hint {
		max-width: 60ch;
		font-size: var(--fs-sm);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2) var(--sp-3);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links a {
		display: inline-block;
		padding: var(--sp-2) var(--sp-3);
		border: 1px solid var(--rule);
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		color: var(--ink);
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		text-decoration: none;
	}

	.links.muted a {
		color: var(--ink-soft);
		font-weight: var(--weight-regular);
	}

	.links a:hover,
	.links a:focus-visible {
		border-color: var(--ink-mute);
		color: var(--ink);
	}

	.count {
		color: var(--ink-mute);
		font-weight: var(--weight-regular);
		font-size: var(--fs-xs);
		margin-left: var(--sp-1);
	}
</style>
