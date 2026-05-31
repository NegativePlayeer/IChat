import UserChat from './UserChat';
import IChatLogo from '../assets/IChatLogo';
import type { User } from './types/index';
import { useState } from 'react';

interface SidebarProps {
	users: User[];
	selectedUserId: string;
	onSelectedUserId: (id: string) => void;
}

function Sidebar({
	users,
	selectedUserId,
	onSelectedUserId,
}: SidebarProps) {
	const [filter, setFilter] = useState<string>('');
	let filteredUsers: User[];

	if (filter === '') {
		filteredUsers = [...users];
	} else {
		filteredUsers = [...users].filter(
			(user) =>
				user.username
					.toLowerCase()
					.indexOf(filter.toLowerCase()) > -1,
		);
	}

	return (
		<nav
			className='flex flex-col w-1/4 z-10 h-full bg-zinc-300 pt-3 shadow-lg shadow-violet-200/50'
			aria-label='Chat list'
		>
			<div className='flex px-5 mb-5 gap-5 items-center'>
				<span className='cursor-pointer text-violet-600'>
					<IChatLogo />
				</span>
				<input
					type='text'
					className=' bg-zinc-200 rounded-sm outline-none px-3 py-2.5 w-4/5 border-b-2 border-violet-300 focus:border-violet-600'
					placeholder='Search conversations...'
					aria-label='Search conversations'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
			<div>
				{filteredUsers.map((user) => (
					<UserChat
						key={user.id}
						userInfo={user}
						selectedUser={selectedUserId === user.id}
						onClick={() => onSelectedUserId(user.id)}
					/>
				))}
			</div>
		</nav>
	);
}

export default Sidebar;
