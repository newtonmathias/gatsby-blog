import React from 'react'
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
    <div className="contact">
        <div className="subscribe-smedia">
           <p className="contact-text">You can React us through the following social media accounts</p> 
           <a
  href="https://www.facebook.com/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/"
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