import { createContext, useEffect, useState } from 'react'
import type { ImageDetailsType, MainContextType } from '../types'

export const MainContext = createContext({} as MainContextType)

export const MainContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const data = {
		images: [
			{
				path: '/images/image_2.jpg',
				audio: '/audio/ambient_sound_1.wav',
				location: 'Cluj-Napoca',
				description: 'Description for image one.',
			},
			{
				path: '/images/image_1.jpg',
				audio: '/audio/ambient_sound_1.wav',
				location: 'Matterhorn',
				description: 'Description for image two.',
			},
		],
		selectedImage: {} as ImageDetailsType,
	}
	const [images, setImages] = useState(data.images)
	const [selectedImage, setSelectedImage] = useState(data.selectedImage)

	useEffect(() => {
		setImages(data.images)
		setSelectedImage(data.images[0])
	}, [])

	useEffect(() => {
		if (!selectedImage.hasOwnProperty('path')) {
			setSelectedImage(prev => ({ ...prev, ...selectedImage }))
		}
	}, [selectedImage])

	const handleImageChange = (direction: 'left' | 'right') => {
		const currentIndex = images.findIndex(
			img => img.path === selectedImage.path
		)
		let newIndex =
			direction === 'left' ? currentIndex - 1 : currentIndex + 1
		if (newIndex < 0) newIndex = images.length - 1
		if (newIndex >= images.length) newIndex = 0
		setSelectedImage(images[newIndex])
	}

	return (
		<MainContext.Provider
			value={{
				images,
				selectedImage,
				setSelectedImage,
				handleImageChange,
			}}
		>
			{children}
		</MainContext.Provider>
	)
}
