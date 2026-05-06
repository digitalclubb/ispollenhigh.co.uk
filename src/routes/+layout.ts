// Default: per-route opt-in to prerender. The homepage is edge-rendered so
// it can pick up Vercel geo headers; per-location pages added in phase 3 will
// re-enable prerender = true on themselves.
export const trailingSlash = 'never';
