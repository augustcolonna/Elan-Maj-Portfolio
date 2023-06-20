import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro,
  faCompass,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
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
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/elan.maj/"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/elan-maj-43a609109/"
          >
            linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
