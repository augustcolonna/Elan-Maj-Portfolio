/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { Link } from 'react-router-dom'


function Landing( {data}) {

  // const [photo, setPhoto] = useState();

  // const random =
  //   data[Math.floor(Math.random()* data.length)]
  //   console.log(random)
  // setPhoto(data[random].src)
  
  return (
    <div className="landing-page">
      <div className="photo-types">
        <div>
          <h1>Action & Outdodors</h1>
          <img src='src/assets/ISIMG_6052.jpg'/>
        </div>
        <div>
          <h1>Special Occassions</h1>
        </div>
        <div>
          <h1>Profiles</h1>
        </div>
        <div>
          <h1>Aesthetic</h1>
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
