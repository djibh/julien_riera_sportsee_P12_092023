import './App.css'
import { Route, Routes } from 'react-router-dom'

import DashboardPage from './components/pages/DashboardPage'

function App() {
  return <Routes>
    <Route path='/' element={<DashboardPage />} />
  </Routes>
}

export default App
