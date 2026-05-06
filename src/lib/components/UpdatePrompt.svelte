<script lang="ts">
	import { onMount } from 'svelte';

	/**
	 * Shows a small, dismissible banner when the service worker activates a
	 * new version of the app. Without this, users see HTML cached from the
	 * previous deploy until they happen to navigate or refresh.
	 *
	 * Only fires when the controller *changes* (an existing SW is replaced),
	 * not on first install. The first-install case is the user just arriving
	 * for the first time and there's nothing to update.
	 */

	let visible = $state(false);

	onMount(() => {
		if (typeof navigator === 'undefined' || !navigator.serviceWorker) return;

		const hadController = navigator.serviceWorker.controller !== null;

		const onChange = () => {
			if (hadController) visible = true;
		};

		navigator.serviceWorker.addEventListener('controllerchange', onChange);
		return () => navigator.serviceWorker.removeEventListener('controllerchange', onChange);
	});

	function refresh() {
		location.reload();
	}

	function dismiss() {
		visible = false;
	}
</script>

{#if visible}
	<aside class="prompt" aria-label="Site updated">
		<p>A new version of ispollenhigh is ready.</p>
		<div class="actions">
			<button type="button" class="btn primary" onclick={refresh}>Refresh</button>
			<button
				type="button"
				class="btn ghost"
				onclick={dismiss}
				aria-label="Dismiss update notice"
			>
				Not now
			</button>
		</div>
	</aside>
{/if}

<style>
	.prompt {
		position: fixed;
		left: var(--gutter);
		right: var(--gutter);
		bottom: var(--gutter);
		max-width: 28rem;
		margin-inline: auto;
		padding: var(--sp-4) var(--sp-5);
		background: var(--ink);
		color: var(--paper);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-strong);
		z-index: var(--z-modal);
	}

	.prompt p {
		margin: 0 0 var(--sp-3);
		font-size: var(--fs-sm);
		line-height: var(--lh-base);
	}

	.actions {
		display: flex;
		gap: var(--sp-2);
	}

	.btn {
		min-height: 2.75rem;
		padding: var(--sp-2) var(--sp-4);
		border-radius: var(--radius-md);
		border: 1px solid var(--paper);
		background: var(--paper);
		color: var(--ink);
		font-weight: var(--weight-medium);
		font-size: var(--fs-sm);
		cursor: pointer;
	}

	.btn.primary:hover,
	.btn.primary:focus-visible {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--paper);
	}

	.btn.ghost {
		background: transparent;
		color: var(--paper);
	}

	.btn.ghost:hover,
	.btn.ghost:focus-visible {
		background: color-mix(in srgb, var(--paper) 12%, transparent);
	}
</style>
