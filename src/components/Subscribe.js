import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../components/styles/Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-smedia">
           <p className="contact-text">Stay Tuned For All The News</p> 
           <a
    href="https://www.youtube.com/channel/UCWEufhV3nWKCXNlTYnNHu4g/"
    className="youtube social"
 >
    <FontAwesomeIcon icon={faYoutube} size="2x" color ="red"/>
 </a>
<a href="https://www.twitter.com/cfcOutroar" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/outroar_football"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
        </div>

    </div>
  )
}

export default Subscribe
