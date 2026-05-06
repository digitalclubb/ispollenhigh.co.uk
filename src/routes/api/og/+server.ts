import { ImageResponse } from '@vercel/og';
import { ALL_LOCATIONS } from '$lib/data/locations';
import type { RequestHandler } from './$types';

/**
 * Per-location Open Graph card. Generated on demand at the edge using
 * @vercel/og (which is a thin wrapper around satori + resvg). Cached for
 * a day at the CDN, so even at high social-share volume we don't burn
 * compute. Falls back to a generic ispollenhigh card when slug is unknown.
 *
 * No custom font is bundled. ImageResponse uses its built-in Noto Sans
 * fallback; the visual reads as a clean editorial card without us paying
 * the bundle cost of shipping a TTF for a once-per-share render.
 */

export const config = {
	runtime: 'edge'
};

export const GET: RequestHandler = ({ url }) => {
	const slugParam = url.searchParams.get('slug')?.toLowerCase() ?? '';
	const typeParam = url.searchParams.get('type') ?? '';

	// Guard against absurd input being used to inflate the 24h cache with
	// junk variants. Real slugs cap out around 25 characters.
	if (slugParam.length > 64 || typeParam.length > 32) {
		return new Response('Bad request', { status: 400 });
	}

	const loc =
		ALL_LOCATIONS.find((l) => l.slug === slugParam && (typeParam ? l.type === typeParam : true)) ??
		ALL_LOCATIONS.find((l) => l.slug === slugParam);

	const heading = loc ? `Is pollen high in ${loc.name}?` : 'Is pollen high today?';

	const body = loc
		? "Today's grass, tree and weed levels with a five-day outlook."
		: 'A straight answer for any UK postcode.';

	return new ImageResponse(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '80px',
					backgroundColor: '#FAF7F2',
					color: '#0F1410',
					fontFamily: 'system-ui, sans-serif'
				},
				children: [
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								alignItems: 'center',
								gap: '20px',
								fontSize: 28,
								fontWeight: 600,
								color: '#0F1410'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											width: 28,
											height: 28,
											borderRadius: '50%',
											backgroundColor: '#B6471F'
										}
									}
								},
								'ispollenhigh'
							]
						}
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'column',
								gap: '24px'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											fontSize: 84,
											fontWeight: 800,
											letterSpacing: '-0.02em',
											lineHeight: 1.05,
											color: '#0F1410',
											maxWidth: '900px'
										},
										children: heading
									}
								},
								{
									type: 'div',
									props: {
										style: {
											fontSize: 32,
											color: '#2A2D27',
											maxWidth: '800px'
										},
										children: body
									}
								}
							]
						}
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								alignItems: 'center',
								gap: '16px',
								fontSize: 26,
								fontWeight: 500,
								color: '#B6471F'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											width: 60,
											height: 4,
											backgroundColor: '#B6471F',
											borderRadius: 2
										}
									}
								},
								'ispollenhigh.co.uk'
							]
						}
					}
				]
			}
		},
		{
			width: 1200,
			height: 630,
			headers: {
				'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
				'CDN-Cache-Control': 'public, max-age=86400'
			}
		}
	);
};
