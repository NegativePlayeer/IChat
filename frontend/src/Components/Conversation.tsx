import type { Message } from './types/index';
import MessageBubble from './MessageBubble';
import { dateParser } from './helpers/dateParser';

function Conversation({
	messages,
	myMessages,
	currentUserId,
}: {
	messages: Message[];
	myMessages: Message[];
	currentUserId: string;
}) {
	const allMessages = [...messages, ...myMessages]
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
		<div className='bg-zinc-50 h-full'>
			<div className='flex-1 overflow-y-auto p-4'>
				{allMessages.map((message) => (
					<MessageBubble
						key={message.id}
						text={message.text}
						isMine={message.senderId === currentUserId}
						time={message.timestamp}
					/>
				))}
			</div>
		</div>
	);
}

export default Conversation;
