import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

type ImageProps = {
	imageSrc: string
}

const Image = ({ imageSrc }: ImageProps) => {
	const context = useContext(MainContext)
	const { handleImageChange } = context

	const handleImageClickRight = () => {
		handleImageChange('right')
	}
	const handleImageClickLeft = () => {
		handleImageChange('left')
	}

	return (
		<div className="relative w-full flex-shrink-0">
			{/* Image container with responsive aspect ratios */}
			<div
				className="
				w-full 
				aspect-square 
				sm:aspect-[4/3] 
				md:aspect-[3/2] 
				lg:aspect-[16/9] 
				xl:aspect-[16/9]
				overflow-hidden 
				shadow-lg 
				bg-gray-100
			"
			>
				<img
					src={imageSrc}
					alt="Travel destination"
					className="
						absolute 
						inset-0 
						w-full 
						h-full 
						object-cover 
						object-center 
						transition-transform 
						duration-300 
					"
				/>
				<div className="absolute object-cover h-full w-full opacity-50 flex justify-between">
					<div
						onClick={handleImageClickLeft}
						className="hover:bg-white opacity-30 h-full w-10 cursor-pointer"
					></div>
					<div
						onClick={handleImageClickRight}
						className="hover:bg-white opacity-30 h-full w-10 cursor-pointer"
					></div>
				</div>
			</div>
		</div>
	)
}

export default Image
