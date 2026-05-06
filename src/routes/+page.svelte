<script lang="ts">
	import ForecastStrip from '$lib/components/ForecastStrip.svelte';
	import GeoActions from '$lib/components/GeoActions.svelte';
	import HeroAnswer from '$lib/components/HeroAnswer.svelte';
	import PollenCard from '$lib/components/PollenCard.svelte';
	import type { PollenReading } from '$lib/types/pollen';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// `override` holds the locally-fetched reading after the user grants
	// geolocation. `reading` falls through to the server-rendered data on
	// navigation, which keeps the homepage and per-location pages in sync.
	let override = $state<PollenReading | null>(null);
	const reading = $derived<PollenReading>(override ?? data.reading);

	let busy = $state(false);
	let geoError = $state<string | null>(null);
	let inflight: AbortController | null = null;

	async function useMyLocation() {
		if (typeof navigator === 'undefined' || !navigator.geolocation) {
			geoError = 'Your browser cannot share location.';
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
		} catch (err) {
			if (err instanceof DOMException && err.name === 'AbortError') return;
			const msg = err instanceof GeolocationPositionError ? geolocationMessage(err.code) : null;
			geoError = msg ?? 'We could not get your location. Try the search instead.';
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
	<title>Is pollen high in {reading.location.name}? | ispollenhigh</title>
	<meta
		name="description"
		content="A straight answer to whether pollen is high in your area today, with a five-day outlook for grass, tree and weed pollen."
	/>
</svelte:head>

<HeroAnswer
	level={reading.overall.level}
	locationName={reading.location.name}
	validFor={reading.validFor}
/>

<section class="cards" aria-label="Pollen by type">
	<PollenCard category="grass" reading={reading.types.grass} />
	<PollenCard category="tree" reading={reading.types.tree} />
	<PollenCard category="weed" reading={reading.types.weed} />
</section>

<ForecastStrip forecast={reading.forecast} />

<GeoActions locationName={reading.location.name} onUseLocation={useMyLocation} {busy} />

{#if geoError}
	<p class="note" role="status">{geoError}</p>
{/if}

{#if reading.source !== 'google'}
	<p class="note muted" role="status">
		Showing {reading.source === 'open-meteo' ? 'CAMS' : 'demo'} data.
	</p>
{/if}

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--sp-3);
	}

	@media (max-width: 720px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	.note {
		margin-top: var(--sp-5);
		font-size: var(--fs-sm);
		color: var(--ink-soft);
	}

	.note.muted {
		color: var(--ink-mute);
	}
</style>
