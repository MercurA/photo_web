import { createFileRoute } from '@tanstack/react-router'
import PictureContainer from '../components/picture/PictureContainer'
import Map from '../components/map/Map'
import Drawer from '../components/drawer/Drawer'
import { MainContextProvider } from '../context/MainContext'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  return (
    <MainContextProvider>
      <div className="h-full grid grid-rows-[2fr_1fr]">
        <PictureContainer />
        <Drawer>
          <Map />
        </Drawer>
      </div>
    </MainContextProvider>
  )
}