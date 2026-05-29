import MessageBubble from './MessageBubble';

function Conversation() {
	return (
		<div className='bg-zinc-50 h-full'>
			<div className='flex-1 overflow-y-auto p-4'>
				<MessageBubble
					text='Hej, co słychać?'
					isMine={false}
					time='10:14'
				/>
				<MessageBubble
					text='Siema, wszystko spoko!'
					isMine={true}
					time='10:15'
				/>
				<MessageBubble
					text='Co robisz dzisiaj?'
					isMine={false}
					time='10:15'
				/>
				<MessageBubble
					text='Nic szczególnego, koduję'
					isMine={true}
					time='10:16'
				/>
			</div>
		</div>
	);
}

export default Conversation;
