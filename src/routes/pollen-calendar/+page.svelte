<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const canonical = 'https://ispollenhigh.co.uk/pollen-calendar';
	const levelLabel = ['none', 'low', 'active', 'peak'];

	// The page is prerendered, so "this month" is resolved in the browser.
	// Baking it at build time would leave the wrong column ringed until the
	// next deploy.
	let currentMonth = $state(-1);
	onMount(() => {
		currentMonth = new Date().getMonth();
	});
</script>

<svelte:head>
	<title>UK pollen calendar — when each pollen peaks, month by month | ispollenhigh</title>
	<meta
		name="description"
		content="A month-by-month UK pollen calendar for tree, grass and weed pollen, with how the season shifts between southern England, the Midlands, the north and Scotland."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="UK pollen calendar — when each pollen peaks" />
	<meta
		property="og:description"
		content="Month-by-month tree, grass and weed pollen for every part of the UK."
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<article class="prose">
	<h1>UK pollen calendar</h1>

	<p class="lede">
		Three different pollens cause British hay fever, and they arrive in
		sequence rather than all at once. Knowing which one is in season explains
		why you can sneeze through April and be fine in July, or the other way
		round.
	</p>

	<h2>The three pollen seasons</h2>
	<p>
		<strong>Tree pollen</strong> comes first. Alder and hazel can start in late
		February, ash and plane follow, and birch — the strongest tree trigger in
		Britain — peaks through April. Tree season is largely over by the end of
		May.
	</p>
	<p>
		<strong>Grass pollen</strong> is the big one. Around 95% of UK hay fever
		sufferers react to grass, and it runs from mid-May to late July with a
		peak in June and early July. There are usually two waves: the main one in
		June, and a lighter second flowering in July.
	</p>
	<p>
		<strong>Weed pollen</strong> is last and longest. Nettle, dock, mugwort and
		plantain run from June into September, and in a mild autumn can persist
		into October.
	</p>

	<h2>How the season shifts north</h2>
	<p>
		Pollen seasons start later and finish later the further north you go. The
		gap between the south coast and central Scotland is roughly a fortnight,
		which is why a Kent hay fever sufferer can be past the worst of the grass
		season while Aberdeen is only just starting.
	</p>

	{#each data.bands as band (band.label)}
		<section class="band">
			<h3>{band.label}</h3>
			<p class="band-note">
				Covers {band.blurb}. Season runs roughly {band.overall}.
			</p>
			<div class="scroller">
				<table>
					<caption class="visually-hidden">
						Pollen calendar for {band.label}, January to December.
					</caption>
					<thead>
						<tr>
							<th scope="col">Pollen</th>
							{#each data.months as month (month)}
								<th scope="col">{month}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each band.rows as row (row.kind)}
							<tr>
								<th scope="row">{row.label}</th>
								{#each row.values as value, i (data.months[i])}
									<td
										class="cell level-{value}"
										class:current={i === currentMonth}
										title="{row.label} in {data.months[i]}: {levelLabel[value]}"
									>
										<span class="visually-hidden">
											{data.months[i]}: {levelLabel[value]}
										</span>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	{/each}

	<h2>What makes a bad pollen day</h2>
	<p>
		Within the season, the day-to-day count is driven by the weather. Warm, dry
		and breezy days lift pollen into the air and carry it a long way; heavy
		rain washes it out, though a thunderstorm can briefly make things worse by
		bursting grains into smaller, more irritating fragments. Counts are usually
		highest in the morning as pollen is released, dip in the middle of the day,
		then rise again in the early evening as air cools and pollen settles back
		to nose height.
	</p>

	<h2>Check your own area</h2>
	<p>
		The calendar above is the pattern. For today's actual numbers, pick your
		forecast region — each one lists every town inside it — or
		<a href="/locations">browse all the areas we cover</a>.
	</p>
	<ul class="links">
		{#each data.regions as region (region.path)}
			<li><a href={region.path}>{region.name}</a></li>
		{/each}
	</ul>

	<p class="more">
		Related: <a href="/hay-fever-season">when hay fever season starts and ends</a>
		and <a href="/pollen-levels-explained">what a high pollen count actually means</a>.
	</p>
</article>

<style>
	.prose {
		max-width: var(--content-width);
		margin-inline: auto;
		padding: var(--sp-7) var(--gutter) var(--sp-6);
	}

	h1 {
		font-family: var(--font-display);
		font-size: var(--fs-2xl);
		line-height: var(--lh-tight);
		margin-bottom: var(--sp-4);
	}

	h2 {
		font-size: var(--fs-lg);
		margin: var(--sp-7) 0 var(--sp-3);
	}

	h3 {
		font-size: var(--fs-md);
		margin-bottom: var(--sp-2);
	}

	p {
		max-width: 60ch;
		line-height: var(--lh-base);
		color: var(--ink-soft);
		margin-bottom: var(--sp-4);
	}

	.lede {
		font-size: var(--fs-md);
		color: var(--ink);
	}

	.band {
		padding-top: var(--sp-5);
		margin-top: var(--sp-5);
		border-top: 1px solid var(--rule);
	}

	.band-note {
		font-size: var(--fs-sm);
		color: var(--ink-mute);
	}

	.scroller {
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		min-width: 30rem;
	}

	th {
		font-size: var(--fs-xs);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		text-align: left;
		padding: var(--sp-1) var(--sp-2) var(--sp-2);
		white-space: nowrap;
	}

	tbody th {
		padding-right: var(--sp-3);
		color: var(--ink-soft);
	}

	.cell {
		height: 1.5rem;
		border: 1px solid var(--paper);
		border-radius: var(--radius-sm);
		background: var(--paper-warm);
	}

	.level-1 {
		background: var(--level-low-bg);
	}

	.level-2 {
		background: var(--level-moderate-bg);
	}

	.level-3 {
		background: var(--level-high-bg);
	}

	.cell.current {
		outline: 2px solid var(--ink);
		outline-offset: -2px;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2) var(--sp-3);
		list-style: none;
		padding: 0;
		margin: 0 0 var(--sp-5);
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

	.links a:hover,
	.links a:focus-visible {
		border-color: var(--ink-mute);
	}

	.more {
		font-size: var(--fs-sm);
		color: var(--ink-mute);
	}

	a {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
</style>
