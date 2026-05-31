import { useState } from 'react';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import type {
	CurrentUser,
	Message,
	User,
} from './Components/types/index';

const mockUsers: User[] = [
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

function App() {
	const [currentUser] = useState<CurrentUser>({
		id: 'u0',
		username: 'Dawid Łuka',
	});
	const [users, setUsers] = useState<User[]>(mockUsers);
	//If activeUser is matched then it should set new message for them
	//activeUser.id === 'u2' e.g.
	const [selectedUserId, setSelectedUserId] =
		useState<string>(mockUsers[0].id);

	const selectedUser = users.find(
		(u) => u.id === selectedUserId, //Previously I've got stale state, that was not updated after changing user list
	);

	function handleSendMessage(
		activeUserId: string,
		message: string,
	) {
		const newMessage: Message = {
			id: crypto.randomUUID(),
			text: message,
			senderId: currentUser.id,
			timestamp: new Date(),
		};

		setUsers((prevUsers) =>
			prevUsers.map((user) => {
				if (user.id !== activeUserId) return user;
				return {
					...user,
					messages: [...user.messages, newMessage],
				};
			}),
		);

		// if (activeUserId === activeUser.id) {
		// 	setUsers((prevUser) => ([
		// 		...prevUser,
		// 		messages: [...messages, ,]
		// 	]));
		// }
	}

	return (
		<div className='flex h-screen'>
			<Sidebar
				users={users}
				selectedUserId={selectedUserId}
				onSelectedUserId={setSelectedUserId}
			/>
			{selectedUser && (
				<Chat
					user={selectedUser}
					currentUser={currentUser}
					onSendMessage={handleSendMessage}
				/>
			)}
		</div>
	);
}

export default App;
