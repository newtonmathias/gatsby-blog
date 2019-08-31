import React from 'react'

import Img from 'gatsby-image'
import '../components/styles/thumbnail.css'
const Thumbnail = ({ title, slug, fluid, tags}) => {
  return (
    <div className="thumbnail">
    <a href={slug}><Img className="thumbnail-image" fluid={fluid} /></a>
    <h3><a className="thumbnail-text" href={slug}>{title}</a></h3>
    <ul className="tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <p className="thumbnail-tag">
                            {tag}
                        </p>  
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Thumbnail
