import { afterEach, describe, expect, it } from 'vitest';
import { checkRateLimit, clientKey } from './rate-limit';

afterEach(() => {
	// Reset module-level bucket between tests so they're independent. We
	// use a unique key per test rather than re-importing.
});

describe('checkRateLimit', () => {
	it('allows the first request and decrements the bucket', () => {
		const r = checkRateLimit('test-1', { tokens: 3, windowMs: 60_000 });
		expect(r.allowed).toBe(true);
	});

	it('blocks once the tokens are exhausted', () => {
		const key = 'test-2';
		checkRateLimit(key, { tokens: 2, windowMs: 60_000 });
		checkRateLimit(key, { tokens: 2, windowMs: 60_000 });
		const r = checkRateLimit(key, { tokens: 2, windowMs: 60_000 });
		expect(r.allowed).toBe(false);
		expect(r.resetSeconds).toBeGreaterThan(0);
	});

	it('refills the bucket after the window elapses', async () => {
		const key = 'test-3';
		// Generous window/timeout so the test isn't flaky on slow CI runners.
		checkRateLimit(key, { tokens: 1, windowMs: 50 });
		expect(checkRateLimit(key, { tokens: 1, windowMs: 50 }).allowed).toBe(false);
		await new Promise((r) => setTimeout(r, 80));
		expect(checkRateLimit(key, { tokens: 1, windowMs: 50 }).allowed).toBe(true);
	});

	it('reports a sensible reset time on a fresh bucket', () => {
		const r = checkRateLimit('test-4', { tokens: 5, windowMs: 60_000 });
		expect(r.resetSeconds).toBe(60);
	});
});

describe('clientKey', () => {
	it('prefers x-real-ip when present', () => {
		const h = new Headers({ 'x-real-ip': '1.2.3.4', 'x-forwarded-for': '5.6.7.8' });
		expect(clientKey(h)).toBe('1.2.3.4');
	});

	it('falls back to the first x-forwarded-for entry', () => {
		const h = new Headers({ 'x-forwarded-for': '1.2.3.4, 9.9.9.9' });
		expect(clientKey(h)).toBe('1.2.3.4');
	});

	it('returns a generic key when no IP header is present', () => {
		expect(clientKey(new Headers())).toBe('unknown');
	});
});
