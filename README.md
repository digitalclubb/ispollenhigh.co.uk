# ispollenhigh.co.uk

A microsite that tells you if pollen is high in your area in the UK, fast.

See [`docs/SPEC.md`](./docs/SPEC.md) for the v1 specification and architecture.

## Stack

- SvelteKit 2 (Svelte 5)
- TypeScript strict
- Vercel edge runtime
- Plain CSS with custom properties (no Tailwind)
- Biome for lint and format
- pnpm

## Local development

```sh
pnpm install
pnpm dev
```

Common scripts:

| Command | What it does |
|---|---|
| `pnpm dev` | Run the dev server on http://localhost:5173 |
| `pnpm build` | Production build |
| `pnpm preview` | Serve the production build locally |
| `pnpm check` | Type-check with svelte-check |
| `pnpm lint` | Lint and format check with Biome |
| `pnpm format` | Auto-format with Biome |

## Project structure

```
src/
  app.html              HTML shell, lang=en-GB
  app.d.ts              SvelteKit ambient types
  lib/
    styles/             Design tokens + reset + base
  routes/               Pages and endpoints
docs/
  SPEC.md               v1 specification
static/                 Static assets served at /
```

## Deployment

Hosted on Vercel. Pushes to `main` deploy to production. Pull requests get preview deployments automatically.
