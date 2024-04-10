/**
 * Constants used in the application.
 *
 * @module ~src/constants
 */

/**
 * The default number of milliseconds before the fetch requests throw errors due to timeout.
 */
export const DEFAULT_FETCH_TIMEOUT = import.meta.env.PROD ? 8000 : 5000;
