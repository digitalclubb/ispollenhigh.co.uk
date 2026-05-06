<script lang="ts">
	import '$lib/styles/global.css';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';
	import UpdatePrompt from '$lib/components/UpdatePrompt.svelte';

	// Analytics and Speed Insights are mounted in `+layout.ts` per Vercel's
	// SvelteKit guidance so route changes are tracked end-to-end.

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
	<nav class="legal-nav" aria-label="Site information">
		<a href="/about">About</a>
		<a href="/privacy">Privacy</a>
		<a href="/cookies">Cookies</a>
		<a href="/terms">Terms</a>
	</nav>
	<p class="legal">
		<small>
			Pollen data: Google Pollen API and CAMS via Open-Meteo. Forecasts are
			indicative. ispollenhigh.co.uk is independent. We are not affiliated with
			the Met Office.
		</small>
	</p>
</footer>

<InstallPrompt />
<UpdatePrompt />

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

	.legal-nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-5);
		margin-bottom: var(--sp-4);
	}

	.legal-nav a {
		color: var(--ink-soft);
		text-decoration: none;
		font-weight: var(--weight-medium);
	}

	.legal-nav a:hover,
	.legal-nav a:focus-visible {
		color: var(--ink);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.legal {
		max-width: 60ch;
		line-height: var(--lh-base);
	}
</style>
