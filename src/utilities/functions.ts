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
