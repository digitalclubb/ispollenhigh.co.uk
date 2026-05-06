<script lang="ts">
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>ispollenhigh — pollen forecast for the UK</title>
	<meta
		name="description"
		content="A simple answer to the only question that matters during hayfever season. Is pollen high in your area today?"
	/>
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<main id="main" tabindex="-1">
	{@render children()}
</main>

<footer>
	<small>ispollenhigh — phase 0 scaffolding. Real site coming.</small>
</footer>

<style>
	footer {
		max-width: var(--content-width);
		margin-inline: auto;
		padding: var(--sp-7) var(--gutter) var(--sp-6);
		color: var(--ink-mute);
		font-size: var(--fs-sm);
		border-top: 1px solid var(--rule);
		margin-top: var(--sp-9);
	}
</style>
