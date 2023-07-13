import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing-page">
      <h1>More film grain the better.</h1>
      <Link to="/portfolio">
        <button>Full Gallery</button>
      </Link>
    </div>
  )
}

export default Landing
