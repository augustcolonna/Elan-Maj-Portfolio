/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [actionPhoto, setActionPhoto] = useState()
  const [specialPhoto, setSpecialPhoto] = useState()
  const [profilePhoto, setProfilePhoto] = useState()
  const [aestheticPhoto, setAestheticPhoto] = useState()

  const actionAndOutDoors = [
    'CPIMG_5564.jpg',
    'ISIMG_6077.jpg',
    'G-IMG_2859.jpg',
    'G-IMG_2528.jpg',
    'SLPIMG_5961.jpg',
  ]

  const specialOccassions = [
    'EL236A1709.jpg',
    'EL236A1769.jpg',
    'EL236A1788.jpg',
    'EL236A1793.jpg',
  ]

  const profileShots = [
    'G-IMG_4574.jpg',
    'FAIMG_6846.jpg',
    'CPIMG_5581.jpg',
    'EL236A1906.jpg',
    'FAIMG_6837.jpg',
  ]

  const aestheticShots = [
    '_MG_0427.jpg',
    'SFIMG_6600.jpg',
    'SFIMG_6617.jpg',
    'G-IMG_2718.jpg',
    'SLPIMG_5824.jpg',
  ]

  const generateUrl = (imageArray, setPhoto) => {
    const imageIndex = Math.floor(Math.random() * imageArray.length)
    const url = import.meta.env.VITE_URLPREFIX + imageArray[imageIndex]
    setPhoto(url)
  }


  return (
    <div className="landing-page">
      <div className="photo-types">
        <div
          className="photo-container"
          onClick={() => generateUrl(actionAndOutDoors, setActionPhoto)}
        >
          <h1>Action & Outdodors</h1>
          <img className="fill" src={actionPhoto} />
        </div>
        <div
          className="photo-container"
          onClick={() => generateUrl(specialOccassions, setSpecialPhoto)}
        >
          <h1>Special Occassions</h1>
          <img className="fill" src={specialPhoto} />
        </div>
        <div
          className="photo-container"
          onClick={() => generateUrl(profileShots, setProfilePhoto)}
        >
          <h1>Profiles</h1>
          <img className="fill" src={profilePhoto} />
        </div>
        <div
          className="photo-container"
          onClick={() => generateUrl(aestheticShots, setAestheticPhoto)}
        >
          <h1>Aesthetic</h1>
          <img className="fill" src={aestheticPhoto} />
        </div>
      </div>

      <h1>More film grain the better.</h1>
      <Link to="/portfolio">
        <button>Full Gallery</button>
      </Link>
    </div>
  )
}

export default Landing
