import Image from './Image'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import Audio from '../audio/Audio'

const PictureContainer = () => {
	const context = useContext(MainContext)

	return (
		<div
			className="
			relative
			flex 
			flex-col 
			w-full 
			max-w-4xl
			mx-auto 
			gap-4
			sm:gap-6 
			md:gap-8 
			p-2 
			sm:p-3 
			md:p-6
			row-span-1
			row-start-2
		"
		>
			<Image imageSrc={context.selectedImage.path || ''} />
			<Audio />
		</div>
	)
}

export default PictureContainer
