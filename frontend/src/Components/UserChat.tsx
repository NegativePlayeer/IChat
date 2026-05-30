import UserAvatar from './UserAvatar';
import { dateParser } from './helpers/dateParser';
import { usernameShortener } from './helpers/usernameShortener';
import type { User } from './types/index';

interface UserChatProps {
	userInfo: User;
	selectedUser: boolean;
	onClick: () => void;
}

function UserChat({
	userInfo,
	selectedUser,
	onClick,
}: UserChatProps) {
	const shortenName = usernameShortener(userInfo.username);

	return (
		<div
			className={`flex items-center justify-between gap-4  px-3 py-2 cursor-pointer ${selectedUser ? 'bg-violet-200' : 'hover:bg-violet-100'}`}
			onClick={onClick}
		>
			<div className='flex gap-5 items-center'>
				<UserAvatar
					isActive={userInfo.isActive}
					usernameShort={shortenName}
				/>
				<div className='flex flex-col gap-1'>
					<h4 className='font-semibold'>
						{userInfo.username}
					</h4>
					<p className='text-sm text-gray-500'>
						{userInfo.messages.at(-1)?.text}
					</p>
				</div>
			</div>
			<span className='text-sm self-start text-gray-400 pt-1 '>
				{dateParser(userInfo.messages.at(-1))}
			</span>
		</div>
	);
}

export default UserChat;
