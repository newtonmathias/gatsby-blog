import React from 'react'
import pic from '../images/fifa.jpeg'
import ball from '../images/ball.jpg'
import '../components/styles/TwoColumnGrid.css'
import { Link } from "gatsby"



const TwoColumnGrid = () => {
    return (
        <div>
            <img className="two-column-grid" src={ball} alt="match center"/>
            <img className="two-column-grid" src={pic} alt="fifa"/>
        </div>
    )
}

export default TwoColumnGrid;