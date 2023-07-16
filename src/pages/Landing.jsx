import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing-page">
      <div>
        <h1>Action & Outdodors</h1>
      </div>
      <div>
        <h1>Engagement & Special Occassions</h1>
      </div>
      <div>
        <h1>Profiles and Headshots</h1>
      </div>
      <div>
        <h1>Aesthetic</h1>
      </div>
      <h1>More film grain the better.</h1>
      <Link to="/portfolio">
        <button>Full Gallery</button>
      </Link>
    </div>
  )
}

export default Landing
