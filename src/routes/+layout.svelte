<script lang="ts">
	import '$lib/styles/global.css';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/MonaSans.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<main id="main" tabindex="-1">
	{@render children()}
</main>

<footer>
	<p class="legal">
		<small>
			Pollen data: Google Pollen API and CAMS via Open-Meteo. Forecasts are
			indicative. ispollenhigh.co.uk is independent. We are not affiliated with
			the Met Office.
		</small>
	</p>
</footer>

<InstallPrompt />

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

	.legal {
		max-width: 60ch;
		line-height: var(--lh-base);
	}
</style>
