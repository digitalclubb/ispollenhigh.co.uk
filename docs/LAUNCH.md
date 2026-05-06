# Launch checklist

The site is feature-complete for v1. This doc is the runbook for going live on `ispollenhigh.co.uk`.

## 1. Vercel project

- [ ] Create a Vercel project named `ispollenhigh`, connected to `github.com/digitalclubb/ispollenhigh.co.uk`
- [ ] In Project Settings → Build & Development, framework preset is auto-detected as SvelteKit; leave as default
- [ ] In Project Settings → Domains, add `ispollenhigh.co.uk` and `www.ispollenhigh.co.uk`
- [ ] Set the apex (`ispollenhigh.co.uk`) as the canonical domain. `www.` redirects to apex
- [ ] In Project Settings → Functions, leave region defaults (the `+page.server.ts` files pin `lhr1` themselves)

## 2. Environment variables

Set these in Project Settings → Environment Variables, scoped to **Production, Preview and Development**:

| Variable | Value | Notes |
|---|---|---|
| `GOOGLE_POLLEN_API_KEY` | (the API key from Google Cloud Console) | Without this, the site serves synthetic data. Restrict the key to the Pollen API only and to ispollenhigh.co.uk + Vercel's preview domains |

## 3. DNS

- [ ] Point `ispollenhigh.co.uk` to Vercel via the A and AAAA records Vercel generates, or via the recommended ALIAS to `cname.vercel-dns.com`
- [ ] Add the `www` CNAME pointing to `cname.vercel-dns.com`
- [ ] Allow time for SSL provisioning (typically under five minutes)

## 4. Analytics

- [ ] Enable Web Analytics in Project Settings → Analytics. Free tier is fine
- [ ] Confirm cookieless mode is enabled (it's the default for Vercel Web Analytics)

## 5. Search Console

- [ ] Add `ispollenhigh.co.uk` as a Domain property in Google Search Console
- [ ] Verify ownership via the DNS TXT record method (preferred, survives DNS changes)
- [ ] Submit `https://ispollenhigh.co.uk/sitemap.xml`
- [ ] Validate the sitemap: should report around 190 URLs discovered

## 6. Pre-flight checks

Run before announcing the site:

- [ ] Lighthouse mobile run on `/`, `/london`, `/sw`, `/region/south-east`. All four should score 100 across performance, accessibility, best practices, SEO
- [ ] axe DevTools or `pnpm dlx @axe-core/cli https://ispollenhigh.co.uk` shows zero violations
- [ ] Google Rich Results Test on `/` and `/london`. FAQPage and BreadcrumbList should parse cleanly
- [ ] Throttle DevTools Network to Offline, reload, last reading still renders, /offline page available
- [ ] Twitter Card Validator + LinkedIn Post Inspector against `https://ispollenhigh.co.uk/`, OG image renders
- [ ] Confirm `/api/pollen?lat=51.5&lon=-0.1` returns 200 with `X-Pollen-Source: google`
- [ ] Confirm `/api/pollen?lat=51.5074&lon=-0.1278` returns 308 to the canonical bucketed coords
- [ ] Confirm sitemap `lastmod` is today's date
- [ ] Confirm `/robots.txt` allows everything except `/q` and `/api/`

## 7. Rollback

If something goes wrong after launch:

1. Revert in Vercel: Project → Deployments → pick the previous successful deployment → Promote to Production
2. If the issue is Google API spend, set `GOOGLE_POLLEN_API_KEY` to a placeholder. The site will serve synthetic data with a "demo data" notice and zero spend
3. If the issue is DNS, you can point the apex back to a static "maintenance" page on Vercel via a holding deploy

## 8. Post-launch

- [ ] Watch Search Console Coverage report for indexing of the 187 URLs over the first week
- [ ] Watch Vercel Web Analytics for unexpected traffic spikes
- [ ] Watch Vercel function logs for upstream pollen-api failures (we degrade to Open-Meteo silently; logs surface them)
