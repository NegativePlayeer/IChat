type MessageBubbleProps = {
	text: string;
	isMine: boolean;
	time: string;
};

function MessageBubble({
	text,
	isMine,
	time,
}: MessageBubbleProps) {
	return (
		<div
			className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-2`}
		>
			<div
				className={`max-w-sm px-5 py-2.5 rounded-xl ${isMine ? 'bg-violet-500 text-violet-100 rounded-br-sm shadow-lg shadow-violet-500/50' : 'bg-violet-200 text-zinc-800 rounded-bl-sm shadow-lg shadow-violet-200/50'}`}
			>
				<p className='text-md'>{text}</p>
				<span className='text-xs opacity-60 float-right mt-1'>
					{time}
				</span>
			</div>
		</div>
	);
}

export default MessageBubble;
