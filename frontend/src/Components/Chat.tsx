import ChatHeader from './ChatHeader';
import Conversation from './Conversation';
import { Send } from 'lucide-react';
import type { User, Message } from './types';
import React, { useState } from 'react';

function Chat({ user }: { user: User | null }) {
	const [message, setMessage] = useState<string>('');
	const [myMessages, setMyMessages] = useState<Message[]>(
		[],
	);

	function handleMessageSend(
		e: React.SubmitEvent<HTMLFormElement>,
	) {
		e.preventDefault();
		setMyMessages((prevMessages) => {
			return [
				...prevMessages,
				{
					id: crypto.randomUUID(),
					text: message,
					senderId: 'u0',
					timestamp: new Date(),
				},
			];
		});
		setMessage('');
	}

	return (
		<div className='flex flex-col flex-1 h-full bg-zinc-100'>
			<ChatHeader userInfo={user} />
			<Conversation
				messages={user.messages}
				myMessages={myMessages}
			/>
			<form
				className='flex items-center gap-4 p-5 bg-gray-200'
				onSubmit={handleMessageSend}
			>
				<input
					placeholder='Write a message...'
					type='text'
					className='px-4 py-2 grow outline-none border-b-2 border-violet-300 focus:border-violet-600'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className='cursor-pointer text-violet-600'>
					<Send size={32} />
				</button>
			</form>
		</div>
	);
}

export default Chat;
