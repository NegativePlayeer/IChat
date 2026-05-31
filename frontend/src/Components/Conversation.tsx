import type { Message } from './types/index';
import MessageBubble from './MessageBubble';
import { dateParser } from './helpers/dateParser';

function Conversation({
	messages,
	// myMessages, mock solution to fake-logic
	currentUserId,
}: {
	messages: Message[];
	// myMessages: Message[];
	currentUserId: string;
}) {
	const allMessages = [...messages]
		.sort(
			(a, b) =>
				a.timestamp.getTime() - b.timestamp.getTime(),
		)
		.map((message) => {
			return {
				...message,
				timestamp: dateParser(message),
			};
		});

	return (
		<div className='flex-1 bg-zinc-50 min-h-0 overflow-y-auto p-4'>
			{allMessages.map((message) => (
				<MessageBubble
					key={message.id}
					text={message.text}
					isMine={message.senderId === currentUserId}
					time={message.timestamp}
				/>
			))}
		</div>
	);
}

export default Conversation;
