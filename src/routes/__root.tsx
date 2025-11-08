import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/header/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-screen h-screen grid grid-rows-[auto_1fr] bg-zinc-900 text-white">
        <Header />
        <main className="overflow-hidden">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})