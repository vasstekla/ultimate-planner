import { Route, Routes } from 'react-router-dom'
import _404 from '../pages/404'
import Tasks from '../pages/tasks/TaskContainer'
import Home from '../pages/Home'
import { withLoggedIn } from './withLoggedIn'

export const AuthRoute = (...args: Parameters<typeof Route>) => Route(...args)

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={withLoggedIn(Tasks)()} />
      <Route path="*" element={<_404 />} />
    </Routes>
  )
}