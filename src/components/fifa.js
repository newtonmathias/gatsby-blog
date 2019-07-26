import React from 'react'
import pic from '../images/fifa.jpeg'
import '../components/styles/fifa.css'


const Fifa = () => {
    return (
        <div className="fifa" style={{  backgroundImage: "url(" + pic + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '540px',
            }}
            >
            <div>
            <p className="fifa-text">Fifa tips and tricks</p>
            <button className="fifa-btn">visit</button>
            </div>
        </div>
    )
}

export default Fifa;