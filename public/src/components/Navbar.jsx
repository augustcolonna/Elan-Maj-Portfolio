import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro,
  faCompass,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'

const Navbar = () => {
  // const [currentPage, setCurrentPage] = useState(false)
  
  return (
    <div className="nav-bar">
      <Link id="logo" to="/">
        <h1>Elan Maj</h1>
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/aboutme"
        >
          <FontAwesomeIcon icon={faPerson} style={{ color: '#e76a30' }} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faCameraRetro} style={{ color: '#e76a30' }} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faCompass} style={{ color: '#e76a30' }} />
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
