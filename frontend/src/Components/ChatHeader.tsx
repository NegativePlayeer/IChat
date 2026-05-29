import UserAvatar from './UserAvatar';

function ChatHeader() {
	return (
		<div className='flex gap-2.5 p-2.5 bg-zinc-200 items-center'>
			<div className='flex gap-4'>
				<UserAvatar />
				<div>
					<h4 className='font-semibold'>Dawid Łuka</h4>
					<span className='uppercase text-sm text-gray-400'>
						Online
					</span>
				</div>
			</div>
		</div>
	);
}

export default ChatHeader;
