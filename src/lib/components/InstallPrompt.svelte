<script lang="ts">
	import { onMount } from 'svelte';

	type BeforeInstallPromptEvent = Event & {
		prompt: () => Promise<void>;
		userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
	};

	let deferred = $state<BeforeInstallPromptEvent | null>(null);
	let dismissed = $state(false);

	onMount(() => {
		const onBefore = (e: Event) => {
			e.preventDefault();
			deferred = e as BeforeInstallPromptEvent;
		};
		const onInstalled = () => {
			deferred = null;
		};
		try {
			dismissed = localStorage.getItem('install_dismissed') === '1';
		} catch {
			// Storage may be denied. Treat as not dismissed.
		}
		window.addEventListener('beforeinstallprompt', onBefore);
		window.addEventListener('appinstalled', onInstalled);
		return () => {
			window.removeEventListener('beforeinstallprompt', onBefore);
			window.removeEventListener('appinstalled', onInstalled);
		};
	});

	async function install() {
		if (!deferred) return;
		await deferred.prompt();
		const { outcome } = await deferred.userChoice;
		deferred = null;
		if (outcome === 'dismissed') remember();
	}

	function dismiss() {
		dismissed = true;
		remember();
	}

	function remember() {
		try {
			localStorage.setItem('install_dismissed', '1');
		} catch {
			// Ignore storage failure.
		}
	}
</script>

{#if deferred && !dismissed}
	<aside class="prompt" aria-label="Install ispollenhigh">
		<p>Install ispollenhigh for one-tap access. Works offline with your last reading.</p>
		<div class="actions">
			<button type="button" class="btn primary" onclick={install}>Install</button>
			<button type="button" class="btn ghost" onclick={dismiss}>Not now</button>
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
		box-shadow: 0 12px 32px rgb(15 20 16 / 0.16);
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
		min-height: 2.5rem;
		padding-inline: var(--sp-4);
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
		background: rgb(250 247 242 / 0.12);
	}
</style>
