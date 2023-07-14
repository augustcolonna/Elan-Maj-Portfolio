import './styles/App.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Carousel from './components/Carousel'
import { slides } from './data/carouselData.json'
// import { gallery } from './data/galleryData.json'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className='page'>
            <Navbar />
            <Carousel data={slides} />
            <Landing />
          </div>
        }
      />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route
        path="/portfolio"
        element={
          <div className='page'>
            <Navbar />
            <Gallery />
          </div>
        }
      />
    </Routes>
  )
}

export default App
