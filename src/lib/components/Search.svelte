<script lang="ts">
	import { goto } from '$app/navigation';
	import { type LocationType, getCanonicalPath } from '$lib/data/locations';
	import { resolveLocation, suggestLocations } from '$lib/utils/resolve';

	type Props = {
		placeholder?: string;
	};

	let { placeholder = 'Postcode or town' }: Props = $props();

	const listboxId = 'search-listbox';
	let query = $state('');
	let highlighted = $state(-1);
	let open = $state(false);

	const matches = $derived(query.trim().length > 0 ? suggestLocations(query, 6) : []);

	function typeLabel(t: LocationType): string {
		if (t === 'city') return 'City';
		if (t === 'postcode-area') return 'Postcode area';
		return 'Region';
	}

	function onInput() {
		open = matches.length > 0;
		highlighted = matches.length > 0 ? 0 : -1;
	}

	function onFocus() {
		if (matches.length > 0) open = true;
	}

	function onBlur() {
		// Let click on a listbox option fire before closing.
		setTimeout(() => {
			open = false;
		}, 120);
	}

	function pick(idx: number) {
		const loc = matches[idx];
		if (!loc) return;
		query = loc.name;
		open = false;
		goto(getCanonicalPath(loc));
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			open = matches.length > 0;
			highlighted = (highlighted + 1) % Math.max(matches.length, 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			highlighted = (highlighted - 1 + matches.length) % Math.max(matches.length, 1);
		} else if (e.key === 'Enter') {
			if (open && highlighted >= 0 && matches[highlighted]) {
				e.preventDefault();
				pick(highlighted);
			} else {
				const hit = resolveLocation(query);
				if (hit) {
					e.preventDefault();
					goto(getCanonicalPath(hit));
				}
				// Otherwise: let the form submit to /q for unresolved input.
			}
		} else if (e.key === 'Escape') {
			open = false;
			highlighted = -1;
		}
	}
</script>

<form action="/q" method="get" class="search" role="search">
	<label for="search-input" class="visually-hidden">Postcode, town or region</label>
	<div class="combobox">
		<input
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
			aria-controls={listboxId}
			aria-expanded={open}
			aria-activedescendant={open && highlighted >= 0 ? `search-opt-${highlighted}` : undefined}
			oninput={onInput}
			onfocus={onFocus}
			onblur={onBlur}
			onkeydown={onKeydown}
		/>

		{#if open}
			<ul id={listboxId} role="listbox" aria-label="Matching locations">
				{#each matches as loc, i (loc.slug + loc.type)}
					<li
						id="search-opt-{i}"
						role="option"
						aria-selected={i === highlighted}
						onmousedown={(e) => {
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
		box-shadow: 0 12px 32px rgb(15 20 16 / 0.08);
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
		color: rgb(250 247 242 / 0.7);
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
