import React from 'react'
import { slugify } from '../utility/utilityFunction'

import Img from 'gatsby-image'
import '../components/styles/thumbnail.css'
const Thumbnail = ({ title, author, slug, date, body, fluid, tags}) => {
  return (
    <div className="thumbnail">
    <a href={slug}><Img className="thumbnail-image" fluid={fluid} /></a>
    <h3><a className="thumbnail-text" href={slug}>{title}</a></h3>
    <ul className="tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <a className="thumbnail-tag" href={`/tag/${slugify(tag)}`}>
                            {tag}
                        </a>  
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Thumbnail
