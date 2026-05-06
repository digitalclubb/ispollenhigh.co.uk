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
		If you tap "Use my exact location" your browser passes coordinates to the
		page. Those coordinates are rounded to roughly five kilometres and sent to
		our edge function so it can call the pollen API. We do not store them, log
		them with anything that identifies you or pass them to anyone except the
		pollen provider.
	</p>
	<p>
		If you do not share location, our server reads your approximate area from
		the geolocation headers that Vercel attaches to your request. We use that
		to render the homepage answer once. We do not store it.
	</p>

	<h2>Analytics</h2>
	<p>
		We use Vercel Web Analytics in cookieless mode. It records anonymous
		aggregate counts of page views and the pages people land on. It does not
		set cookies, does not use device fingerprinting and does not send anything
		to advertisers.
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
