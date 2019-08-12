import React from 'react'
import { Link } from 'gatsby'
import { slugify } from '../utility/utilityFunction'

import Img from 'gatsby-image'
import '../components/styles/thumbnail.css'
const Thumbnail = ({ title, author, slug, date, body, fluid, tags}) => {
  return (
    <div className="thumbnail">
    <Link to={slug}><Img className="thumbnail-image" fluid={fluid} /></Link>
    <h3><Link className="thumbnail-text" to={slug}>{title}</Link></h3>
    <ul className="tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link className="thumbnail-tag" to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>  
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Thumbnail
