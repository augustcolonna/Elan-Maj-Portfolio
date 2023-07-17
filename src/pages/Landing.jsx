/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [actionPhoto, setActionPhoto] = useState();
  const [specialPhoto, setSpecialPhoto] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [aestheticPhoto, setAestheticPhoto] = useState();
  

  const actionAndOutDoors = ['/src/assets/CPIMG_5564.jpg', '/src/assets/ISIMG_6077.jpg', '/src/assets/G-IMG_2859.jpg', 'src/assets/G-IMG_2528.jpg', 'src/assets/SLPIMG_5961.jpg']

  const specialOccassions = ['src/assets/EL236A1709.jpg', 'src/assets/EL236A1769.jpg', 'src/assets/EL236A1788.jpg','src/assets/EL236A1793.jpg']

  const profileShots = ['src/assets/G-IMG_4574.jpg', 'src/assets/FAIMG_6846.jpg', 'src/assets/CPIMG_5581.jpg', 'src/assets/EL236A1906.jpg', 'src/assets/FAIMG_6837.jpg']

  const aestheticShots = ['src/assets/_MG_0427.jpg', 'src/assets/SFIMG_6600.jpg', 'src/assets/SFIMG_6617.jpg', 'src/assets/G-IMG_2718.jpg', 'src/assets/SLPIMG_5824.jpg']

  // useEffect(() => {
    
  // })
  
 
  

  return (
    <div className="landing-page">
      <div className="photo-types">
        <div className='photo-container' onMouseEnter={() =>  setActionPhoto(actionAndOutDoors[Math.floor(Math.random()* actionAndOutDoors.length)]) }>
          <h1>Action & Outdodors</h1>
          <img className='fill' src={actionPhoto} />
        </div>
        <div className='photo-container' onMouseEnter={() =>  setSpecialPhoto(specialOccassions[Math.floor(Math.random()* specialOccassions.length)]) }>
          <h1>Special Occassions</h1>
          <img className='fill' src={specialPhoto} />
        </div>
        <div className='photo-container' onMouseEnter={() =>  setProfilePhoto(profileShots[Math.floor(Math.random()* profileShots.length)]) }>
          <h1>Profiles</h1>
          <img className='fill' src={profilePhoto} />
        </div>
        <div className='photo-container' onMouseEnter={() =>  setAestheticPhoto(aestheticShots[Math.floor(Math.random()* aestheticShots.length)]) }>
          <h1>Aesthetic</h1>
          <img className='fill' src={aestheticPhoto} />
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
