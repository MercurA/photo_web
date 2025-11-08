import { Link } from '@tanstack/react-router'

const Hero = () => {
	return (
		<section className="hero text-center space-y-6">
			<h1 className="text-5xl font-aboreto mb-4">Welcome to Our Travel Site</h1>
			<p className="text-xl text-gray-300 mb-8">Your adventure starts here. Explore the world with us!</p>
			<div className="space-x-4">
				<Link 
					to="/gallery"
					className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
				>
					View Gallery
				</Link>
				<Link 
					to="/about"
					className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
				>
					Learn More
				</Link>
			</div>
		</section>
	)
}

export default Hero
