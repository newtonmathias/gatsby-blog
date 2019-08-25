import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './App.css';


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }


    render = () => {
        let top_menu_class = `top-menu ${this.state.menu_class}`
        return (
            <div>
                <div className={top_menu_class} >
                <Link className="top-menu-lead" to="/" >The OutRoar</Link>
                    <div className='right'>
                    <Link className="nav-link" to="/news">News</Link>
                      <Link className="nav-link" to="/matchcenter">Match Center</Link>
                      <Link className="nav-link" to="/fifa">Fifa</Link>  
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                    <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
