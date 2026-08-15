<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LocationType } from '$lib/data/locations';
	import { getCanonicalPath } from '$lib/data/paths';
	import type * as Resolve from '$lib/utils/resolve';

	type Props = {
		placeholder?: string;
	};

	let { placeholder = 'Postcode or town' }: Props = $props();

	const listboxId = 'search-listbox';
	const statusId = 'search-status';

	let comboboxEl: HTMLDivElement | undefined = $state();
	let inputEl: HTMLInputElement | undefined = $state();
	let query = $state('');
	let highlighted = $state(-1);
	let open = $state(false);

	/**
	 * The search index covers ~1,240 places (14 kB gzipped), so it is fetched
	 * on first interaction rather than on every page load. Until it arrives
	 * the input still works: the form posts to /q, which resolves server-side.
	 */
	let resolver = $state<typeof Resolve | null>(null);
	let loading = false;

	async function loadResolver(): Promise<void> {
		if (resolver || loading) return;
		loading = true;
		try {
			resolver = await import('$lib/utils/resolve');
		} finally {
			loading = false;
		}
	}

	const matches = $derived(
		resolver && query.trim().length > 0 ? resolver.suggestLocations(query, 6) : []
	);

	/**
	 * Open the listbox when the index finishes loading. Without this, someone
	 * who types their whole query (or pastes it) before the chunk arrives gets
	 * no suggestions at all until they press another key: `onInput` ran while
	 * `matches` was still empty and left `open` false.
	 */
	$effect(() => {
		if (resolver && matches.length > 0 && highlighted < 0 && document.activeElement === inputEl) {
			open = true;
			highlighted = 0;
		}
	});

	const status = $derived.by(() => {
		const trimmed = query.trim();
		if (trimmed.length === 0) return '';
		if (matches.length === 0) return 'No matches.';
		const first = matches[0];
		if (matches.length === 1 && first) return `1 match. Top: ${first.name}.`;
		return first ? `${matches.length} matches. Top: ${first.name}.` : `${matches.length} matches.`;
	});

	function typeLabel(t: LocationType): string {
		if (t === 'city') return 'City';
		if (t === 'town') return 'Town';
		if (t === 'postcode-area') return 'Postcode area';
		return 'Region';
	}

	function onInput() {
		loadResolver();
		open = matches.length > 0;
		highlighted = matches.length > 0 ? 0 : -1;
	}

	function onFocus() {
		// Warm the index the moment the box is focused, so the first
		// keystroke usually has suggestions ready.
		loadResolver();
		if (matches.length > 0) open = true;
	}

	function onBlur(e: FocusEvent) {
		// If focus moved into the listbox, stay open. Otherwise close.
		const next = e.relatedTarget;
		if (next instanceof Node && comboboxEl?.contains(next)) return;
		open = false;
	}

	function pick(idx: number) {
		const loc = matches[idx];
		if (!loc) return;
		query = loc.name;
		open = false;
		goto(getCanonicalPath(loc));
	}

	function onKeydown(e: KeyboardEvent) {
		const total = matches.length;

		if (e.key === 'ArrowDown') {
			if (total === 0) return;
			e.preventDefault();
			open = true;
			highlighted = highlighted < 0 ? 0 : (highlighted + 1) % total;
		} else if (e.key === 'ArrowUp') {
			if (total === 0) return;
			e.preventDefault();
			open = true;
			highlighted = highlighted <= 0 ? total - 1 : highlighted - 1;
		} else if (e.key === 'Home') {
			if (total === 0 || !open) return;
			e.preventDefault();
			highlighted = 0;
		} else if (e.key === 'End') {
			if (total === 0 || !open) return;
			e.preventDefault();
			highlighted = total - 1;
		} else if (e.key === 'Enter') {
			if (open && highlighted >= 0 && matches[highlighted]) {
				e.preventDefault();
				pick(highlighted);
				return;
			}
			const hit = resolver?.resolveLocation(query);
			if (hit) {
				e.preventDefault();
				goto(getCanonicalPath(hit));
			}
			// Otherwise (including "index not loaded yet"): let the form
			// submit to /q, which resolves server-side and 308s.
		} else if (e.key === 'Escape') {
			if (!open) return;
			e.preventDefault();
			open = false;
			highlighted = -1;
		}
	}
</script>

<form action="/q" method="get" class="search" role="search">
	<label for="search-input" class="visually-hidden">Postcode, town or region</label>
	<div class="combobox" bind:this={comboboxEl}>
		<input
			bind:this={inputEl}
			bind:value={query}
			id="search-input"
			name="postcode"
			type="search"
			role="combobox"
			autocomplete="off"
			autocapitalize="off"
			autocorrect="off"
			spellcheck="false"
			inputmode="text"
			maxlength="30"
			required
			{placeholder}
			aria-autocomplete="list"
			aria-controls={listboxId}
			aria-expanded={open}
			aria-activedescendant={open && highlighted >= 0 ? `search-opt-${highlighted}` : undefined}
			aria-describedby={statusId}
			oninput={onInput}
			onfocus={onFocus}
			onblur={onBlur}
			onkeydown={onKeydown}
		/>

		<div id={statusId} class="visually-hidden" role="status" aria-live="polite">{status}</div>

		{#if open}
			<ul id={listboxId} role="listbox" aria-label="Matching locations">
				{#each matches as loc, i (`${loc.slug}:${loc.type}`)}
					<li
						id="search-opt-{i}"
						role="option"
						aria-selected={i === highlighted}
						onpointerdown={(e) => {
							e.preventDefault();
							pick(i);
						}}
					>
						<span class="opt-name">{loc.name}</span>
						<span class="opt-type">{typeLabel(loc.type)}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<button type="submit" class="btn">Check</button>
</form>

<style>
	.search {
		display: flex;
		gap: var(--sp-2);
		max-width: 32rem;
	}

	.combobox {
		position: relative;
		flex: 1;
		min-width: 0;
	}

	input[type='search'] {
		width: 100%;
		padding: var(--sp-3) var(--sp-4);
		min-height: 2.75rem;
		border: 1px solid var(--rule);
		border-radius: var(--radius-md);
		background: var(--paper);
		color: var(--ink);
		font-size: var(--fs-base);
	}

	input[type='search']:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-offset);
		border-color: var(--ink);
	}

	ul {
		position: absolute;
		top: calc(100% + var(--sp-1));
		left: 0;
		right: 0;
		max-height: 18rem;
		overflow-y: auto;
		margin: 0;
		padding: var(--sp-1);
		list-style: none;
		background: var(--paper);
		border: 1px solid var(--ink);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-soft);
		z-index: var(--z-overlay);
	}

	li {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--sp-3);
		padding: var(--sp-3) var(--sp-3);
		border-radius: var(--radius-sm);
		cursor: pointer;
		font-size: var(--fs-sm);
	}

	li[aria-selected='true'],
	li:hover {
		background: var(--ink);
		color: var(--paper);
	}

	.opt-name {
		font-weight: var(--weight-medium);
	}

	.opt-type {
		font-size: var(--fs-xs);
		color: var(--ink-mute);
	}

	li[aria-selected='true'] .opt-type,
	li:hover .opt-type {
		color: color-mix(in srgb, var(--paper) 70%, transparent);
	}

	.btn {
		min-height: 2.75rem;
		padding-inline: var(--sp-4);
		border-radius: var(--radius-md);
		border: 1px solid var(--ink);
		background: var(--ink);
		color: var(--paper);
		font-weight: var(--weight-medium);
		font-size: var(--fs-sm);
		cursor: pointer;
		transition: background var(--ease-quick);
	}

	.btn:hover,
	.btn:focus-visible {
		background: var(--accent);
		border-color: var(--accent);
	}
</style>
