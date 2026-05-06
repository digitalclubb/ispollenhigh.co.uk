# Runbook

What to do when things break, and how to know they have.

## Health endpoint

Two endpoints, two purposes:

| URL | What it checks | Cost |
|---|---|---|
| `https://ispollenhigh.co.uk/api/health` | Full pipeline: edge function + Google Pollen API + Open-Meteo fallback. Returns `{status, source, fetchedAt}`. 200 if `source` is `google` or `open-meteo`, 503 if `synthetic`. | Calls Google Pollen API. ~1 call/min after 60-second cache |
| `https://ispollenhigh.co.uk/api/health?upstream=skip` | Edge liveness only. Doesn't touch upstream. Returns 200 with `{status: 'ok', source: 'edge'}`. | Free |

## Recommended monitor setup

Free tier of either [UptimeRobot](https://uptimerobot.com/) or [Better Uptime](https://betterstack.com/better-uptime). 

**Two monitors per service:**

1. **Liveness** (every minute):
   - URL: `https://ispollenhigh.co.uk/api/health?upstream=skip`
   - Expect: HTTP 200, body contains `"status":"ok"`
   - Alert: after 2 consecutive failures (avoids single-region noise)

2. **Data freshness** (every 5 minutes):
   - URL: `https://ispollenhigh.co.uk/api/health`
   - Expect: HTTP 200, body contains `"source":"google"` (or `"source":"open-meteo"` is acceptable degraded)
   - Alert: after 3 consecutive failures, or when `source` flips to `synthetic`

A failed liveness monitor means Vercel itself is down or the project is misconfigured. A failed freshness monitor means upstream pollen data is unavailable; the site still works (returns synthetic data) but should be looked at.

## Common failure modes and fixes

### `x-pollen-source: synthetic` everywhere

**Cause**: `GOOGLE_POLLEN_API_KEY` is unset in Vercel, or the key is invalid, AND Open-Meteo also failed.

**Fix**: Vercel → Project → Settings → Environment Variables. Confirm `GOOGLE_POLLEN_API_KEY` exists for Production. Test in Cloud Console with the key against the Pollen API directly. If Open-Meteo failed too, check their status page.

### `x-pollen-source: open-meteo`

**Cause**: Google Pollen API failed. Either rate-limited (quota cap hit), key restriction blocks server-side calls, or upstream outage.

**Fix**: Check Vercel function logs for `pollen-service: google failed, falling back`. The follow-on error message will say what went wrong. Common: HTTP referrer restriction on the API key (server calls have no Referer).

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
