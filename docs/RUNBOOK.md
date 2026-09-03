# Runbook

What to do when things break, and how to know they have.

## Health endpoint

Two endpoints, two purposes:

| URL | What it checks | Cost |
|---|---|---|
| `https://ispollenhigh.co.uk/api/health` | Edge liveness only. Doesn't touch upstream. Returns 200 with `{status: 'ok', source: 'edge'}` and today's per-source call counts. | Free |
| `https://ispollenhigh.co.uk/api/health?upstream=probe` | Full pipeline: edge function + Google Pollen API + Open-Meteo fallback. Returns `{status, source, fetchedAt}`. 200 if `source` is `google` or `open-meteo`, 503 if `synthetic`. | One **paid** Google call per 60-second cache window. A 5-minute monitor is ~288 calls/day (~£2/day at $10 per 1,000) |

## Recommended monitor setup

Free tier of either [UptimeRobot](https://uptimerobot.com/) or [Better Uptime](https://betterstack.com/better-uptime). 

**Two monitors per service:**

1. **Liveness** (every minute):
   - URL: `https://ispollenhigh.co.uk/api/health`
   - Expect: HTTP 200, body contains `"status":"ok"`
   - Alert: after 2 consecutive failures (avoids single-region noise)

2. **Data freshness** (every 6 hours — *not* every 5 minutes, each poll is a paid call):
   - URL: `https://ispollenhigh.co.uk/api/health?upstream=probe`
   - Expect: HTTP 200, body contains `"source":"google"` (or `"source":"open-meteo"` is acceptable degraded)
   - Alert: after 3 consecutive failures, or when `source` flips to `synthetic`

A failed liveness monitor means Vercel itself is down or the project is misconfigured. A failed freshness monitor means upstream pollen data is unavailable; the site still works (returns synthetic data) but should be looked at.

## Firewall: bot protection

Vercel WAF → Bot Management → **Bot Protection: Challenge**. It serves a JavaScript challenge to anything that doesn't behave like a browser, answering HTTP 429 with `x-vercel-mitigated: challenge`.

**Verified crawlers are excluded automatically** — Googlebot and Bingbot are verified by IP range and reverse DNS, so indexing is unaffected. Confirm after any firewall change by re-inspecting a page in Search Console and checking `page_fetch_state` is still `SUCCESSFUL`.

**Our own automation is not excluded.** CI and uptime monitors get challenged like any other non-browser client. They get through via a WAF custom rule:

| Setting | Value |
|---|---|
| Match | Header `x-waf-bypass` equals the shared token |
| Action | **Bypass** |
| Order | Above the WAF Managed Rulesets (custom rules run first, but keep it at the top of the custom list) |

The same token lives in GitHub Actions as the `WAF_BYPASS_TOKEN` secret, used by the deployment-readiness curl and injected into the Lighthouse config. Rotate it in both places together. Anyone holding the token skips bot protection, so treat it as a credential.

**Uptime monitors** must send the same header (UptimeRobot: Custom HTTP Headers; Better Stack: Request headers). A monitor without it alerts on 429s that are the firewall doing its job.

**AI crawlers are a separate ruleset.** Bot Protection excludes verified bots, and most AI crawlers are verified — so GPTBot, ClaudeBot and friends pass straight through it. Stopping them (and the upstream calls their sweeps cause) means setting **AI Bots Ruleset → Deny** in the same Bot Management section.

## Cost control

Google's Pollen SKU is $10 per 1,000 calls with a 5,000/month free cap. Four things keep the bill on audience rather than on crawlers, in order of how much work they do:

1. **Server rendering never calls Google.** The free Open-Meteo provider backs every SSR'd page, so a crawl sweep of all ~1,260 URLs costs nothing.
2. **`looksHuman()` gates `/api/pollen`.** A bot that renders our JavaScript still gets the free provider, and its response is returned `private, no-store` so it can't take the shared CDN entry and downgrade the people behind it.
3. **CDN cache, 6 hours per 0.05° bucket.** One paid call covers everyone looking at the same place for a quarter of a day.
4. **`GOOGLE_POLLEN_DAILY_CAP`** (default 500) is the backstop for when the gate is wrong. Past it, everyone falls back to Open-Meteo until the UTC day rolls over. Note the counter is per-instance module memory, so the real ceiling is cap × live instances — treat it as a brake, not a hard limit.

Watch `callsToday.google` on `/api/health` to see where you actually sit. Turn the cap down if the bill creeps; if it's routinely pinned, that's genuine traffic and the cap is the wrong lever.

## Common failure modes and fixes

### `x-pollen-source: synthetic` everywhere

**Cause**: `GOOGLE_POLLEN_API_KEY` is unset in Vercel, or the key is invalid, AND Open-Meteo also failed.

**Fix**: Vercel → Project → Settings → Environment Variables. Confirm `GOOGLE_POLLEN_API_KEY` exists for Production. Test in Cloud Console with the key against the Pollen API directly. If Open-Meteo failed too, check their status page.

### `x-pollen-source: open-meteo`

**Expected in server-rendered HTML, everywhere.** Page rendering never calls Google. Crawlers drive almost all of it — ~1,260 URLs, re-fetched every 6-hour ISR window — and Google bills $10 per 1,000 calls, so tying page renders to the paid API tied the bill to crawler appetite rather than to audience.

Real visitors get the Google reading a moment later: `LocationView` fetches `/api/pollen` on mount and swaps it in. `/api/pollen` is the only route that asks for a paid call, and only when `looksHuman()` (`src/lib/server/human.ts`) says the request is a browser — same-origin `Sec-Fetch-Site` plus a user-agent that doesn't name itself a bot. That last check is what excludes Googlebot and Bingbot, which do execute the page's JavaScript.

So: **view source shows `open-meteo`, the rendered page shows `google`.** That is working as designed.

**Cause when a browser also shows `open-meteo`**: Google Pollen API failed, or the daily budget is spent. Either rate-limited, key restriction blocks server-side calls, upstream outage, or `google` in `/api/health`'s `callsToday` has hit `GOOGLE_POLLEN_DAILY_CAP` (default 500/day/instance).

**Fix**: Check Vercel function logs for `pollen-service: google failed`. The follow-on error message will say what went wrong. Common: HTTP referrer restriction on the API key (server calls have no Referer).

### 308 redirect loop on `/api/pollen`

**Cause**: Coordinate canonicalisation (we 308 to bucketed coords) interacting with another redirect rule.

**Fix**: Check `vercel.json` redirects don't intercept `/api/*` paths. The www-to-apex redirect should be path-agnostic.

### Lighthouse score regression

**Cause**: A change increased page weight or introduced layout shift.

**Fix**: The CI workflow runs Lighthouse on every push to main. PR that broke it is the change to revert. Local debugging: `pnpm dlx unlighthouse --site https://your-preview.vercel.app`.

### Dynamic per-location OG images (deferred)

Tried with `@vercel/og` and hit a hard incompatibility: the package
imports `vc-blob-asset:./Geist-Regular.ttf` for its default font, a
URL scheme only the Next.js bundler resolves. The SvelteKit Vercel
adapter fails the deploy with:

```
The Edge Function "..." is referencing unsupported modules:
  - vc-blob-asset:./Geist-Regular.ttf
```

Providing custom fonts to `ImageResponse` doesn't help because the
unresolvable import sits in the package source itself, not in user
code. Reverted to a single static `og.png` for v1.

When you want per-location OG images, swap to one of:
- `og-img` (designed for non-Next.js frameworks)
- `satori` + `@resvg/resvg-js` directly (more code, full control)

Don't reach for `@vercel/og` again until they ship a framework-
agnostic build path.

### Adding Sentry (optional)

Not wired in by default. The Vercel-edge bundler currently drags
`@sentry/sveltekit`'s client bundle into edge functions even when only
the server SDK is configured. Until that's resolved upstream we rely on
Vercel's built-in error logging.

When you want Sentry:
1. Sign up at sentry.io and create a SvelteKit project
2. `pnpm add @sentry/sveltekit`
3. Use the **Node** SDK rather than the framework integration so the
   edge bundle stays clean: `pnpm add @sentry/node` and init it from
   `+layout.server.ts` rather than `hooks.server.ts`
4. Set `SENTRY_DSN` in Vercel env vars (Production + Preview)

## Things that don't need fixing

- `x-pollen-source: open-meteo` for short bursts: Google's API has occasional 5xx blips. The single retry plus fallback is the design. Only worry if it's been hours.
- Service worker not updating immediately: SW updates take effect on next page load by design. To force, hard-refresh (Cmd+Shift+R).

## Rollback

- Vercel → Project → Deployments → previous successful deploy → **Promote to Production**.
- If revert is what you want, git revert the offending commit and push to main; Vercel auto-deploys.
- If you're rolling back because of API spend: set `GOOGLE_POLLEN_API_KEY` to a placeholder. Site falls back to synthetic data with a "demo data" notice and zero spend.
