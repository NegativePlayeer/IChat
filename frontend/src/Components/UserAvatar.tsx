function UserAvatar({
	isActive,
	usernameShort,
}: {
	isActive: boolean;
	usernameShort: string;
}) {
	return (
		<div className='relative bg-violet-600 text-violet-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0'>
			<span>{usernameShort}</span>
			<div
				className={`absolute inset-8 rounded-full ${isActive ? 'bg-green-500 w-4 h-4 shadow-lg shadow-green-500/50' : 'bg-red-500 w-4 h-4 shadow-lg shadow-red-500/50'} `}
			></div>
		</div>
	);
}

export default UserAvatar;
