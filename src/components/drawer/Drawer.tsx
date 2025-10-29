import { useEffect, useState } from 'react'
import './styles.css'

interface DrawerProps {
	children: React.ReactNode
}

const Drawer = ({ children }: DrawerProps) => {
	const [open, setOpen] = useState(true)
	const [mouseOver, setMouseOver] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (!mouseOver) {
				setOpen(false)
			}
		}, 4000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [mouseOver])

	const toggleDrawer = () => {
		setOpen(!open)
	}

	const handleMouseEnter = () => {
		console.log('mouseenter')
		setMouseOver(true)
	}

	const handleMouseLeave = () => {
		console.log('mouseleave')
		setMouseOver(false)
	}

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`fixed left-0 flex border border-solid transition-transform duration-500 ease-in-out ${open ? 'translate-y-0' : 'translate-y-[calc(100%-0.30rem)]'} bottom-0 w-full h-50 flex-col bg-white`}
		>
			<div className="border-2 relative">
				<div
					className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-12 bg-white rounded-sm cursor-pointer flex items-center justify-center transition-transform duration-300"
					onClick={toggleDrawer}
				>
					<div
						className={`text-black transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
					>
						<img
							className="arrow-drawer-to"
							src="/icons/arrow_up.svg"
							alt="Toggle Drawer"
						/>
					</div>
				</div>
			</div>
			<div className="relative w-full">{children}</div>
		</div>
	)
}
export default Drawer
