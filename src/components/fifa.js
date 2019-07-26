import React from 'react'
import pic from '../images/fifa.jpeg'

const Fifa = () => {
    return (
        <div style={{  backgroundImage: "url(" + pic + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '540px',
            }}
            >
            <p>Fifa tips and tricks</p>
            <button>visit</button>
        </div>
    )
}

export default Fifa;