import './styles/App.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Carousel from './components/Carousel'
import {slides} from './data/carouselData.json'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Carousel data={slides}/>
            <Landing />
          </div>
        }
      />
    </Routes>
  )
}

export default App
