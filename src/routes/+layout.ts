import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { dev } from '$app/environment';

/**
 * Vercel Analytics, mounted at the root layout per the canonical docs:
 *   https://vercel.com/docs/analytics/quickstart
 *
 * The SvelteKit-specific entry point handles SvelteKit's client-side
 * route changes automatically, so a Search-then-goto-/london counts as
 * a real page view rather than being missed. The package is a no-op
 * outside production and requires Analytics to be enabled in the Vercel
 * project dashboard before it collects data.
 */
injectAnalytics({ mode: dev ? 'development' : 'production' });

export const trailingSlash = 'never';
