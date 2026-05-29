import UserAvatar from './UserAvatar';

function UserChat() {
	return (
		<div className='flex items-center justify-between gap-4 hover:bg-violet-100 px-3 py-2 cursor-pointer'>
			<div className='flex gap-5 items-center'>
				<UserAvatar />
				<div className='flex flex-col gap-1'>
					<h4 className='font-semibold'>Dawid Łuka</h4>
					<p className='text-sm text-gray-500'>
						Message...
					</p>
				</div>
			</div>
			<span className='text-sm self-start text-gray-400 pt-1 '>
				10:16
			</span>
		</div>
	);
}

export default UserChat;
