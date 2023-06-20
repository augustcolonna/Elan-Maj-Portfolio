import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing-page">
      <h1>More film grain the better.</h1>
      <div className='sample-images'>
      {/* <img src={'../assets/CPIMG_5431.jpg'} alt='image'> </img> */}

      </div>
      
  
      
      
      
      <Link to="/portfolio">
        <button>Take a look</button>
      </Link>
    </div>
  )
}

export default Landing
