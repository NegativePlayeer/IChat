import { Menu } from 'lucide-react';
import UserChat from './UserChat';

function Sidebar() {
	return (
		<div className='flex flex-col w-1/4 z-10 h-full bg-zinc-300 pt-3 shadow-lg shadow-violet-200/50'>
			<div className='flex px-5 mb-5 gap-5 items-center'>
				<span className='cursor-pointer text-violet-600'>
					<Menu size={32} />
				</span>
				<input
					type='text'
					className='border-none bg-zinc-200 rounded-sm outline-none px-3 py-2.5 w-4/5'
					placeholder='Search...'
				/>
			</div>
			<div>
				<UserChat />
				<UserChat />
				<UserChat />
			</div>
		</div>
	);
}

export default Sidebar;
