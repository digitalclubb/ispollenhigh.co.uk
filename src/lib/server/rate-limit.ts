/**
 * Cheap in-memory rate limiter for the edge function. Edge isolates are
 * per-region so the bucket map is incidentally per-region too; a determined
 * attacker hitting multiple Vercel POPs gets `n × limit`. This is good
 * enough as a defence-in-depth layer alongside the CDN cache and the
 * upstream quota cap. For tighter rate limiting promote this to Vercel KV
 * or Upstash Redis so counters are shared across regions; the signature
 * here is a drop-in.
 */

const buckets = new Map<string, { tokens: number; resetAt: number }>();

interface Limit {
	tokens: number;
	windowMs: number;
}

const DEFAULT_LIMIT: Limit = { tokens: 60, windowMs: 60_000 };

// Sweep expired entries every N writes to bound memory across long-lived
// edge isolates. Cheap O(N) pass, only run rarely.
const SWEEP_EVERY = 1024;
let writesSinceSweep = 0;

function sweep(now: number): void {
	for (const [key, bucket] of buckets) {
		if (bucket.resetAt < now) buckets.delete(key);
	}
}

export function checkRateLimit(
	key: string,
	limit: Limit = DEFAULT_LIMIT
): { allowed: boolean; resetSeconds: number } {
	const now = Date.now();
	const bucket = buckets.get(key);

	if (!bucket || now >= bucket.resetAt) {
		buckets.set(key, { tokens: limit.tokens - 1, resetAt: now + limit.windowMs });
		writesSinceSweep += 1;
		if (writesSinceSweep >= SWEEP_EVERY) {
			sweep(now);
			writesSinceSweep = 0;
		}
		return { allowed: true, resetSeconds: Math.ceil(limit.windowMs / 1000) };
	}

	const resetSeconds = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
	if (bucket.tokens <= 0) return { allowed: false, resetSeconds };

	bucket.tokens -= 1;
	return { allowed: true, resetSeconds };
}

/** Pull a stable client identifier from edge headers, falling back to a
 *  generic key when nothing is available so we never crash on it. */
export function clientKey(headers: Headers): string {
	return (
		headers.get('x-real-ip') ?? headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
	);
}
