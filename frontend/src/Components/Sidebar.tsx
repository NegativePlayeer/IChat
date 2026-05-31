// import { Menu } from 'lucide-react';
import UserChat from './UserChat';
import IChatLogo from '../../public/IChatLogo';
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
	let filterUser: User[];

	if (filter === '') {
		filterUser = [...users];
	} else {
		filterUser = [...users].filter(
			(user) =>
				user.username
					.toLowerCase()
					.indexOf(filter.toLocaleLowerCase()) > -1,
		);
	}

	return (
		<div className='flex flex-col w-1/4 z-10 h-full bg-zinc-300 pt-3 shadow-lg shadow-violet-200/50'>
			<div className='flex px-5 mb-5 gap-5 items-center'>
				<span className='cursor-pointer text-violet-600'>
					<IChatLogo />
				</span>
				<input
					type='text'
					className='border-none bg-zinc-200 rounded-sm outline-none px-3 py-2.5 w-4/5'
					placeholder='Search...'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
			<div>
				{filterUser.map((user) => (
					<UserChat
						key={user.id}
						userInfo={user}
						selectedUser={selectedUserId === user.id}
						onClick={() => onSelectedUserId(user.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
