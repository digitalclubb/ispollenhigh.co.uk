<script lang="ts">
	type Props = {
		locationName: string;
		onUseLocation: () => void;
		busy: boolean;
		/**
		 * True when the location was inferred from the request IP rather than
		 * the user granting browser geolocation. We surface this so users
		 * understand why the answer might be for the wrong area.
		 */
		approximate?: boolean;
	};

	let { locationName, onUseLocation, busy, approximate = false }: Props = $props();
</script>

<section class="geo">
	<div class="current">
		<p>
			Showing pollen for <strong>{locationName}</strong>.
		</p>
		{#if approximate}
			<p class="caveat">
				This is approximate, based on your network. Tap below for your exact area.
			</p>
		{/if}
	</div>

	<button
		type="button"
		class="btn primary"
		disabled={busy}
		aria-busy={busy}
		aria-live="polite"
		onclick={onUseLocation}
	>
		{busy ? 'Locating…' : 'Use my exact location'}
	</button>
</section>

<style>
	.geo {
		margin-top: var(--sp-6);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--sp-4);
	}

	.current {
		display: flex;
		flex-direction: column;
		gap: var(--sp-1);
	}

	.current p {
		color: var(--ink-mute);
		font-size: var(--fs-sm);
	}

	.caveat {
		font-style: italic;
	}

	strong {
		color: var(--ink);
		font-weight: var(--weight-medium);
	}

	.btn {
		min-height: 2.75rem;
		padding-inline: var(--sp-4);
		border-radius: var(--radius-md);
		border: 1px solid var(--ink);
		background: var(--paper);
		color: var(--ink);
		font-weight: var(--weight-medium);
		font-size: var(--fs-sm);
		cursor: pointer;
		transition:
			background var(--ease-quick),
			color var(--ease-quick);
	}

	.btn:hover,
	.btn:focus-visible {
		background: var(--ink);
		color: var(--paper);
	}

	.btn.primary {
		background: var(--ink);
		color: var(--paper);
	}

	.btn.primary:hover,
	.btn.primary:focus-visible {
		background: var(--accent);
		border-color: var(--accent);
	}

	.btn[disabled] {
		opacity: 0.6;
		cursor: progress;
	}
</style>
