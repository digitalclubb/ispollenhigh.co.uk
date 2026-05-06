<script lang="ts">
	import { page } from '$app/state';
	import Search from '$lib/components/Search.svelte';

	// Default to 500 so the kicker never reads "Error undefined" during a
	// brief hydration window or when the framework can't supply a status.
	const status = $derived(page.status || 500);

	const headline = $derived(
		status === 404 ? "Couldn't find that area." : 'Something has gone wrong.'
	);

	const body = $derived(
		status === 404
			? 'The postcode area or town you asked for is not on our list. Try a search below or head back to the homepage for an answer based on where you are.'
			: 'The page failed to load. Try again in a moment, or pick another area.'
	);
</script>

<svelte:head>
	<title>{status === 404 ? 'Not found' : 'Error'} | ispollenhigh</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error">
	<p class="kicker">Error {status}</p>
	<h1>{headline}</h1>
	<p class="lede">{body}</p>

	<div class="actions">
		<a class="btn" href="/">Back to homepage</a>
	</div>

	<div class="search">
		<h2>Or search a postcode or town</h2>
		<Search />
	</div>
</section>

<style>
	.error {
		padding-block: var(--sp-9) var(--sp-7);
		max-width: 60ch;
		display: flex;
		flex-direction: column;
		gap: var(--sp-5);
	}

	.kicker {
		font-size: var(--fs-sm);
		font-weight: var(--weight-medium);
		letter-spacing: var(--tracking-loose);
		text-transform: uppercase;
		color: var(--ink-mute);
	}

	h1 {
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: var(--weight-bold);
		line-height: var(--lh-tight);
		letter-spacing: var(--tracking-tight);
		max-width: 14ch;
	}

	.lede {
		font-size: var(--fs-md);
		color: var(--ink-soft);
	}

	.actions {
		margin-top: var(--sp-3);
	}

	.btn {
		display: inline-block;
		min-height: 2.75rem;
		padding: var(--sp-3) var(--sp-5);
		border-radius: var(--radius-md);
		background: var(--ink);
		color: var(--paper);
		font-weight: var(--weight-medium);
		font-size: var(--fs-sm);
		text-decoration: none;
		transition: background var(--ease-quick);
	}

	.btn:hover,
	.btn:focus-visible {
		background: var(--accent);
	}

	.search {
		margin-top: var(--sp-5);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
		display: flex;
		flex-direction: column;
		gap: var(--sp-4);
	}

	.search h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
	}
</style>
