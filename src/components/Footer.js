import React from 'react'
import { Link } from "gatsby"
import './App.css';
import '../components/styles/Footer.css'




function Footer() {
  return (
    <div className="footer">
    <div className="copyright">
          &copy; 2020 The OutRoar
    </div>
    <div className="footer-bottom">
    <ul id="footer-links" >
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                    <Link to="/matchcenter">Match Center</Link>
                    </li>
                    <li>
                    <Link to="/fifa">Fifa</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>

    </div>
        </div>
  )
}

export default Footer
