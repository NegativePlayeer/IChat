import { usernameShortener } from './helpers/usernameShortener';
import type { User } from './types';
import UserAvatar from './UserAvatar';

function ChatHeader({ user }: { user: User }) {
	const shortenName = usernameShortener(user.username);
	return (
		<div className='flex shrink-0 gap-2.5 p-2.5 bg-zinc-200 items-center'>
			<div className='flex gap-4'>
				<UserAvatar
					isActive={user.isActive}
					usernameShort={shortenName}
				/>
				<div>
					<h4 className='font-semibold'>{user.username}</h4>
					<span className='uppercase text-sm text-gray-400'>
						{user.isActive ? 'online' : 'offline'}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ChatHeader;
