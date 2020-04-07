import React from 'react'
import SEO from "../components/seo"
import '../components/styles/contact.css' 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout"


const Contact = () => {
  return (
    <Layout>
          <SEO title="CONTACT" keywords={['gatsby', 'application', 'react']}/>
    <div className="contact">
        <div className="subscribe-smedia">
           <p className="contact-text">You can Reach us through the following social media accounts</p> 
           <a
  href="https://www.facebook.com/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/cfcOutroar" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/outroar_football/"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
        </div>

    </div>

    </Layout>
  )
}

export default Contact;