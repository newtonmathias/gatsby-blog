import React from 'react'
import '../components/styles/Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-smedia">
           <p>Follow us for updates</p> 
        </div>
        <div className="subscribe-email">
           <form>
            <input type="text"/>
            <button>subscribe</button>
        </form> 
        </div>
    </div>
  )
}

export default Subscribe
