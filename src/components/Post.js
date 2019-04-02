import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = ({ title, author, path, date, body, fluid}) => {
    return (
        <div>
            <Img fluid={fluid} />
            <h3><Link to={path}>{title}</Link></h3>
            <small>Posted by {author} on {date}</small>
            <p>{body}</p>
            <Link to={path}>Read More</Link>
        </div>       
    )
}

export default Post;