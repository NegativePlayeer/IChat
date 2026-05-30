function IChatLogo({
	size = 48,
	front = '#7c3aed',
	back = '#c4b5fd',
}) {
	return (
		<svg
			width={size * 1.9}
			height={size}
			viewBox='0 0 190 110'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-label='IChat'
		>
			<rect
				x='40'
				y='30'
				width='150'
				height='62'
				rx='18'
				fill={back}
			/>
			<path d='M170 87 L170 110 L148 87 Z' fill={back} />
			<text
				x='115'
				y='71'
				textAnchor='middle'
				fill='#5b21b6'
				style={{
					fontSize: 34,
					fontWeight: 500,
					fontFamily: 'sans-serif',
				}}
			>
				Chat
			</text>

			<rect
				x='0'
				y='0'
				width='62'
				height='56'
				rx='16'
				fill={front}
			/>
			<path d='M15 52 L15 73 L36 52 Z' fill={front} />
			<text
				x='31'
				y='40'
				textAnchor='middle'
				fill='#ffffff'
				style={{
					fontSize: 34,
					fontWeight: 500,
					fontFamily: 'sans-serif',
				}}
			>
				I
			</text>
		</svg>
	);
}

export default IChatLogo;
