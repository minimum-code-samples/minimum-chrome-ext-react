/**
 * Types used in the application.
 *
 * @module ~src/types
 */

/**
 * The error class to throw when a HTTP response code is non-2xx.
 *
 * The `toString()` method is overridden to return the status code. The `body` member is also returned if available.
 */
export class FetchError extends Error {
	status: number = 0;
	body: any;

	constructor(message: string, status: number, body?: any) {
		super();
		this.name = 'FetchError';

		this.message = message;
		this.status = status;

		if (body) {
			this.body = body;
		}
	}

	toString(): string {
		if (!this.body) {
			return `${this.name}: ${this.message} (${this.status})`;
		}

		return `${this.name}: ${this.message} (${this.status}:${JSON.stringify(this.body)})`;
	}
}

/**
 * Describes an error with failed authentication.
 */
export class UnauthenticatedError extends Error {
	status: number = 0;

	constructor(message: string) {
		super();
		this.name = 'UnauthenticatedError';

		// Maintains proper stack trace for where the error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthenticatedError);
		}

		this.message = message;
	}
}
