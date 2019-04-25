import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'

const Thumbnail = ({ title, author, slug, date, body, fluid, tags}) => {
  return (
    <div>
    <h3><Link to={slug}>{title}</Link></h3>
    <Link to={slug}><Img fluid={fluid} /></Link>
    </div>
  )
}

export default Thumbnail
