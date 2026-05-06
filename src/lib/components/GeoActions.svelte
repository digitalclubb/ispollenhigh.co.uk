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

	<div class="actions">
		<button type="button" class="btn primary" disabled={busy} onclick={onUseLocation}>
			{busy ? 'Locating…' : 'Use my exact location'}
		</button>

		<form action="/q" method="get" class="search">
			<label for="postcode-search" class="visually-hidden">Postcode or town</label>
			<input
				id="postcode-search"
				name="postcode"
				type="search"
				placeholder="Postcode or town"
				autocomplete="postal-code"
				inputmode="text"
				maxlength="20"
				required
			/>
			<button type="submit" class="btn">Check</button>
		</form>
	</div>
</section>

<style>
	.geo {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
		display: flex;
		flex-direction: column;
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

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-3);
		align-items: stretch;
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
		transition: background var(--ease-quick), color var(--ease-quick);
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

	.search {
		display: flex;
		flex-grow: 1;
		max-width: 28rem;
		gap: var(--sp-2);
	}

	input[type='search'] {
		flex: 1;
		min-width: 0;
		padding: var(--sp-2) var(--sp-4);
		border: 1px solid var(--rule);
		border-radius: var(--radius-md);
		background: var(--paper);
		font-size: var(--fs-base);
	}

	input[type='search']:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-offset);
		border-color: var(--ink);
	}
</style>
