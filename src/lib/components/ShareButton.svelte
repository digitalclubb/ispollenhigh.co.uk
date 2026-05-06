<script lang="ts">
	type Props = {
		title: string;
		url: string;
	};

	let { title, url }: Props = $props();

	let status = $state<'idle' | 'copied' | 'error'>('idle');
	let busy = $state(false);

	async function handle() {
		busy = true;
		try {
			// `handle` is only ever wired up via `onclick`, which is client-side
			// only, so `navigator` is defined here. navigator.share is typed
			// optional in lib.dom (not all browsers support it).
			if (navigator.share) {
				await navigator.share({ title, url });
				return;
			}
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(url);
				status = 'copied';
				setTimeout(() => (status = 'idle'), 2200);
				return;
			}
			status = 'error';
		} catch (err) {
			// User cancelled the share sheet, or clipboard denied. Treat
			// AbortError as silent; everything else surfaces a soft error.
			if (err instanceof DOMException && err.name === 'AbortError') return;
			status = 'error';
			setTimeout(() => (status = 'idle'), 2200);
		} finally {
			busy = false;
		}
	}
</script>

<div class="share">
	<button type="button" class="btn" onclick={handle} disabled={busy} aria-busy={busy}>
		<span aria-hidden="true">→</span>
		<span>Share this forecast</span>
	</button>
	<span class="status" role="status" aria-live="polite">
		{status === 'copied' ? 'Link copied to clipboard.' : status === 'error' ? 'Could not share.' : ''}
	</span>
</div>

<style>
	.share {
		display: inline-flex;
		align-items: center;
		gap: var(--sp-3);
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--sp-2);
		min-height: 2.75rem;
		padding: var(--sp-2) var(--sp-4);
		border-radius: var(--radius-md);
		border: 1px solid var(--rule);
		background: var(--paper);
		color: var(--ink);
		font-weight: var(--weight-medium);
		font-size: var(--fs-sm);
		cursor: pointer;
		transition:
			background var(--ease-quick),
			border-color var(--ease-quick),
			color var(--ease-quick);
	}

	.btn:hover,
	.btn:focus-visible {
		background: var(--ink);
		color: var(--paper);
		border-color: var(--ink);
	}

	.btn[disabled] {
		opacity: 0.6;
		cursor: progress;
	}

	.btn span:first-child {
		font-size: 1.1em;
		line-height: 1;
		transform: rotate(-45deg);
		display: inline-block;
	}

	.status {
		font-size: var(--fs-sm);
		color: var(--ink-mute);
	}
</style>
