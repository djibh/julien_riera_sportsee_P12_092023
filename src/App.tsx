import './App.css'
import { Route, Routes } from 'react-router-dom'

import DashboardPage from './components/dashboard/Dashboard'
import Navbar from './layout/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
