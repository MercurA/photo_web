import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import SideMenu from '../components/menu/SideMenu'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-screen h-screen grid grid-rows-[auto_1fr] bg-zinc-900 text-white">
       <SideMenu>
         <Outlet />
       </SideMenu>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})