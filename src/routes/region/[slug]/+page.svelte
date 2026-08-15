<script lang="ts">
	import LocationView from '$lib/components/LocationView.svelte';
	import RegionChildren from '$lib/components/RegionChildren.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<LocationView
	reading={data.reading}
	name={data.name}
	canonical={data.canonical}
	jsonLd={data.jsonLd}
	copy={data.copy}
	calendar={data.calendar}
	nearby={data.nearby}
>
	<RegionChildren
		regionName={data.name}
		cities={data.children.cities}
		towns={data.children.towns}
		postcodeAreas={data.children.postcodeAreas}
	/>
</LocationView>
