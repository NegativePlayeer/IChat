import ChatHeader from './ChatHeader';
import Conversation from './Conversation';
import { Send } from 'lucide-react';
import type { User, CurrentUser } from './types';
import React, { useState } from 'react';

interface ChatProps {
	user: User;
	currentUser: CurrentUser;
	onSendMessage: (
		activeUser: string,
		message: string,
	) => void;
}

function Chat({
	user,
	currentUser,
	onSendMessage,
}: ChatProps) {
	const [message, setMessage] = useState<string>('');

	function handleMessageSend(
		e: React.SubmitEvent<HTMLFormElement>,
	) {
		e.preventDefault();
		if (!message.trim()) return; //Whitespaces are still doable
		onSendMessage(user.id, message);
		setMessage('');
	}

	return (
		<main className='flex flex-col flex-1 h-full bg-zinc-100'>
			<ChatHeader user={user} />
			<Conversation
				messages={user.messages}
				currentUserId={currentUser.id}
				username={user.username}
			/>
			<form
				className='flex shrink-0 items-center gap-4 p-5 bg-gray-200'
				onSubmit={handleMessageSend}
			>
				<input
					placeholder='Write a message...'
					type='text'
					className='px-4 py-2 grow outline-none border-b-2 border-violet-300 focus:border-violet-600'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					aria-label='Message'
				/>
				<button
					type='submit'
					aria-label='Send Message'
					className='cursor-pointer text-violet-600'
				>
					<Send size={32} />
				</button>
			</form>
		</main>
	);
}

export default Chat;
