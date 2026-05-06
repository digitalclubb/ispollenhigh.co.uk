# ispollenhigh.co.uk — v1 specification

Status: signed off 2026-05-06.

## 1. Goal

Answer one question, instantly, on any device, in any UK location: **is pollen high right now?** Provide enough detail (per-type breakdown, 5-day outlook, dominant species) for a hayfever sufferer to decide whether to take medication or change plans. No content marketing, no upsells, no friction.

## 2. Non-goals (explicitly out of v1)

- Charts of historical data. Planned for a later phase.
- User accounts, saved locations, push notifications.
- Air quality, UV, or general weather data.
- Multi-language. en-GB only.
- A blog, content hub, or article pages.

## 3. Primary user journeys

1. **Geolocation hit.** User lands on `/`. Browser asks for location. They allow. Page resolves to nearest known centroid and shows answer in under 2 seconds from click.
2. **Geolocation declined or unavailable.** Page falls back to Vercel edge geo (city level), shows that answer, with a prominent "Not your area? Search a postcode" affordance.
3. **Search hit.** User types `SW1` or `Bristol` into the search box. Autocomplete suggests known locations. They pick one, page reroutes to canonical URL (`/sw` or `/bristol`), answer appears.
4. **Direct deep link.** User lands on `/manchester` from a Google search. Server-rendered with current pollen for Manchester. No location prompt. Same UI as journey 1 but with the location pre-resolved.

## 4. Routes

| Path | Type | Indexed | Notes |
|---|---|---|---|
| `/` | Prerendered + client geo | Yes | Default to UK-wide summary then refine on geo |
| `/{postcode-area}` | Prerendered (124 pages) | Yes | e.g. `/sw`, `/m`, `/ec`, `/ab` |
| `/{city-slug}` | Prerendered (50 pages) | Yes | e.g. `/london`, `/manchester` |
| `/region/{region-slug}` | Prerendered (16 pages) | Yes | Met Office regions |
| `/q?postcode=...` | Server-rendered, no-index | No | Search result resolver, redirects to canonical |
| `/about` | Prerendered | Yes | What we do, data source, attribution |
| `/privacy` | Prerendered | Yes | Privacy policy |
| `/terms` | Prerendered | Yes | Terms of use |
| `/cookies` | Prerendered | Yes | Cookies policy |
| `/api/pollen` | Edge function | n/a | Internal proxy to Google Pollen API with cache bucketing |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Generated | n/a | |

## 5. Data model

```
Location {
  slug: string                   // 'sw', 'london', 'south-east'
  name: string                   // 'SW (London)', 'Manchester'
  type: 'postcode-area' | 'city' | 'region'
  lat: number
  lon: number
  parentRegion?: string
}

PollenReading {
  location: Location
  fetchedAt: ISO8601
  validFor: ISO8601 (date)
  overall: { level: PollenLevel, indexValue: number }
  types: {
    grass: PollenTypeReading
    tree:  PollenTypeReading
    weed:  PollenTypeReading
  }
  forecast: ForecastDay[]        // 5 days
  source: 'google' | 'open-meteo'
}

PollenTypeReading {
  level: PollenLevel
  indexValue: number             // 0-5 normalised
  dominantSpecies?: string[]     // e.g. ['Oak', 'Birch']
}

PollenLevel = 'none' | 'very-low' | 'low' | 'moderate' | 'high' | 'very-high'
```

## 6. API and caching strategy

- All client requests hit `/api/pollen?lat=...&lon=...` (our edge function), never Google directly. Keeps the API key server-side.
- Edge function rounds `lat,lon` to 0.05° (~5 km) before forming a cache key. Sets `Cache-Control: public, s-maxage=1800, stale-while-revalidate=3600`.
- Calls Google Pollen Forecast endpoint. On 5xx, retries once. On second failure, falls back to Open-Meteo, sets `X-Pollen-Source: open-meteo` so the UI can subtly note degraded mode.
- Normalises both providers to the `PollenReading` shape so the UI is provider-agnostic.
- Prerendered pages call the edge function at build/ISR time too. Homepage and per-location pages get a baseline reading at build, then progressively enhance with live data on the client.

## 7. PWA requirements

- `manifest.webmanifest` with name, short_name, icons (192, 512, maskable), theme_color, background_color, start_url, scope, display: standalone.
- Service worker: cache-first for the app shell (HTML, CSS, fonts, JS), network-first with cache fallback for `/api/pollen`. Last reading survives offline with a timestamp.
- iOS: apple-touch-icon, apple-mobile-web-app meta tags.
- Install prompt only triggered after the first useful answer is rendered, never on first visit.

## 8. SEO requirements

- Per-route unique `<title>` and `<meta name="description">`. Templates use the current pollen level so the snippet reflects today's reading: `Yes, pollen is HIGH in SW London today | ispollenhigh`. Fresh content on every crawl.
- JSON-LD: `WebPage` on every page, `Place` on location pages, `FAQPage` on `/` answering the People-Also-Ask queries discovered in research. All hand-written, no thin programmatic copy.
- `<link rel="canonical">` on every route. Search-resolver redirects 308 to canonical.
- `sitemap.xml` lists all 191 indexable pages with `<lastmod>` reflecting the last data refresh.
- `<html lang="en-GB">`. Open Graph + Twitter card per page with location-specific generated image (Vercel OG, dynamic).
- No content cliffs. Each location page has a unique 80–120 word block: dominant local trees and grasses, peak month, Met Office region cross-link. Hand-written templates with location-aware variables, not LLM-padded filler.

## 9. Accessibility

- WCAG 2.2 AA across the board.
- Skip-to-content link.
- The H1 answer is announced to assistive tech first. The page communicates its answer in text, not just colour.
- Colour contrast 7:1 on primary text against background, 4.5:1 minimum elsewhere.
- All interactive elements ≥44×44 CSS px tap targets.
- `prefers-reduced-motion: reduce` disables all transitions and any decorative animation.
- Form fields properly labelled, autocomplete hints, error states announced.

## 10. Performance budgets

| Metric | Budget |
|---|---|
| LCP (mobile, slow 4G) | < 1.5s |
| CLS | < 0.05 |
| INP | < 200ms |
| HTML (gzipped, homepage) | < 25 KB |
| Client JS (gzipped, homepage) | < 30 KB |
| Web fonts | 1 file, < 35 KB woff2, subsetted Latin |
| Lighthouse mobile | 100 / 100 / 100 / 100 |

Strategies: SvelteKit prerender for everything indexable, no client-side router on first paint, Svelte 5 runes for the small bits of interactivity (search, geo prompt, live refresh), no third-party scripts other than Vercel Analytics.

## 11. Brand and visual direction

A British weather almanac, modernised. Big editorial type, generous air, a confident colour state per pollen level. Not a dashboard, not a pharma site, not a generic AI gradient.

- **Type.** One self-hosted variable font (Mona Sans, OFL), used at three sizes: display (the hero answer), heading, body. System font fallback until the variable font loads, with `size-adjust` to prevent layout shift.
- **Palette.** Background warm off-white `#FAF7F2` (paper). Text near-black `#0F1410` (printer's ink). Pollen levels mapped to a five-step palette: `none` slate, `low` fresh green, `moderate` honey, `high` rust, `very-high` deep maroon. Each has an accessible foreground variant for text-on-colour.
- **Layout.** The H1 answer fills around 70% of the viewport width on mobile, around 50% on desktop. It's the page. Three pollen-type cards sit beneath in a row on desktop, stacked on mobile. 5-day strip below. Single column. No sidebar, no chrome.
- **Detail.** Subtle paper-grain SVG noise on the background (CSS-only, no image). Date stamped under the headline like a newspaper ("Tuesday, 5 May 2026"). Pollen index rendered as a big editorial numeral.
- **Voice.** Direct British. "Yes, pollen is high." not "Pollen levels are currently elevated." Plain, unsentimental, factual. No marketing register. No em dashes. No Oxford commas.

## 12. Privacy and analytics

- Vercel Analytics in cookieless mode. No third-party trackers.
- Geolocation: browser API, prompted on user action, never stored server-side. Lat and lon round-tripped through the edge function only as a cache key, never logged with user-identifying context.
- IP-based fallback uses Vercel's `request.geo` headers. Not stored.
- Privacy, terms, cookies pages all linked from the footer of every page.

## 13. Acceptance criteria for v1

1. Homepage renders the pollen verdict for the user's location within 1.5s LCP on a throttled 4G mobile profile.
2. All 191 indexable pages prerender at build time with valid HTML, unique titles and descriptions, valid JSON-LD.
3. Search box resolves any UK postcode (full or partial) to a canonical page within 300ms after submit.
4. Service worker installs on first visit, app loads offline with the last reading, install prompt fires after first answer.
5. Lighthouse mobile scores 100 across performance, accessibility, best practices, SEO on the homepage and three random location pages.
6. Cost telemetry confirms cache hit rate above 90% on the `/api/pollen` route under simulated 10k/day traffic.
7. axe-core automated a11y check passes with zero violations on the homepage and three random location pages.

## 14. Out of v1, planned later

- Historical charts (monthly averages, year-on-year).
- Email and web-push alerts for "let me know when grass goes high in SW".
- Pollen species deep-dive pages.
