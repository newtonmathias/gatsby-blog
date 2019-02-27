import React from "react"
import background from '../images/home.jpg'
import Header from "../components/header"
import TopStories from '../components/TopStories'
import TwoColGrid from '../components/TwoColGrid'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
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
  <TopStories />
  <TwoColGrid />
  <Subscribe />
  <Footer />
  </div>
)

export default IndexPage
