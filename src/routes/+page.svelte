<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import AnswerView from '$lib/components/AnswerView.svelte';
	import GeoActions from '$lib/components/GeoActions.svelte';
	import Search from '$lib/components/Search.svelte';
	import SkeletonAnswer from '$lib/components/SkeletonAnswer.svelte';
	import { markAnswerRendered } from '$lib/state/install-prompt.svelte';
	import type { PollenReading } from '$lib/types/pollen';
	import type { PageData } from './$types';

	const GEO_DISMISSED_KEY = 'iph_geo_dismissed';
	const LAST_LOCATION_KEY = 'iph_last_location';
	const AUTO_PROMPT_DELAY_MS = 400;
	// Hard ceiling so the skeleton never hangs (e.g. cached fetch stalls).
	// Comfortably under Googlebot's ~5s render budget so a snapshot taken
	// after this still shows the answer, not the loader.
	const SKELETON_FALLBACK_MS = 4000;

	let { data }: { data: PageData } = $props();
	const notFoundQuery = $derived(page.url.searchParams.get('notfound'));

	// `override` holds the locally-fetched reading after the user grants
	// geolocation. `reading` falls through to the server-rendered data on
	// navigation, which keeps the homepage and per-location pages in sync.
	let override = $state<PollenReading | null>(null);
	const reading = $derived<PollenReading>(override ?? data.reading);

	// The server-rendered location is an IP-based guess via Vercel geo
	// headers and is often miles off (Twickenham resolves to Hackney for
	// many UK ISPs). Once the user grants browser geolocation we have
	// proper coords and the caveat goes away.
	const approximate = $derived(override === null);

	let busy = $state(false);
	let geoError = $state<string | null>(null);
	let inflight: AbortController | null = null;

	/**
	 * Remove the html[data-geo="loading"] attribute that the inline script in
	 * app.html may have set. Once cleared, CSS reveals the AnswerView and
	 * hides the skeleton. Safe to call from any code path — no-op if the
	 * attribute was never set.
	 */
	function clearGeoLoadingState(): void {
		if (typeof document === 'undefined') return;
		document.documentElement.removeAttribute('data-geo');
	}

	onMount(() => {
		markAnswerRendered();

		// No browser geolocation API: inline script wouldn't have set the
		// attribute, but clear defensively in case localStorage said one
		// thing and feature detection said another.
		if (typeof navigator === 'undefined' || !navigator.geolocation) {
			clearGeoLoadingState();
			return;
		}

		let dismissed = false;
		let cached: { lat: number; lon: number } | null = null;
		try {
			dismissed = localStorage.getItem(GEO_DISMISSED_KEY) !== null;
			const raw = localStorage.getItem(LAST_LOCATION_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (typeof parsed?.lat === 'number' && typeof parsed?.lon === 'number') {
					cached = { lat: parsed.lat, lon: parsed.lon };
				}
			}
		} catch {
			// localStorage denied (privacy mode) or stored value malformed;
			// treat as no cache and not dismissed.
		}

		// Previously denied: never auto-prompt again. Manual button still works.
		if (dismissed) {
			clearGeoLoadingState();
			return;
		}

		// Return visit with cached coords: the inline script has already set
		// data-geo="loading" so the skeleton is on screen. Refetch fresh data
		// for that location and clear the attribute once we have it. The
		// answer will appear with no flash because the user never saw the
		// SSR'd default — CSS hid it before first paint.
		if (cached) {
			fetchPollenForCoords(cached.lat, cached.lon).finally(clearGeoLoadingState);
			const fallback = setTimeout(clearGeoLoadingState, SKELETON_FALLBACK_MS);
			return () => clearTimeout(fallback);
		}

		// First visit, no cache. We deliberately don't skeleton here: the
		// SSR'd default is fine to show immediately (Googlebot indexes it
		// without ambiguity), and granting permission still triggers the
		// override swap. Worst case is the same data refresh users had
		// before the cache landed — no regression.
		const promptTimer = setTimeout(() => {
			useMyLocation({ silent: true });
		}, AUTO_PROMPT_DELAY_MS);
		return () => clearTimeout(promptTimer);
	});

	async function fetchPollenForCoords(lat: number, lon: number): Promise<void> {
		inflight?.abort();
		const controller = new AbortController();
		inflight = controller;
		try {
			const params = new URLSearchParams({
				lat: roundToBucket(lat),
				lon: roundToBucket(lon)
			});
			const res = await fetch(`/api/pollen?${params}`, { signal: controller.signal });
			if (!res.ok) throw new Error(`api ${res.status}`);
			const next = (await res.json()) as PollenReading;
			override = next;
		} catch (err) {
			if (err instanceof DOMException && err.name === 'AbortError') return;
			// Silent fail — fall through to the SSR'd default. Cache stays
			// intact so the next visit can try again.
		} finally {
			if (inflight === controller) inflight = null;
		}
	}

	async function useMyLocation(options: { silent?: boolean } = {}) {
		if (typeof navigator === 'undefined' || !navigator.geolocation) {
			if (!options.silent) geoError = 'Your browser cannot share location.';
			return;
		}
		inflight?.abort();
		const controller = new AbortController();
		inflight = controller;
		busy = true;
		geoError = null;
		try {
			const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject, {
					enableHighAccuracy: false,
					timeout: 8000,
					maximumAge: 5 * 60 * 1000
				});
			});
			// Round client-side to the canonical bucket so the CDN cache hits
			// without a 308 round-trip.
			const params = new URLSearchParams({
				lat: roundToBucket(pos.coords.latitude),
				lon: roundToBucket(pos.coords.longitude)
			});
			const res = await fetch(`/api/pollen?${params}`, { signal: controller.signal });
			if (!res.ok) throw new Error(`api ${res.status}`);
			const next = (await res.json()) as PollenReading;
			override = next;
			// Cache the raw coords (not the bucketed ones) so a subsequent
			// visit can skip the prompt and skeleton-then-fetch directly.
			try {
				localStorage.setItem(
					LAST_LOCATION_KEY,
					JSON.stringify({ lat: pos.coords.latitude, lon: pos.coords.longitude })
				);
			} catch {
				// Storage denied; the override sticks for this session anyway.
			}
		} catch (err) {
			if (err instanceof DOMException && err.name === 'AbortError') return;

			// Remember permanent denials so we don't auto-prompt again on
			// future visits. Manual button retry still works (and will fail
			// fast at the browser layer, surfacing the message below).
			if (err instanceof GeolocationPositionError && err.code === 1) {
				try {
					localStorage.setItem(GEO_DISMISSED_KEY, String(Date.now()));
				} catch {
					// Storage denied; nothing to remember. Auto-prompt may fire
					// again next visit but the browser will keep refusing.
				}
			}

			if (!options.silent) {
				const msg =
					err instanceof GeolocationPositionError ? geolocationMessage(err.code) : null;
				geoError = msg ?? 'We could not get your location. Try the search instead.';
			}
		} finally {
			if (inflight === controller) inflight = null;
			busy = false;
		}
	}

	function roundToBucket(coord: number): string {
		// Match server-side cache-key.ts STEP = 0.05.
		return (Math.round(coord / 0.05) * 0.05).toFixed(2);
	}

	function geolocationMessage(code: number): string | null {
		if (code === 1) return 'Location permission was declined.';
		if (code === 2) return 'Your location is currently unavailable.';
		if (code === 3) return 'Looking up your location took too long.';
		return null;
	}
</script>

<svelte:head>
	<!--
		Deliberately NOT personalised. The title used to interpolate the
		IP-guessed location, so the version Google crawled read "Is pollen high
		in Hackney?" — the site's most important page competing on a borough
		nobody searches. Users still get their own area in the H1 below.
	-->
	<title>Pollen count today — is pollen high in your area? | ispollenhigh</title>
	<meta
		name="description"
		content="Today's UK pollen count, by town and postcode. A straight answer on whether pollen is high right now, with grass, tree and weed levels and a five-day outlook."
	/>
	<link rel="canonical" href="https://ispollenhigh.co.uk/" />
	<meta property="og:title" content="Is pollen high today?" />
	<meta
		property="og:description"
		content="A straight answer to whether pollen is high in your area today, for any UK postcode."
	/>
	<meta property="og:url" content="https://ispollenhigh.co.uk/" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content="https://ispollenhigh.co.uk/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${data.jsonLd}</script>`}
</svelte:head>

<!--
	Both shells render unconditionally. Visibility is driven by the
	html[data-geo="loading"] attribute (set by the inline script in app.html
	for returning visitors with cached coords, cleared by JS once the
	override resolves). This avoids any flash between SSR and hydration:
	the user only ever sees the right state for that page load.
-->
<div class="answer-shell">
	<AnswerView {reading} />
</div>
<div class="skeleton-shell">
	<SkeletonAnswer />
</div>

<section class="search-zone" aria-label="Look up a different area">
	<h2>Search any UK postcode or town</h2>
	{#if notFoundQuery}
		<p class="note" role="status">
			We could not find a match for <strong>{notFoundQuery}</strong>. Try a postcode like SW1 or a town name.
		</p>
	{/if}
	<Search />
</section>

<GeoActions
	locationName={reading.location.name}
	onUseLocation={() => useMyLocation()}
	{busy}
	{approximate}
/>

{#if geoError}
	<p class="note" role="status">{geoError}</p>
{/if}

{#if reading.source !== 'google'}
	<p class="note muted" role="status">
		Showing {reading.source === 'open-meteo' ? 'CAMS' : 'demo'} data.
	</p>
{/if}

<!--
	Crawlable browse block. The homepage used to link to nothing but the legal
	pages, so Googlebot had no route into any location page and stopped at the
	front door. Links come from the server loader as name/path pairs.
-->
<nav class="browse" aria-label="Browse pollen forecasts by area">
	<h2>Pollen count by city</h2>
	<ul class="links">
		{#each data.browse.cities as city (city.path)}
			<li><a href={city.path}>{city.name}</a></li>
		{/each}
	</ul>

	<h2>Pollen count by region</h2>
	<ul class="links muted">
		{#each data.browse.regions as region (region.path)}
			<li><a href={region.path}>{region.name}</a></li>
		{/each}
	</ul>

	<p class="all"><a href="/locations">See every town, city and postcode area →</a></p>
</nav>

<style>
	/*
		Default state: skeleton hidden, answer visible. Used by first-time
		visitors, deniers, and any client without the inline script (e.g.
		JS disabled, CSP blocking). All paths see the SSR default content.
	*/
	.skeleton-shell {
		display: none;
	}

	/*
		Cached-grant state: inline script in app.html set this attribute
		synchronously before first paint. CSS swaps which shell is visible
		so the user never sees the SSR'd IP-based default flash through
		before their cached-location data arrives.
	*/
	:global(html[data-geo='loading']) .answer-shell {
		display: none;
	}
	:global(html[data-geo='loading']) .skeleton-shell {
		display: block;
	}

	.note {
		margin-top: var(--sp-5);
		font-size: var(--fs-sm);
		color: var(--ink-soft);
	}

	.note.muted {
		color: var(--ink-mute);
	}

	.search-zone {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	.search-zone h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}

	.search-zone .note {
		margin-bottom: var(--sp-4);
	}

	.browse {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	.browse h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}

	.browse h2:not(:first-child) {
		margin-top: var(--sp-6);
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

	.all {
		margin-top: var(--sp-5);
		font-size: var(--fs-sm);
	}

	.all a {
		color: var(--ink-soft);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.all a:hover,
	.all a:focus-visible {
		color: var(--ink);
	}
</style>
