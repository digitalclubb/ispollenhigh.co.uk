# Vercel to Cloudflare cutover

Zero-downtime order: deploy the Worker first, move DNS to Cloudflare while it
still points at Vercel, then flip the record to proxied. At every step the old
answer (Vercel) still works, so stale resolver caches never hit a dead end.

## 0. Before touching anything

- [ ] **Workers Paid plan ($5/month).** Free caps Workers at 10 ms CPU per request
      and 100k requests/day. SSR of a location page can exceed 10 ms, and a crawl
      sweep plus traffic can exceed 100k. Either one serves errors.
- [ ] **DNSSEC off at Squarespace.** Domains → ispollenhigh.co.uk → DNS → DNSSEC.
      If it was on, wait 48 h after turning it off before step 2. Skipping this is
      the one way this migration takes the site fully offline.
- [ ] Screenshot every DNS record at Squarespace (MX, SPF/DKIM TXT, Google Search
      Console verification TXT, CAA, apex/www).
- [ ] Note Vercel env vars: `GOOGLE_POLLEN_API_KEY`, `GOOGLE_POLLEN_DAILY_CAP` if set.
- [ ] Google Cloud Console: if the Pollen key has an IP restriction, remove it
      (Workers have no fixed egress IP). API restriction to Pollen only is fine.

## 1. Deploy the Worker (no traffic yet)

```sh
pnpm exec wrangler login
pnpm build && pnpm exec wrangler deploy
pnpm exec wrangler secret put GOOGLE_POLLEN_API_KEY
pnpm exec wrangler secret put GOOGLE_POLLEN_DAILY_CAP   # only if set in Vercel
```

Test on `https://ispollenhigh.<account>.workers.dev`:

- [ ] `/`, `/london`, `/sw`, `/region/south-east`, `/locations`, `/sitemap.xml`
- [ ] `/api/health?upstream=probe` returns `"source":"google"` (costs one paid call)
- [ ] Homepage names your town (IP geolocation via `request.cf`)

## 2. Move DNS to Cloudflare, still pointing at Vercel

- [ ] Cloudflare → Add a domain → `ispollenhigh.co.uk` → Free plan (zone plan is
      separate from Workers Paid).
- [ ] Compare the imported records with the screenshot. Add anything missing.
- [ ] Set apex and www records to **DNS only** (grey cloud). Traffic stays on
      Vercel exactly as today.
- [ ] SSL/TLS → Overview → **Full (strict)**.
- [ ] Squarespace → Domains → DNS → Nameservers → **Use custom nameservers** →
      the two Cloudflare gives you.
- [ ] Wait for Cloudflare's "zone is active" email (minutes to 24 h for .co.uk).
      Both nameserver sets answer with the same Vercel records meanwhile.

## 3. Cutover

- [ ] Web Analytics → Add site → ispollenhigh.co.uk with automatic setup **off**.
      Auto-injection skips Worker responses, so the beacon lives in `src/app.html`.
- [ ] Rules → Redirect Rules → template **Redirect from WWW to root** (308, keep
      path and query).
- [ ] Workers → ispollenhigh → Settings → Domains & Routes → Add route
      `ispollenhigh.co.uk/*` on zone `ispollenhigh.co.uk`. Inert until step below.
- [ ] DNS → apex record → **Proxied** (orange). This is the switch: requests now
      hit the Worker. Resolvers still caching Vercel's IP keep getting Vercel.
- [ ] DNS → www record → **Proxied**.

Verify:

```sh
curl -sI https://ispollenhigh.co.uk/london | grep -iE 'server|cf-cache|x-vercel'
curl -sI https://www.ispollenhigh.co.uk/london | grep -i location
```

`server: cloudflare`, no `x-vercel-*`, www answers 308 to the apex.

**Rollback:** flip apex and www back to DNS only. Proxied TTL is 5 minutes.

## 4. After cutover

- [ ] Swap the route for a custom domain (done 2026-11-24): delete the apex A
      record, attach `ispollenhigh.co.uk` as a Worker custom domain, delete the
      route. `wrangler.jsonc` has `"custom_domain": true` to match.
- [ ] Vercel → Project → Settings → Git → **Disconnect** (otherwise main tries to
      build there and fails).
- [ ] Workers → ispollenhigh → Settings → Builds → connect the GitHub repo. Build
      `pnpm build`, deploy `pnpm exec wrangler deploy`, branch `main`.
- [ ] Leave Bot Fight Mode off: it cannot be bypassed on the Free zone plan and
      would block the Lighthouse CI job.
- [ ] Search Console: confirm the property still verifies and the sitemap fetches.
- [ ] After a week with no issues: remove the domain from Vercel, delete the
      project, and optionally re-enable DNSSEC (Cloudflare → DNS → Settings, then
      paste the DS record into Squarespace).
