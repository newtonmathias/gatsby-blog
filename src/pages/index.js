import React from "react"
import './index.css';
import background from '../images/home.jpg'
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Header  />
  <div
  style={{  backgroundImage: "url(" + background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '540px',
            }}
  >
    welcome to the OutRoar
  </div>
  </div>
)

export default IndexPage
