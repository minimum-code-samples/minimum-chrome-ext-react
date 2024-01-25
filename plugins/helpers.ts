/**
 * Helpers based on chrome-extension-tools (https://github.com/crxjs/chrome-extension-tools/blob/main/packages/rollup-plugin/src/helpers.ts)
 */
export type Unpacked<T> = T extends Array<infer R> ? R : never;

export function isNull(x: unknown): x is null {
	return x === null;
}

export function isPresent<T>(x: null | undefined | T): x is T {
	return !isUndefined(x) && !isNull(x);
}

export function isUndefined(x: unknown): x is undefined {
	return typeof x === 'undefined';
}
