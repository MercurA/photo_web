import type { ImageDetailsType } from '../../types'

type ImageDetailsProps = {
	children?: React.ReactNode
	imageDetails: ImageDetailsType
}

const ImageDetails = ({ children, imageDetails }: ImageDetailsProps) => {
	const { location, description } = imageDetails

	return (
		<div className="flex flex-grow min-h-0 text-right flex-row justify-between items-center">
			{children}
			<div className="space-y-2 text-sm">
				<div>
					<p className="text-md font-semibold">{location}</p>
					<p className="text-gray-600">{description}</p>
				</div>
			</div>
		</div>
	)
}

export default ImageDetails
