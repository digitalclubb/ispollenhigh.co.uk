import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { dev } from '$app/environment';

/**
 * Vercel Analytics + Speed Insights, mounted at the root layout per the
 * canonical Vercel docs:
 *   https://vercel.com/docs/analytics/quickstart
 *   https://vercel.com/docs/speed-insights/quickstart
 *
 * The SvelteKit-specific entry points handle SvelteKit's client-side
 * route changes automatically, so a Search-then-goto-/london counts as
 * a real page view rather than being missed. Both packages are no-ops
 * outside production and require Analytics / Speed Insights to be
 * enabled in the Vercel project dashboard before they collect data.
 */
injectAnalytics({ mode: dev ? 'development' : 'production' });
injectSpeedInsights();

export const trailingSlash = 'never';
