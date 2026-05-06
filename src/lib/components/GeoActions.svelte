<script lang="ts">
	type Props = {
		locationName: string;
		onUseLocation: () => void;
		busy: boolean;
	};

	let { locationName, onUseLocation, busy }: Props = $props();
</script>

<section class="geo">
	<p class="current">
		Showing pollen for <strong>{locationName}</strong>.
	</p>

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
		color: var(--ink-mute);
		font-size: var(--fs-sm);
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
