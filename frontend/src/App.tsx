import { useState } from 'react';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import type {
	CurrentUser,
	Message,
	User,
} from './Components/types/index';
import { mockUsers } from './data/mockUsers';

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
