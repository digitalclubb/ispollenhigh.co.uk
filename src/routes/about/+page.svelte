<svelte:head>
	<title>About ispollenhigh | UK pollen forecast</title>
	<meta
		name="description"
		content="Why ispollenhigh exists, where the data comes from and how to read the forecast."
	/>
	<link rel="canonical" href="https://ispollenhigh.co.uk/about" />
</svelte:head>

<article class="prose">
	<h1>About</h1>

	<p>
		ispollenhigh is a small, fast site that answers one question: is pollen
		high in your area today? It is independent and free to use. There are no
		ads and no upsells.
	</p>

	<h2>Where the data comes from</h2>
	<p>
		Live readings come from the Google Pollen API. Google's pollen
		infrastructure is itself derived from atmospheric models including the
		Copernicus Atmosphere Monitoring Service. When the Google service is
		unavailable we fall back to Open-Meteo, which uses the same CAMS data
		directly.
	</p>
	<p>
		Forecasts are indicative. Local conditions vary by exact location, time of
		day and weather. Use the site as one input alongside how you actually feel.
	</p>

	<h2>How to read the levels</h2>
	<p>
		We split today's reading into grass, tree and weed pollen, then give each
		one a level from <em>none</em> through to <em>very high</em>. Most British
		hayfever is triggered by grass pollen, which peaks from late May through
		July. Tree pollen peaks earlier in spring. Weed pollen runs longest, into
		autumn.
	</p>

	<h2>Who built this</h2>
	<p>
		ispollenhigh is built and run independently. It is not affiliated with the
		Met Office, the NHS or any commercial weather provider. The fast,
		mobile-first design is the point: when you wake up streaming and want a
		straight answer, you should get one in under two seconds.
	</p>

	<h2>Get in touch</h2>
	<p>
		Spotted a problem with a reading or a postcode area? Let us know via the
		<a href="https://github.com/digitalclubb/ispollenhigh.co.uk/issues">project on GitHub</a>.
	</p>
</article>

<style>
	.prose {
		max-width: 60ch;
		margin-block: var(--sp-9) var(--sp-7);
		display: flex;
		flex-direction: column;
		gap: var(--sp-5);
	}

	.prose h1 {
		font-family: var(--font-display);
		font-size: var(--fs-3xl);
		font-weight: var(--weight-display);
		line-height: var(--lh-tight);
		letter-spacing: var(--tracking-tight);
	}

	.prose h2 {
		font-size: var(--fs-lg);
		font-weight: var(--weight-bold);
		margin-top: var(--sp-4);
	}

	.prose p {
		font-size: var(--fs-base);
		line-height: var(--lh-base);
		color: var(--ink-soft);
	}

	.prose a {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
</style>
