import type { User } from '../types';

export const usernameShortener = (
	username: string,
): string =>
	username
		.split(' ')
		.map((word) => word.at(0) ?? '')
		.join('') || '?';
