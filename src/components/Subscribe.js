import React from 'react'
import '../components/styles/Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-smedia">
           <p>Follow us for updates</p> 
        </div>
        <form className="subscribe-email">
            <input className="input-email" type="text" placeholder="Email address"/>
            <button>subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe
