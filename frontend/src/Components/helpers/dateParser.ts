import type { Message } from '../types';

export function dateParser(message: Message): string {
	const hours = message.timestamp
		.getHours()
		.toString()
		.padStart(2, '0');
	const minutes = message.timestamp
		.getMinutes()
		.toString()
		.padStart(2, '0');
	return `${hours}:${minutes}`;
}
