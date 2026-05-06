/**
 * Per-day call counters per pollen source. Lives in module-scope memory
 * so each Vercel region tracks its own count. Total daily calls across
 * the site is `sum(regions)` — not exact but a useful approximation for
 * spotting quota issues before they become outages.
 *
 * Counters reset at the UTC date boundary by recording today's date
 * alongside each entry; reads on a new day return 0.
 */

interface DailyCount {
	date: string;
	count: number;
}

const counters = new Map<string, DailyCount>();

function todayUTC(): string {
	return new Date().toISOString().slice(0, 10);
}

export function incCounter(name: string): void {
	const today = todayUTC();
	const current = counters.get(name);
	if (!current || current.date !== today) {
		counters.set(name, { date: today, count: 1 });
		return;
	}
	current.count += 1;
}

export function readCounter(name: string): number {
	const today = todayUTC();
	const current = counters.get(name);
	return current?.date === today ? current.count : 0;
}

export function readAllCounters(): Record<string, number> {
	const today = todayUTC();
	const out: Record<string, number> = {};
	for (const [name, entry] of counters) {
		if (entry.date === today) out[name] = entry.count;
	}
	return out;
}
