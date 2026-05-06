<script lang="ts">
	// Minimal offline fallback. The service worker serves the last cached
	// page for any HTML request when the network is down, so this template
	// only renders if a user navigates straight to /offline.
</script>

<svelte:head>
	<title>Offline | ispollenhigh</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="offline">
	<h1>You are offline.</h1>
	<p>
		The last pollen reading you saw is still available in your browser. Reconnect to get the latest.
	</p>
</section>

<style>
	.offline {
		padding-block: var(--sp-9) var(--sp-7);
		max-width: 36rem;
	}

	h1 {
		font-family: var(--font-display);
		font-size: var(--fs-3xl);
		font-weight: var(--weight-display);
		line-height: var(--lh-tight);
		letter-spacing: var(--tracking-tight);
	}

	p {
		margin-top: var(--sp-5);
		font-size: var(--fs-md);
		color: var(--ink-soft);
	}
</style>
