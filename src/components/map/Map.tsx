import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useCallback, useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContext'
import type { ImageDetailsType, MainContextType } from '../../types'
import { customLocationIcon } from './customIcons'

const EMAIL = 'necrosis.state@gmail.com'

const mapStyles = [
	'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
	'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
	'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
	'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
]

const MapHandler = ({ position }: { position: [number, number] }) => {
	const map = useMap()

	useEffect(() => {
		if (position) {
			map.setView(position, map.getZoom())
		}
	}, [position, map])

	return null
}

const geocodeCity = async (cityName: string) => {
	// Use direct API call to Nominatim (CORS-enabled)
	const response = await fetch(
		`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}&email=${EMAIL}`,
		{
			headers: {
				'User-Agent': 'Travel App (necrosis.state@gmail.com)',
			},
		}
	)
	const data = await response.json()
	return data
}

const Map = () => {
	const context = useContext(MainContext) as MainContextType
	const [position, setPosition] = useState<[number, number] | null>(null)
	const [geocodeCache, setGeocodeCache] = useState<
		Record<string, [number, number]>
	>({})

	const getCachedGeocode = useCallback(
		async (cityName: string): Promise<[number, number] | null> => {
			if (geocodeCache[cityName]) {
				return geocodeCache[cityName]
			}

			try {
				const data = await geocodeCity(cityName)
				if (data && data.length > 0) {
					const coords: [number, number] = [
						parseFloat(data[0].lat),
						parseFloat(data[0].lon),
					]
					// Update cache
					setGeocodeCache(prev => ({ ...prev, [cityName]: coords }))
					return coords
				}
			} catch (error) {
				console.error(`Failed to geocode ${cityName}:`, error)
			}

			return null
		},
		[geocodeCache]
	)

	useEffect(() => {
		const location = context.selectedImage?.location
		if (location) {
			getCachedGeocode(location).then(coords => {
				if (coords) {
					setPosition(coords)
				}
			})
		}
	}, [context.selectedImage?.location, getCachedGeocode])

	useEffect(() => {
		const cityNames =
			context.images.map((img: ImageDetailsType) => img.location) || []

		cityNames.forEach(async (cityName: string, index: number) => {
			setTimeout(() => {
				getCachedGeocode(cityName)
			}, index * 200)
		})
	}, [getCachedGeocode])

	const handleMarkerSelect = (image: ImageDetailsType) => {
		console.log(`Marker for ${image.location} selected`)
		context.setSelectedImage(image)
	}

	const renderMarkers = () => {
		return Object.entries(geocodeCache).map(([city, coords], index) => (
			<Marker
				riseOffset={index * 2}
				key={city}
				position={coords}
				interactive={true}
				icon={customLocationIcon()}
				eventHandlers={{
					click: () => {
						const foundImage = context.images.find(
							(img: ImageDetailsType) => img.location === city
						)
						if (foundImage) {
							handleMarkerSelect(foundImage)
						}
					},
				}}
			></Marker>
		))
	}

	return (
		<div className="relative w-full h-50">
			<MapContainer
				center={position || [51.505, -0.09]}
				zoom={3}
				scrollWheelZoom={false}
				style={{ height: '100%', width: '100%' }}
			>
				<MapHandler position={position || [51.505, -0.09]} />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
					url={mapStyles[3]}
				/>
				{renderMarkers()}
			</MapContainer>
		</div>
	)
}

export default Map
