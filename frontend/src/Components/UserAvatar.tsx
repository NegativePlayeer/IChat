function UserAvatar() {
	return (
		<div className='relative bg-violet-600 text-violet-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0'>
			<span>Ja</span>
			<div className='absolute inset-8 rounded-full bg-green-500 w-4 h-4 shadow-lg shadow-green-500/50'></div>
		</div>
	);
}

export default UserAvatar;
