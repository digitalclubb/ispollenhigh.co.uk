<script lang="ts">
	import type { Location } from '$lib/data/locations';
	import { locationCopy } from '$lib/data/local-copy';

	type Props = { location: Location };
	let { location }: Props = $props();

	const copy = $derived(locationCopy(location));
</script>

<section class="copy" aria-label="About pollen in this area">
	<p>{copy.intro}</p>
	<p>{copy.species}</p>
	<p>{copy.timing}</p>
	<p class="cross">{copy.cross}</p>
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
</style>
