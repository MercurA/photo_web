import { Link } from '@tanstack/react-router'

const Header = () => {
	return (
		<div className="max-w-full grid grid-cols-2 p-4 border-b border-zinc-700">
			<div className="flex flex-col items-start">
				<Link to="/" className="flex items-center space-x-2">
					<div className="text-3xl font-aboreto">Hermes</div>
					<div className="text-3xl font-dancing">Photography</div>
				</Link>
			</div>
			
			<nav className="flex items-center justify-end">
				<ul className="flex space-x-6">
					<li>
						<Link 
							to="/" 
							className="text-lg hover:text-blue-400 transition-colors duration-200"
							activeProps={{
								className: "text-blue-400"
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link 
							to="/gallery" 
							className="text-lg hover:text-blue-400 transition-colors duration-200"
							activeProps={{
								className: "text-blue-400"
							}}
						>
							Gallery
						</Link>
					</li>
					<li>
						<Link 
							to="/about" 
							className="text-lg hover:text-blue-400 transition-colors duration-200"
							activeProps={{
								className: "text-blue-400"
							}}
						>
							About
						</Link>
					</li>
					<li>
						<Link 
							to="/contact" 
							className="text-lg hover:text-blue-400 transition-colors duration-200"
							activeProps={{
								className: "text-blue-400"
							}}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
