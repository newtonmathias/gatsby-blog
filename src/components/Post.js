import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'
import '../components/styles/post.css'



const Post = ({ title, author, slug, date, body, fluid, tags}) => {
    return (
        <div className="post">
        <Link to={slug}><Img className="post-img" fluid={fluid} /></Link>
        <h3><Link className="post-title" to={slug}>{title}</Link></h3>
            <small>{date}</small>
            <p className="post-text">{body}</p>
        </div>       
    )
}

export default Post;