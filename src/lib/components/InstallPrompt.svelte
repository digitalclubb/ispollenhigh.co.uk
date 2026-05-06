<script lang="ts">
	import { onMount } from 'svelte';
	import { answerHasRendered } from '$lib/state/install-prompt.svelte';

	type BeforeInstallPromptEvent = Event & {
		prompt: () => Promise<void>;
		userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
	};

	const VISIT_KEY = 'iph_visited_at';
	const DISMISS_KEY = 'iph_install_dismissed_at';
	// Re-prompt after 30 days. Pollen sufferers come and go through the season.
	const DISMISS_TTL_MS = 30 * 24 * 60 * 60 * 1000;

	let deferred = $state<BeforeInstallPromptEvent | null>(null);
	let dismissed = $state(true);
	let visitedBefore = $state(false);

	onMount(() => {
		const onBefore = (e: Event) => {
			e.preventDefault();
			deferred = e as BeforeInstallPromptEvent;
		};
		const onInstalled = () => {
			deferred = null;
		};

		try {
			const lastDismiss = Number(localStorage.getItem(DISMISS_KEY) ?? '0');
			dismissed = lastDismiss > 0 && Date.now() - lastDismiss < DISMISS_TTL_MS;
			visitedBefore = localStorage.getItem(VISIT_KEY) !== null;
			localStorage.setItem(VISIT_KEY, String(Date.now()));
		} catch {
			dismissed = false;
			visitedBefore = false;
		}

		window.addEventListener('beforeinstallprompt', onBefore);
		window.addEventListener('appinstalled', onInstalled);
		return () => {
			window.removeEventListener('beforeinstallprompt', onBefore);
			window.removeEventListener('appinstalled', onInstalled);
		};
	});

	const visible = $derived(
		deferred !== null && !dismissed && visitedBefore && answerHasRendered()
	);

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
			localStorage.setItem(DISMISS_KEY, String(Date.now()));
		} catch {
			// Ignore storage failure.
		}
	}
</script>

{#if visible}
	<aside class="prompt" aria-label="Install ispollenhigh">
		<p>Install ispollenhigh for one-tap access. Works offline with your last reading.</p>
		<div class="actions">
			<button type="button" class="btn primary" onclick={install}>Install</button>
			<button
				type="button"
				class="btn ghost"
				onclick={dismiss}
				aria-label="Dismiss install prompt"
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
		/* 2.75rem (44px) hits the WCAG 2.5.8 minimum target size. */
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
