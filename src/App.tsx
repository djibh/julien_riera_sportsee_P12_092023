import './App.css'
import { Route, Routes } from 'react-router-dom'

import DashboardPage from './components/pages/DashboardPage'

function App() {
  return <Routes>
    <Route path='/' element={<DashboardPage />} />
    {/* <Route path='*' element={<ErrorPage />} /> */}
  </Routes>
}

export default App
