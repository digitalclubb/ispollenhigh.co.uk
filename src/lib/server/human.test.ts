import { describe, expect, it } from 'vitest';
import { looksHuman } from './human';

const CHROME =
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';

function req(ua: string, site = 'same-origin'): Headers {
	return new Headers({ 'user-agent': ua, 'sec-fetch-site': site });
}

/**
 * This gate is the only thing deciding whether a request costs money, so the
 * crawlers that render JavaScript — the ones the CDN cache alone won't stop —
 * get a test each.
 */
describe('looksHuman', () => {
	it('passes a browser fetch from our own page', () => {
		expect(looksHuman(req(CHROME))).toBe(true);
		expect(
			looksHuman(
				req(
					'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
				)
			)
		).toBe(true);
	});

	it('rejects the JS-rendering crawlers', () => {
		for (const ua of [
			'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
			'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36',
			'Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)',
			'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
			'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
			'Mozilla/5.0 (compatible; Bytespider; spider-feedback@bytedance.com)',
			'HeadlessChrome/141.0.0.0'
		]) {
			expect(looksHuman(req(ua)), ua).toBe(false);
		}
	});

	it('rejects anything that is not a same-origin browser fetch', () => {
		expect(looksHuman(req(CHROME, 'none'))).toBe(false);
		expect(looksHuman(req(CHROME, 'cross-site'))).toBe(false);
		expect(looksHuman(new Headers({ 'user-agent': CHROME }))).toBe(false);
		expect(looksHuman(new Headers({ 'sec-fetch-site': 'same-origin' }))).toBe(false);
		expect(looksHuman(new Headers())).toBe(false);
	});
});
