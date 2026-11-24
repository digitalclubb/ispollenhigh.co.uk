import type { ExecutionContext, IncomingRequestCfProperties } from '@cloudflare/workers-types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: { GOOGLE_POLLEN_API_KEY?: string; GOOGLE_POLLEN_DAILY_CAP?: string };
			cf: IncomingRequestCfProperties;
			ctx: ExecutionContext;
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
