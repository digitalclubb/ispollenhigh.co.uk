import { describe, expect, it } from 'vitest';
import { incCounter, readAllCounters, readCounter } from './metrics';

describe('metrics counters', () => {
	it('starts each counter at zero', () => {
		expect(readCounter('test-zero')).toBe(0);
	});

	it('increments and reads the same key', () => {
		incCounter('test-inc');
		incCounter('test-inc');
		incCounter('test-inc');
		expect(readCounter('test-inc')).toBe(3);
	});

	it('keeps separate counts per name', () => {
		incCounter('test-a');
		incCounter('test-b');
		incCounter('test-b');
		expect(readCounter('test-a')).toBe(1);
		expect(readCounter('test-b')).toBe(2);
	});

	it("readAllCounters returns today's entries only", () => {
		incCounter('test-all');
		const all = readAllCounters();
		expect(all['test-all']).toBeGreaterThan(0);
	});
});
