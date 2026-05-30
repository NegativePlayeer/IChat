import type { Message } from './types/index';
import MessageBubble from './MessageBubble';

const MY_ID = 'u0';

function Conversation({
	messages,
}: {
	messages: Message[];
}) {
	return (
		<div className='bg-zinc-50 h-full'>
			<div className='flex-1 overflow-y-auto p-4'>
				{messages.map((message) => (
					<MessageBubble
						key={message.id}
						text={message.text}
						isMine={message.senderId === MY_ID}
						time='10:00'
					/>
				))}
			</div>
		</div>
	);
}

export default Conversation;
