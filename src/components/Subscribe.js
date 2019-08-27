import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../components/styles/Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-smedia">
           <p>Stay Tuned For All The News</p> 
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
  )
}

export default Subscribe
