import type { User } from '../Components/types';

export const mockUsers: User[] = [
	{
		id: 'u1',
		username: 'IBot',
		isActive: true,
		messages: [
			{
				id: 'm1',
				text: 'Hej, co słychać?',
				senderId: 'u1',
				timestamp: new Date('2026-05-30T10:14:00'),
			},
			{
				id: 'm2',
				text: 'Co robisz dzisiaj?',
				senderId: 'u1',
				timestamp: new Date('2026-05-30T10:15:00'),
			},
		],
	},
	{
		id: 'u2',
		username: 'Ania Kowalska',
		isActive: true,
		messages: [
			{
				id: 'm3',
				text: 'Widziałeś nowy projekt?',
				senderId: 'u2',
				timestamp: new Date('2026-05-30T09:42:00'),
			},
		],
	},
	{
		id: 'u3',
		username: 'Marek Nowak',
		isActive: false,
		messages: [
			{
				id: 'm4',
				text: 'Dzięki za pomoc wczoraj!',
				senderId: 'u3',
				timestamp: new Date('2026-05-29T18:30:00'),
			},
		],
	},
	{
		id: 'u4',
		username: 'Kasia Wiśniewska',
		isActive: false,
		messages: [
			{
				id: 'm5',
				text: 'Do zobaczenia w piątek',
				senderId: 'u4',
				timestamp: new Date('2026-05-28T20:15:00'),
			},
		],
	},
	{
		id: 'u5',
		username: 'Piotr Zieliński',
		isActive: true,
		messages: [
			{
				id: 'm6',
				text: 'Spotkanie przesunięte na 15:00',
				senderId: 'u5',
				timestamp: new Date('2026-05-30T08:05:00'),
			},
		],
	},
];
