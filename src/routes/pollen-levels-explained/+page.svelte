<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const canonical = 'https://ispollenhigh.co.uk/pollen-levels-explained';

	const levels = [
		{
			name: 'None',
			value: '0',
			meaning: 'Effectively no pollen of that type in the air. Out of season, or washed out by rain.'
		},
		{
			name: 'Low',
			value: '1',
			meaning: 'Most people notice nothing. Highly sensitive people may get mild symptoms on a long day outdoors.'
		},
		{
			name: 'Moderate',
			value: '2',
			meaning: 'Many allergy sufferers start to react. A good day to take antihistamines before going out rather than after.'
		},
		{
			name: 'High',
			value: '3',
			meaning: 'Most people allergic to that pollen will have symptoms. Windows shut, medication on board.'
		},
		{
			name: 'Very high',
			value: '4',
			meaning: 'Severe symptoms are likely for sufferers, including people who normally cope. Uncommon, and usually a warm, dry, breezy day at the season peak.'
		}
	];
</script>

<svelte:head>
	<title>What does a high pollen count mean? Levels explained | ispollenhigh</title>
	<meta
		name="description"
		content="What low, moderate, high and very high pollen counts actually mean for hay fever symptoms, how the index is measured in grains per cubic metre, and when counts peak during the day."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="What does a high pollen count mean?" />
	<meta
		property="og:description"
		content="Pollen levels explained: what low, moderate, high and very high mean for symptoms."
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<article class="prose">
	<h1>What does a high pollen count mean?</h1>

	<p class="lede">
		A pollen count is a measurement of how many pollen grains are in a cubic
		metre of air. Forecasts turn that number into a level from none to very
		high, because the raw count means little on its own — and the thresholds
		differ for grass, tree and weed pollen.
	</p>

	<h2>The levels</h2>
	<dl class="levels">
		{#each levels as level (level.name)}
			<div class="level">
				<dt>
					{level.name}
					<span class="value">{level.value}/4</span>
				</dt>
				<dd>{level.meaning}</dd>
			</div>
		{/each}
	</dl>

	<h2>What the numbers behind them mean</h2>
	<p>
		For grass pollen, the trigger for the large majority of British hay fever,
		the traditional Met Office bands are roughly: low below 30 grains per cubic
		metre of air, moderate 30–49, high 50–149 and very high 150 or more. Tree
		and weed thresholds sit at different numbers because it takes far more
		nettle pollen than birch pollen to produce the same misery.
	</p>
	<p>
		This site shows a level for each of the three pollen types separately
		rather than a single blended number, because a "moderate" overall day made
		up entirely of grass pollen is a bad day if grass is your trigger, and a
		non-event if it is not.
	</p>

	<h2>Why the count changes through the day</h2>
	<p>
		Pollen is released in the morning and rises with warming air. Counts are
		typically highest in the middle of the morning, drop as the warmest air
		lifts pollen high above head height, then rise again in the early evening
		as the air cools and grains sink back down. Early morning and early evening
		are the two windows to be careful about.
	</p>

	<h2>Weather matters as much as season</h2>
	<p>
		Warm, dry, breezy days give the highest counts. Rain clears pollen from the
		air, and a properly wet day can drop a high count to low. Thunderstorms are
		the exception: the downdraught can concentrate pollen at ground level and
		humidity can rupture grains into finer fragments that reach deeper into the
		airways, which is the mechanism behind so-called thunderstorm asthma.
	</p>

	<h2>How accurate is a pollen forecast?</h2>
	<p>
		It is a model, not a measurement of the air outside your door. Forecasts
		come from atmospheric models fed by monitoring stations, land cover and
		weather, so they describe the general level across an area rather than your
		street. Treat a forecast as a guide to whether today is a take-precautions
		day, alongside how you actually feel. Our data comes from the Google Pollen
		API, which is derived from models including the Copernicus Atmosphere
		Monitoring Service; we are not affiliated with the Met Office.
	</p>

	<h2>Today's levels near you</h2>
	<ul class="links">
		{#each data.cities as city (city.path)}
			<li><a href={city.path}>{city.name}</a></li>
		{/each}
	</ul>

	<p class="more">
		Related: the <a href="/pollen-calendar">UK pollen calendar</a> and
		<a href="/hay-fever-season">when hay fever season starts and ends</a>.
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

	.levels {
		max-width: 60ch;
		margin: 0 0 var(--sp-4);
	}

	.level {
		padding: var(--sp-4) 0;
		border-bottom: 1px solid var(--rule);
	}

	dt {
		font-weight: var(--weight-medium);
		color: var(--ink);
		margin-bottom: var(--sp-1);
	}

	.value {
		font-size: var(--fs-xs);
		color: var(--ink-mute);
		font-weight: var(--weight-regular);
		margin-left: var(--sp-2);
	}

	dd {
		margin: 0;
		color: var(--ink-soft);
		line-height: var(--lh-base);
		font-size: var(--fs-sm);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2) var(--sp-3);
		list-style: none;
		padding: 0;
		margin: 0 0 var(--sp-4);
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
