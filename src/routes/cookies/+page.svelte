<svelte:head>
	<title>Cookies | ispollenhigh</title>
	<meta
		name="description"
		content="What ispollenhigh stores in your browser. The short answer is no cookies."
	/>
	<link rel="canonical" href="https://ispollenhigh.co.uk/cookies" />
</svelte:head>

<article class="prose">
	<h1>Cookies</h1>

	<p>
		ispollenhigh does not set cookies. We use Vercel Web Analytics and Vercel
		Speed Insights, both in cookieless mode. We do not run any other tracking.
		That is the whole story but the rest of this page exists so you can verify
		it.
	</p>

	<h2>What we store on your device</h2>
	<p>
		The only browser storage we use is local storage and a service worker
		cache. Both stay on your device and are never sent to our servers.
	</p>

	<table>
		<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Where</th>
				<th scope="col">Why</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>iph_visited_at</td>
				<td>localStorage</td>
				<td>Records the timestamp of your last visit so the install prompt does not appear on a first visit.</td>
			</tr>
			<tr>
				<td>iph_install_dismissed_at</td>
				<td>localStorage</td>
				<td>Set when you tap "Not now" so we do not nag you. Cleared after 30 days so you get a fresh chance.</td>
			</tr>
			<tr>
				<td>iph_geo_dismissed</td>
				<td>localStorage</td>
				<td>Set if you decline the browser's location prompt, so we don't ask again on the next visit.</td>
			</tr>
			<tr>
				<td>shell-* and runtime-* caches</td>
				<td>Service worker</td>
				<td>Hold the page shell, your last reading and an offline fallback. They make the site usable when you are offline.</td>
			</tr>
		</tbody>
	</table>

	<h2>Clearing the data</h2>
	<p>
		You can clear local storage and the service worker cache from your
		browser's site settings. Doing so resets the install prompt and removes
		any offline copies.
	</p>

	<h2>Third parties</h2>
	<p>
		We do not embed third-party widgets, ads or trackers. The only external
		network calls the site makes are to the pollen data provider (server
		side, on the edge function) and to Vercel Web Analytics and Speed
		Insights. Both Vercel products are cookieless and proxy through paths
		on this domain rather than calling third-party hosts directly.
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

	.prose p,
	.prose td,
	.prose th {
		font-size: var(--fs-sm);
		line-height: var(--lh-base);
		color: var(--ink-soft);
	}

	.prose table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--fs-sm);
	}

	.prose th,
	.prose td {
		text-align: left;
		padding: var(--sp-3);
		border-bottom: 1px solid var(--rule);
		vertical-align: top;
	}

	.prose th {
		font-weight: var(--weight-bold);
		color: var(--ink);
	}
</style>
