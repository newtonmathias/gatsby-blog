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
    <h1>OUTROAR</h1>
    <p>Chelsea, Fifa, All Things Football</p>
  </div>
  </div>
)

export default IndexPage
