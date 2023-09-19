import './App.css'
import { Route, Routes } from 'react-router-dom'

import DashboardPage from './pages/Dashboard'

function App() {
  return <Routes>
    <Route path='/' element={<DashboardPage />} />
  </Routes>
}

export default App
