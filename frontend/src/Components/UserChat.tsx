import UserAvatar from './UserAvatar';
import type { User } from './types/index';

function UserChat({ userInfo }: User) {
	const userLastMessageData =
		userInfo.messages.at(-1).timestamp;
	const messageDate = `${userLastMessageData?.getHours().toString().padStart(2, '0')}:${userLastMessageData?.getMinutes().toString().padStart(2, '0')}`;

	return (
		<div className='flex items-center justify-between gap-4 hover:bg-violet-100 px-3 py-2 cursor-pointer'>
			<div className='flex gap-5 items-center'>
				<UserAvatar isActive={userInfo.isActive} />
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
				{messageDate}
			</span>
		</div>
	);
}

export default UserChat;
