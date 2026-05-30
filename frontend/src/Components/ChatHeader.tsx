import { usernameShortener } from './helpers/usernameShortener';
import type { User } from './types';
import UserAvatar from './UserAvatar';

function ChatHeader({ userInfo }: User) {
	const shortenName = usernameShortener(userInfo.username);
	return (
		<div className='flex gap-2.5 p-2.5 bg-zinc-200 items-center'>
			<div className='flex gap-4'>
				<UserAvatar
					isActive={userInfo.isActive}
					usernameShort={shortenName}
				/>
				<div>
					<h4 className='font-semibold'>
						{userInfo.username}
					</h4>
					<span className='uppercase text-sm text-gray-400'>
						{userInfo.isActive ? 'online' : 'offline'}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ChatHeader;
