/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

/**
 * Two cache strategies:
 *
 *   1. App shell (build assets, static files): cache-first. The bundle hash
 *      changes per deploy so the old shell is purged on activation.
 *   2. /api/pollen and HTML pages: network-first with cache fallback. Live
 *      data wins when online; the last successful reading and an /offline
 *      fallback page survive offline.
 *
 * Anything else falls through to the network and is not cached.
 */

declare const self: ServiceWorkerGlobalScope;

const SHELL_CACHE = `shell-${version}`;
const RUNTIME_CACHE = `runtime-${version}`;
const OFFLINE_URL = '/offline';
const SHELL_ASSETS = [...build, ...files];
const SHELL_SET = new Set(SHELL_ASSETS);

self.addEventListener('install', (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(SHELL_CACHE);
			await cache.addAll(SHELL_ASSETS);
			// Prerendered fallback for any HTML navigation that fails offline.
			await cache.add(OFFLINE_URL);
			await self.skipWaiting();
		})()
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(
				keys.filter((k) => k !== SHELL_CACHE && k !== RUNTIME_CACHE).map((k) => caches.delete(k))
			);
			await self.clients.claim();
		})()
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;

	if (request.method !== 'GET') return;

	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	if (SHELL_SET.has(url.pathname)) {
		event.respondWith(cacheFirst(request, SHELL_CACHE));
		return;
	}

	const isApiPollen = url.pathname === '/api/pollen' || url.pathname.startsWith('/api/pollen/');
	const isHtml = request.headers.get('accept')?.includes('text/html') ?? false;

	if (isApiPollen) {
		event.respondWith(networkFirst(request, RUNTIME_CACHE, false));
		return;
	}

	if (isHtml) {
		event.respondWith(networkFirst(request, RUNTIME_CACHE, true));
	}
});

async function cacheFirst(request: Request, cacheName: string): Promise<Response> {
	const cache = await caches.open(cacheName);
	const hit = await cache.match(request);
	if (hit) return hit;
	const res = await fetch(request);
	if (res.ok) cache.put(request, res.clone());
	return res;
}

async function networkFirst(
	request: Request,
	cacheName: string,
	htmlFallback: boolean
): Promise<Response> {
	const cache = await caches.open(cacheName);
	try {
		const res = await fetch(request);
		if (res.ok) cache.put(request, res.clone());
		return res;
	} catch (err) {
		const hit = await cache.match(request);
		if (hit) return hit;
		if (htmlFallback) {
			const shell = await caches.open(SHELL_CACHE);
			const offline = await shell.match(OFFLINE_URL);
			if (offline) return offline;
		}
		throw err;
	}
}
