const Arrow = ({ direction }: { direction: string }) => {
	return direction === 'left' ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#000"
			className="cursor-pointer"
		>
			<path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#000"
			className="cursor-pointer"
		>
			<path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
		</svg>
	)
}

export default Arrow
