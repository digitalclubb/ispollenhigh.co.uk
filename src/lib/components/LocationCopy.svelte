<script lang="ts">
	import type { RenderedCopy } from '$lib/data/local-copy';

	// The copy is templated from the parent region, so it is built in the
	// page's server load. Rendering it here would drag `local-copy` — and
	// through it the whole registry — into the browser bundle.
	type Props = { copy: RenderedCopy };
	let { copy }: Props = $props();
</script>

<section class="copy" aria-label="About pollen in this area">
	<p>{copy.intro}</p>
	<p>{copy.species}</p>
	<p>{copy.timing}</p>
	{#if copy.crossRegion}
		<p class="cross">
			For the wider regional view see
			<a href={copy.crossRegion.path}>{copy.crossRegion.name}</a>, or
			<a href="/locations">browse every area we cover</a>.
		</p>
	{:else}
		<p class="cross">{copy.cross}</p>
	{/if}
</section>

<style>
	.copy {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
		max-width: 60ch;
		display: flex;
		flex-direction: column;
		gap: var(--sp-4);
		font-size: var(--fs-base);
		line-height: var(--lh-base);
		color: var(--ink-soft);
	}

	.copy p {
		margin: 0;
	}

	.cross {
		color: var(--ink-mute);
		font-size: var(--fs-sm);
	}

	.cross a {
		color: var(--ink-soft);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.cross a:hover,
	.cross a:focus-visible {
		color: var(--ink);
	}
</style>
