import './styles/App.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
// import Carousel from './components/Carousel'
import { images } from './data/GalleryData.json'

import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Landing />
          </>
        }
      />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route
        path="/portfolio"
        element={
          <div>
            <Navbar />
            <Gallery data={images}/>
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div>
            <Navbar />
            <ContactMe />
          </div>
        }
      />
    </Routes>
  )
}

export default App
