<script lang="ts">
	import type { DirectoryLink } from '$lib/data/directory';

	// Presentational only. The distance ranking runs in the page's server
	// load: doing it here would pull the whole location registry (~176 kB)
	// into the browser bundle to render six links.
	type Props = { items: DirectoryLink[] };

	let { items }: Props = $props();
</script>

{#if items.length > 0}
	<nav class="nearby" aria-label="Nearby areas">
		<h2>Nearby areas</h2>
		<ul>
			{#each items as loc (loc.path)}
				<li>
					<a href={loc.path}>{loc.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.nearby {
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

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2) var(--sp-3);
		list-style: none;
		padding: 0;
	}

	a {
		display: inline-block;
		padding: var(--sp-2) var(--sp-3);
		border: 1px solid var(--rule);
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		color: var(--ink);
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		text-decoration: none;
		transition:
			background var(--ease-quick),
			border-color var(--ease-quick);
	}

	a:hover,
	a:focus-visible {
		background: var(--ink);
		color: var(--paper);
		border-color: var(--ink);
	}
</style>
