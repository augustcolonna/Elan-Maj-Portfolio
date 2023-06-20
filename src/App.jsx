import './styles/App.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Landing />
          </div>
        }
      />
    </Routes>
  )
}

export default App
