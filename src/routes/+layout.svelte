<script lang="ts">
	import '$lib/styles/global.css';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';
	import UpdatePrompt from '$lib/components/UpdatePrompt.svelte';

	// Analytics is mounted in `+layout.ts` per Vercel's SvelteKit guidance
	// so route changes are tracked end-to-end.

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
	<nav class="legal-nav" aria-label="Pollen guides">
		<a href="/locations">All areas</a>
		<a href="/pollen-calendar">Pollen calendar</a>
		<a href="/hay-fever-season">Hay fever season</a>
		<a href="/pollen-levels-explained">Pollen levels</a>
	</nav>
	<nav class="legal-nav" aria-label="Site information">
		<a href="/about">About</a>
		<a href="/privacy">Privacy</a>
		<a href="/cookies">Cookies</a>
		<a href="/terms">Terms</a>
	</nav>
	<p class="support">
		Free to use, with no adverts.
		<a href="https://ko-fi.com/digitalclubb" target="_blank" rel="external noopener"
			>Buy me a coffee<span class="visually-hidden"> (opens in a new tab)</span></a
		> if it helped.
	</p>
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

	.support {
		max-width: 60ch;
		line-height: var(--lh-base);
		margin-bottom: var(--sp-3);
		color: var(--ink-soft);
	}

	.support a {
		color: var(--ink);
		font-weight: var(--weight-medium);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.support a:hover,
	.support a:focus-visible {
		color: var(--accent);
	}

	.legal {
		max-width: 60ch;
		line-height: var(--lh-base);
	}
</style>
