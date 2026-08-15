<script lang="ts">
	import type { DirectoryLink } from '$lib/data/directory';

	type Props = {
		regionName: string;
		cities: DirectoryLink[];
		towns: DirectoryLink[];
		postcodeAreas: DirectoryLink[];
	};

	let { regionName, cities, towns, postcodeAreas }: Props = $props();
</script>

{#if cities.length > 0 || towns.length > 0 || postcodeAreas.length > 0}
	<nav class="children" aria-label={`Areas in ${regionName}`}>
		<h2>Pollen count by town in {regionName}</h2>

		{#if cities.length > 0}
			<ul class="links">
				{#each cities as city (city.path)}
					<li><a href={city.path}>{city.name}</a></li>
				{/each}
			</ul>
		{/if}

		{#if towns.length > 0}
			<h3>Towns</h3>
			<ul class="links">
				{#each towns as town (town.path)}
					<li><a href={town.path}>{town.name}</a></li>
				{/each}
			</ul>
		{/if}

		{#if postcodeAreas.length > 0}
			<h3>Postcode areas</h3>
			<ul class="links muted">
				{#each postcodeAreas as area (area.path)}
					<li><a href={area.path}>{area.name}</a></li>
				{/each}
			</ul>
		{/if}
	</nav>
{/if}

<style>
	.children {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}

	h3 {
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin: var(--sp-5) 0 var(--sp-3);
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
	}
</style>
