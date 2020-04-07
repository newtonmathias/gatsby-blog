import React from "react"
import SEO from "../components/seo"
import background from '../images/home.jpg'
import Header from "../components/header"
import TopStories from '../components/TopStories'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import '../components/styles/index.css' 

const IndexPage = () => (
  <div>
    <SEO title="" keywords={['gatsby', 'application', 'react']}/>
    <Header  />
  <div className="home"
  style={{  background:
          `linear-gradient(to bottom, rgba(0,0,0,0)
          39%,rgba(0,0,0,0)
          41%,rgba(0,0,0,0.65)
          100%),
          url('${background}'), #1c1c1c`
            }}
  >
    <div className="home-content">
      <div className="home-text">
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
