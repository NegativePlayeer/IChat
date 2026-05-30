import type { Message } from './types/index';
import MessageBubble from './MessageBubble';
import { dateParser } from './helpers/dateParser';

const MY_ID = 'u0';

function Conversation({
	messages,
	myMessages,
}: {
	messages: Message[];
	myMessages: Message[];
}) {
	const allMessages = [...messages, ...myMessages]
		.map((message) => {
			return {
				...message,
				timestamp: dateParser(message),
			};
		})
		.sort((a, b) => +a.timestamp - +b.timestamp);

	return (
		<div className='bg-zinc-50 h-full'>
			<div className='flex-1 overflow-y-auto p-4'>
				{allMessages.map((message) => (
					<MessageBubble
						key={message.id}
						text={message.text}
						isMine={message.senderId === MY_ID}
						time={message.timestamp}
					/>
				))}
			</div>
		</div>
	);
}

export default Conversation;
