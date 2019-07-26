import React from 'react'
import ball from '../images/ball.jpg'
import '../components/styles/MatchCenter.css'


const MatchCenter = () => {
  return (
    <div className="match-center"
    style={{  backgroundImage: "url(" + ball + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '540px',
            }}
    >
    <div>
      <p className="match-center-text">Match reviews and recap</p>
      <button className="match-center-btn">visit</button>
    </div>
      
    </div>
  )
}

export default MatchCenter
