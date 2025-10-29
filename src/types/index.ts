export type ImageDetailsType = {
	audio: string
	path: string
	location: string
	description: string
}

export type MainContextType = {
	images: ImageDetailsType[]
	selectedImage: ImageDetailsType
	setSelectedImage: (image: ImageDetailsType) => void
	handleImageChange: (direction: 'left' | 'right') => void
}
