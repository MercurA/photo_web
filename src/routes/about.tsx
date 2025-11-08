import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 max-w-4xl mx-auto">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-aboreto mb-8">About Hermes Photography</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to my world of travel photography. I'm passionate about capturing 
              the beauty of destinations around the globe, from bustling cities to serene landscapes.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Each photograph tells a story of adventure, culture, and the unique moments 
              that make traveling so special. Through my lens, I aim to share the wonder 
              and diversity of our world.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My journey in photography began with a simple desire to preserve memories 
              of my travels. It has since evolved into a passion for documenting the 
              extraordinary in the everyday moments of different cultures and places.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bebas mb-4">Photography Style</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Travel & Landscape Photography</li>
              <li>• Cultural Documentation</li>
              <li>• Street Photography</li>
              <li>• Natural Light Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}