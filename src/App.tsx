import PictureContainer from './components/picture/PictureContainer'
import Map from './components/map/Map'
import Drawer from './components/drawer/Drawer'
import { MainContextProvider } from './context/MainContext'
import Header from './components/header/Header'

function App() {
	return (
		<MainContextProvider>
			<div className="w-screen h-screen grid grid-rows-[1fr_3fr_1fr] bg-zinc-900 text-white">
				<Header />
				<PictureContainer />
				<Drawer>
					<Map />
				</Drawer>
			</div>
		</MainContextProvider>
	)
}

export default App
