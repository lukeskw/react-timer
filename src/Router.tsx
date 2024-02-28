import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
