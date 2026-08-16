<script lang="ts">
	import type { CalendarView } from '$lib/server/location-page';

	// Presentational: the calendar is computed in the server load from
	// $lib/data/season, alongside the rest of the page's registry-derived data.
	type Props = { calendar: CalendarView; name: string };
	let { calendar, name }: Props = $props();

	const levelLabel = ['none', 'low', 'active', 'peak'];
</script>

<section class="season" aria-labelledby="season-heading">
	<h2 id="season-heading">Hay fever season in {name}</h2>

	<p class="summary">
		The pollen season in {name} runs from {calendar.overall}. The worst months are
		typically {calendar.worstMonths}.
	</p>

	<div class="scroller">
		<table>
			<caption class="visually-hidden">
				Month-by-month pollen calendar for {name}: tree, grass and weed pollen
				activity from January to December.
			</caption>
			<thead>
				<tr>
					<th scope="col">Pollen</th>
					{#each calendar.months as month (month)}
						<th scope="col">{month}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each calendar.rows as row (row.kind)}
					<tr>
						<th scope="row">{row.label}</th>
						{#each row.values as value, i (calendar.months[i])}
							<td
								class="cell level-{value}"
								class:current={i === calendar.currentMonth}
								title="{row.label} in {calendar.months[i]}: {levelLabel[value]}"
							>
								<span class="visually-hidden">
									{calendar.months[i]}: {levelLabel[value]}
								</span>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<ul class="key" aria-hidden="true">
		<li><span class="swatch level-1"></span> Starting</li>
		<li><span class="swatch level-2"></span> Active</li>
		<li><span class="swatch level-3"></span> Peak</li>
	</ul>

	<ul class="notes">
		{#each calendar.rows as row (row.kind)}
			<li>{row.text}</li>
		{/each}
	</ul>

	<p class="more">
		<a href="/pollen-calendar">See the full UK pollen calendar</a> or read
		<a href="/hay-fever-season">when hay fever season starts and ends</a>.
	</p>
</section>

<style>
	.season {
		margin-top: var(--sp-7);
		padding-top: var(--sp-6);
		border-top: 1px solid var(--rule);
	}

	h2 {
		font-size: var(--fs-md);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		margin-bottom: var(--sp-4);
	}

	.summary {
		max-width: 60ch;
		color: var(--ink-soft);
		line-height: var(--lh-base);
		margin-bottom: var(--sp-5);
	}

	.scroller {
		overflow-x: auto;
		/* Positioned so the .visually-hidden cell labels and caption (which are
		   position: absolute) resolve their containing block here rather than the
		   initial one. Without it they escape this scroller below ~480px, where
		   the table is wider than the viewport, and widen the whole page. */
		position: relative;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		min-width: 30rem;
	}

	th {
		font-size: var(--fs-xs);
		font-weight: var(--weight-medium);
		color: var(--ink-mute);
		text-align: left;
		padding: var(--sp-1) var(--sp-2) var(--sp-2);
		white-space: nowrap;
	}

	tbody th {
		padding-right: var(--sp-3);
		color: var(--ink-soft);
	}

	.cell {
		height: 1.5rem;
		border: 1px solid var(--paper);
		border-radius: var(--radius-sm);
		background: var(--paper-warm);
	}

	.level-1 {
		background: var(--level-low-bg);
	}

	.level-2 {
		background: var(--level-moderate-bg);
	}

	.level-3 {
		background: var(--level-high-bg);
	}

	.cell.current {
		outline: 2px solid var(--ink);
		outline-offset: -2px;
	}

	.key {
		display: flex;
		gap: var(--sp-4);
		list-style: none;
		padding: 0;
		margin: var(--sp-4) 0 0;
		font-size: var(--fs-xs);
		color: var(--ink-mute);
	}

	.key li {
		display: flex;
		align-items: center;
		gap: var(--sp-2);
	}

	.swatch {
		display: inline-block;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: var(--radius-sm);
	}

	.notes {
		margin: var(--sp-5) 0 0;
		padding: 0;
		list-style: none;
		max-width: 60ch;
		display: flex;
		flex-direction: column;
		gap: var(--sp-2);
		font-size: var(--fs-sm);
		color: var(--ink-soft);
		line-height: var(--lh-base);
	}

	.more {
		margin-top: var(--sp-4);
		font-size: var(--fs-sm);
		color: var(--ink-mute);
	}

	.more a {
		color: var(--ink-soft);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.more a:hover,
	.more a:focus-visible {
		color: var(--ink);
	}
</style>
