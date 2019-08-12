import React from "react"
import background from '../images/home.jpg'
import Header from "../components/header"
import TopStories from '../components/TopStories'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import TwoColumnGrid from '../components/TwoColumnGrid'
import '../components/styles/index.css'

const IndexPage = () => (
  <div>
    <Header  />
  <div className="home"
  style={{  backgroundImage: "url(" + background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '540px',
            }}
  >
    <div className="home-text">
      <div className="home-content">
        <h1>OUTROAR</h1>
    <p>Chelsea, Fifa, All Things Football</p>
      </div>
    </div>
  </div>
  <div className="wrapper">
      <TopStories />
      <Subscribe />
  </div>
  <Footer />
  </div>
)

export default IndexPage
