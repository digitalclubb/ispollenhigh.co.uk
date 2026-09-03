/**
 * Does this request look like a person in a browser, rather than a crawler?
 *
 * Only used to decide whether a request is worth a paid Google Pollen call.
 * It is a cost gate, not a security control: being wrong in either direction
 * costs at most one API call or one slightly less precise reading, so it errs
 * towards "no" and stays cheap to evaluate.
 *
 * Two signals, both of which a crawler has to actively fake to pass:
 *
 * 1. `Sec-Fetch-Site: same-origin` — browsers set the Sec-Fetch-* family on
 *    every fetch() and cannot be scripted out of it. curl, wget, and the
 *    long tail of HTTP libraries send nothing at all.
 * 2. The user-agent doesn't self-identify as a bot. This is what excludes the
 *    crawlers that DO execute our JavaScript — Googlebot and Bingbot both
 *    render pages, and both name themselves honestly in the UA.
 */

const BOT_UA =
	/bot\b|bot\/|crawl|spider|slurp|scrape|fetcher|headless|phantom|puppeteer|playwright|selenium|preview|monitor|uptime|lighthouse|pagespeed|gtmetrix|curl|wget|python-|go-http|java\/|okhttp|axios|node-fetch|libwww|httpclient|facebookexternalhit|embedly|feedly|apis-google|mediapartners|adsbot|petalsearch|yandex|baidu|sogou|duckduck|archive\.org|semrush|ahrefs|mj12|dotbot|dataforseo|bytespider|gptbot|claudebot|perplexity|ccbot|amazonbot|applebot|meta-external/i;

export function looksHuman(headers: Headers): boolean {
	if (headers.get('sec-fetch-site') !== 'same-origin') return false;
	const ua = headers.get('user-agent');
	return !!ua && !BOT_UA.test(ua);
}
