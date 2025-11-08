import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/hero/Hero'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <Hero />
      <div className="mt-8 text-center">
        <p className="text-lg mb-4">Welcome to Hermes Photography</p>
        <p className="text-gray-300">Explore our gallery of stunning travel photography</p>
      </div>
    </div>
  )
}