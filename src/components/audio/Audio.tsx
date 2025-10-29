import { useContext, useState, useRef, useEffect } from 'react'
import type { MainContextType } from '../../types'
import { MainContext } from '../../context/MainContext'
import { AudioIcon } from '../icons/AudioIcon'

type AudioProps = {
	alignItems?: string
}

const Audio = ({ alignItems }: AudioProps) => {
	const context = useContext(MainContext) as MainContextType
	const [soundOn, setSoundOn] = useState(false)
	const audioRef = useRef<HTMLAudioElement>(null)

	const handleAudioToggle = async () => {
		const newSoundOn = !soundOn
		setSoundOn(newSoundOn)

		if (audioRef.current) {
			try {
				if (newSoundOn) {
					audioRef.current.muted = false
					await audioRef.current.play()
				} else {
					audioRef.current.muted = true
					audioRef.current.pause()
				}
			} catch (error) {
				console.log('Audio play failed:', error)
				// Fallback: just toggle mute state
				audioRef.current.muted = !newSoundOn
			}
		}
	}

	// Reset audio when image changes
	useEffect(() => {
		setSoundOn(false)
		if (audioRef.current) {
			audioRef.current.muted = true
			audioRef.current.pause()
		}
	}, [context.selectedImage.audio])

	return (
		<div
			onClick={handleAudioToggle}
			className={`absolute p-4 flex items-center gap-2 cursor-pointer select-none ${alignItems}`}
		>
			<AudioIcon isOn={soundOn} />
			<audio
				ref={audioRef}
				src={context.selectedImage.audio || ''}
				loop
				muted={!soundOn}
				preload="metadata"
			/>
		</div>
	)
}

export default Audio
