<script lang="ts">
	import LocationView from '$lib/components/LocationView.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<LocationView reading={data.reading} location={data.location} />
