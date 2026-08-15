<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const canonical = 'https://ispollenhigh.co.uk/hay-fever-season';
</script>

<svelte:head>
	<title>When does hay fever season start and end in the UK? | ispollenhigh</title>
	<meta
		name="description"
		content="Hay fever season in the UK runs from late February to September. When each pollen starts, when it peaks, why it is later in the north and what to expect month by month."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="When does hay fever season start and end in the UK?" />
	<meta
		property="og:description"
		content="Tree, grass and weed pollen dates for the UK and how they shift from Cornwall to the Highlands."
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<article class="prose">
	<h1>When does hay fever season start and end?</h1>

	<p class="lede">
		In the UK the pollen season runs from late February to September. But
		"hay fever season" is really three overlapping seasons. Which one affects
		you decides when your bad months are.
	</p>

	<h2>The short answer</h2>
	<ul class="facts">
		<li><strong>Tree pollen:</strong> late February to May, peaking in April.</li>
		<li><strong>Grass pollen:</strong> mid-May to July, peaking in June and early July.</li>
		<li><strong>Weed pollen:</strong> June to September, sometimes into October.</li>
	</ul>
	<p>
		Those dates are the pattern, not a promise: the season shifts by a week or
		two each year with the weather. Check
		<a href="/locations">your own area</a> for today's live count.
	</p>

	<h2>Why your season might be shorter than the calendar</h2>
	<p>
		Most people are allergic to one pollen, not all three. Around 95% of UK
		sufferers react to grass, which is why June is the month everyone
		complains about. A smaller group reacts to birch and other tree pollen and
		gets a sharp few weeks in April instead. Weed allergy is less common but
		drags on longest, which is why some people are still sneezing in September
		when everyone else has stopped.
	</p>
	<p>
		If your symptoms start in early spring and clear by May, trees are the
		likely trigger. If they arrive with the first properly warm week of summer,
		it is grass. If they run late into autumn, weeds are involved.
	</p>

	<h2>It starts later in the north</h2>
	<p>
		Everything above is a fortnight or so later in Scotland than on the south
		coast and the season is shorter. A grass season that opens in mid-May in
		Kent may not really get going until early June around Glasgow or Inverness,
		and it winds down sooner.
	</p>

	<h2>When is it worst?</h2>
	<p>
		Mid-June to mid-July, for most people, in most of the UK. That is when
		grass pollen peaks and it often overlaps with the start of the weed season.
		Within those weeks, warm dry breezy days are the bad ones and wet days are
		a reprieve. The count can swing from low to very high and back inside a
		week.
	</p>

	<h2>Does hay fever season ever fully stop?</h2>
	<p>
		Between November and January, airborne pollen is close to zero across the
		UK. Symptoms in those months are more likely to come from dust mites, mould
		spores or pets than from pollen. Mould spores in particular peak in damp
		autumn weather and are often mistaken for late hay fever.
	</p>

	<h2>Check the count where you are</h2>
	<p>
		Dates are averages; the actual season shifts a week or two each year with
		the weather. These pages carry today's real numbers:
	</p>
	<ul class="links">
		{#each data.cities as city (city.path)}
			<li><a href={city.path}>{city.name}</a></li>
		{/each}
	</ul>
	<ul class="links muted">
		{#each data.regions as region (region.path)}
			<li><a href={region.path}>{region.name}</a></li>
		{/each}
	</ul>

	<p class="more">
		Related: the <a href="/pollen-calendar">month-by-month UK pollen calendar</a>
		and <a href="/pollen-levels-explained">what a high pollen count means</a>.
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

	.facts {
		max-width: 60ch;
		margin: 0 0 var(--sp-4);
		padding-left: var(--sp-5);
		color: var(--ink-soft);
		line-height: var(--lh-base);
	}

	.facts li {
		margin-bottom: var(--sp-2);
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

	.links.muted a {
		color: var(--ink-soft);
		font-weight: var(--weight-regular);
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
