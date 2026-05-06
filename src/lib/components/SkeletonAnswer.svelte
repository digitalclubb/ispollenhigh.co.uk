<script lang="ts">
	// Stand-in for AnswerView while the real reading is loading. Matches the
	// dimensions of the live layout (hero padding, card min-height, forecast
	// tab height) so the swap doesn't cause a visible jump.
</script>

<div role="status" aria-busy="true" aria-hidden="true" class="panel">
	<!--
		No visible or visually-hidden text content here: a Googlebot snapshot
		taken during the brief skeleton state should not surface "Loading..."
		strings instead of the answer. aria-busy + aria-hidden tell assistive
		tech to ignore this placeholder; the AnswerView (rendered alongside
		this in the DOM) carries the announceable content via its own
		aria-live region.
	-->
	<header class="hero">
		<p class="kicker">
			<span class="bar bar-kicker"></span>
			<span class="dot" aria-hidden="true"></span>
			<span class="bar bar-kicker bar-kicker-short"></span>
		</p>
		<div class="lines">
			<span class="bar bar-h1"></span>
			<span class="bar bar-h1 bar-h1-short"></span>
		</div>
	</header>

	<section class="cards" aria-hidden="true">
		<div class="card-skel">
			<div class="bar bar-card-title"></div>
			<div class="bar bar-card-numeral"></div>
			<div class="bar bar-card-species"></div>
		</div>
		<div class="card-skel">
			<div class="bar bar-card-title"></div>
			<div class="bar bar-card-numeral"></div>
			<div class="bar bar-card-species"></div>
		</div>
		<div class="card-skel">
			<div class="bar bar-card-title"></div>
			<div class="bar bar-card-numeral"></div>
			<div class="bar bar-card-species"></div>
		</div>
	</section>
</div>

<div class="forecast-skel" aria-hidden="true">
	<div class="tab-skel"></div>
	<div class="tab-skel"></div>
	<div class="tab-skel"></div>
	<div class="tab-skel"></div>
	<div class="tab-skel"></div>
</div>

<style>
	.panel {
		outline: none;
	}

	.hero {
		padding-block: clamp(var(--sp-7), 8vw, var(--sp-9)) var(--sp-6);
	}

	.kicker {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--sp-3);
		margin-bottom: var(--sp-5);
	}

	.dot {
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--ink-mute);
		opacity: 0.4;
	}

	.lines {
		display: flex;
		flex-direction: column;
		gap: var(--sp-3);
	}

	.bar {
		display: block;
		background: var(--rule);
		border-radius: var(--radius-sm);
		animation: skel-pulse 1.6s ease-in-out infinite;
	}

	.bar-kicker {
		width: 9ch;
		height: 0.875rem;
	}
	.bar-kicker-short {
		width: 7ch;
	}

	.bar-h1 {
		height: clamp(2.75rem, 9vw, 6rem);
		border-radius: var(--radius-md);
	}
	.bar-h1 {
		width: min(14ch, 90%);
	}
	.bar-h1-short {
		width: min(9ch, 65%);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--sp-3);
	}

	.card-skel {
		display: flex;
		flex-direction: column;
		gap: var(--sp-3);
		padding: var(--sp-5);
		border-radius: var(--radius-lg);
		background: var(--level-none-bg);
		min-height: 14rem;
	}

	.bar-card-title {
		width: 55%;
		height: 1rem;
		background: var(--paper-warm);
	}

	.bar-card-numeral {
		width: 45%;
		height: 4.5rem;
		background: var(--paper-warm);
		margin-block: auto var(--sp-2);
	}

	.bar-card-species {
		width: 75%;
		height: 0.875rem;
		background: var(--paper-warm);
	}

	.forecast-skel {
		display: flex;
		gap: var(--sp-3);
		margin-top: var(--sp-6);
		overflow: hidden;
	}

	.tab-skel {
		flex: 1;
		min-width: 0;
		min-height: 8.5rem;
		border-radius: var(--radius-md);
		background: var(--paper-warm);
		animation: skel-pulse 1.6s ease-in-out infinite;
	}

	@media (max-width: 720px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	@keyframes skel-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.55;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bar,
		.tab-skel {
			animation: none;
		}
	}
</style>
