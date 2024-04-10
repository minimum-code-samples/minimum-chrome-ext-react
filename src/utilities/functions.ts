/**
 * Utility functions
 *
 * @module ~src/utilities/functions
 */
import { DEFAULT_FETCH_TIMEOUT } from '~src/constants';
import { FetchError, UnauthenticatedError } from '~src/types';

/**
 * Debug console logs with formatting.
 *
 * @param msg - The message to log.
 * @param source - An optional source to indicate where the log originates from.
 */
export function condebug(msg: string, source?: string) {
	const bg = 'background-color: #eee';

	if (source) {
		console.debug(`%c(%s): %c${msg}`, 'color: grey', source, `color: black; ${bg}`);
	} else {
		console.debug(`%c${msg}`, bg);
	}
}

/**
 * Wrapper function around `fetch` to make requests with JSON payloads.
 *
 * This function sets a default Content-type header with the value `application/json` and a default timeout duration.
 *
 * @param resource - The URL endpoint to make the AJAX request to.
 * @param options - The options to forward to `fetch`. To set headers, use the `headers` key for this parameter. To change the default timeout value, use the `timeout` key.
 * @returns Returns null if the status is 204. Otherwise returns the JSON response body.
 * @throws {UnauthenticatedError} Throws this error if the response code is either 401 or 403. This has a higher precedence than FetchError.
 * @throws {FetchError} Throws this error if the response code is non 2xx.
 */
export async function fetchJson(resource: string, options?: any) {
	const headers = new Headers();
	headers.set('content-type', 'application/json');

	if (options?.headers) {
		if (options.headers instanceof Headers) {
			options.headers.forEach((v: string, k: string) => {
				headers.set(k, v);
			});
		} else {
			for (const [k, v] of Object.entries(options.headers)) {
				if (typeof k === 'string' && typeof v === 'string') {
					headers.set(k, v);
				}
			}
		}
	}

	let timeout = DEFAULT_FETCH_TIMEOUT;
	if (typeof options.timeout === 'number') {
		timeout = options.timeout;
	}

	let opts = Object.assign({}, options, { headers }, { signal: AbortSignal.timeout(timeout) });

	try {
		const resp = await fetch(resource, opts);

		if (resp.status === 204) {
			// 204 is generally used when the response is unexpectedly empty.
			return null;
		}

		const payload = await resp.json();

		if (resp.status === 401 || resp.status === 403) {
			throw new UnauthenticatedError(payload.data?.error?.name);
		}

		if (resp.status >= 300) {
			throw new FetchError(`response status is not 2xx`, resp.status, payload);
		}

		// Returns other statuses as-is along with the payload.
		return payload;
	} catch (err: any) {
		if (err.name === 'AbortError') {
			console.warn(`Fetch request timed out after ${timeout / 1000} seconds.`);
		}
		throw err;
	}
}
