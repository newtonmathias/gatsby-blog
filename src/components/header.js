import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';
const Header = ({ siteTitle }) => (
  <nav className="navbar">
            <span className="navbar-toggle" id="navbar-toggle">
                <i className="fas fa-bars"></i>
            </span>
                    <Link to="/" className="logo">{siteTitle}</Link>
                <ul className="main-nav" id="menu">
                    <li>
                        <Link to="/news" className="nav-link">News</Link>
                    </li>
                    <li>
                    <Link to="/matchcenter" className="nav-link">Match Center</Link>
                    </li>
                    <li>
                    <Link to="/fifa" className="nav-link">Fifa</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
