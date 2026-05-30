import ChatHeader from './ChatHeader';
import Conversation from './Conversation';
import { Send } from 'lucide-react';
import type { User } from './types';

function Chat({ user }: User | null) {
	return (
		<div className='flex flex-col flex-1 h-full bg-zinc-100'>
			<ChatHeader userInfo={user} />
			<Conversation messages={user.messages} />
			<div className='flex items-center gap-4 p-5 bg-gray-200'>
				<input
					placeholder='Write a message...'
					type='text'
					className='px-4 py-2 grow outline-none border-b-2 border-violet-300 focus:border-violet-600'
				/>
				<button className='cursor-pointer text-violet-600'>
					<Send size={32} />
				</button>
			</div>
		</div>
	);
}

export default Chat;
