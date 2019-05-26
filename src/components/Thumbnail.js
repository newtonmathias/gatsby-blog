import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
const Thumbnail = ({ title, author, slug, date, body, fluid, tags}) => {
  return (
    <div>
    <Link to={slug}><Img fluid={fluid} /></Link>
    <h3><Link to={slug}>{title}</Link></h3>
    </div>
  )
}

export default Thumbnail
