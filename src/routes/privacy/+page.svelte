<svelte:head>
	<title>Privacy | ispollenhigh</title>
	<meta name="description" content="What ispollenhigh stores about you. The short answer is nothing personal." />
	<link rel="canonical" href="https://ispollenhigh.co.uk/privacy" />
</svelte:head>

<article class="prose">
	<h1>Privacy</h1>

	<p>
		ispollenhigh is built to give you a fast answer without learning who you
		are. We do not run any third-party trackers, advertising pixels or
		fingerprinting scripts. The detail below is here so you can verify that.
	</p>

	<h2>Location</h2>
	<p>
		When you visit the homepage, your browser is asked whether to share your
		location. This is so the answer above the fold matches where you actually
		are rather than where your network address resolves to. If you allow it,
		your coordinates are rounded to roughly five kilometres and sent to our
		edge function so it can call the pollen API. We do not store them, log
		them with anything that identifies you or pass them to anyone except the
		pollen provider.
	</p>
	<p>
		If you decline, we use a rough city-level guess from your network address
		instead. We use that to render the homepage answer once and then we do
		not store it. We also remember your decline locally so we won't ask again
		on future visits.
	</p>
	<p>
		Per-location pages like /london or /sw never trigger the location
		prompt. Those pages are explicit about which area they cover.
	</p>

	<h2>Analytics</h2>
	<p>
		We use Vercel Web Analytics and Vercel Speed Insights, both in cookieless
		mode. Web Analytics records anonymous aggregate counts of page views and
		the pages people land on. Speed Insights collects anonymous Core Web
		Vitals (loading speed, layout stability, interaction responsiveness) so
		we can keep the site fast. Neither sets cookies, neither uses device
		fingerprinting and neither sends anything to advertisers.
	</p>

	<h2>Data we never collect</h2>
	<ul>
		<li>Your name, email or any account details</li>
		<li>A persistent identifier across visits</li>
		<li>Device fingerprints</li>
		<li>Anything for advertising purposes</li>
	</ul>

	<h2>Stored on your device</h2>
	<p>
		To respect your install-prompt preferences we store a single timestamp in
		your browser's local storage when you tap "Not now". That value never
		leaves your device. If you install ispollenhigh as an app, the service
		worker also caches pages and the last reading on your device so it works
		offline. You can clear all of this from your browser settings at any time.
	</p>

	<h2>Your rights under UK GDPR</h2>
	<p>
		Because we do not hold personal data tied to you, there is no record we
		could return, correct or delete. If you want confirmation in writing,
		contact us via the
		<a href="https://github.com/digitalclubb/ispollenhigh.co.uk/issues">project on GitHub</a>.
	</p>

	<h2>Changes</h2>
	<p>
		If we change anything about how we handle data, this page changes first.
		Last updated 6 May 2026.
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
	.prose li {
		font-size: var(--fs-base);
		line-height: var(--lh-base);
		color: var(--ink-soft);
	}

	.prose ul {
		padding-left: var(--sp-5);
		display: flex;
		flex-direction: column;
		gap: var(--sp-2);
	}

	.prose a {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
</style>
