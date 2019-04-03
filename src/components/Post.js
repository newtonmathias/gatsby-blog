import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'

const Post = ({ title, author, path, date, body, fluid, tags}) => {
    return (
        <div>
            <Link to={path}><Img fluid={fluid} /></Link>
            <h3><Link to={path}>{title}</Link></h3>
            <small>Posted by {author} on {date}</small>
            <p>{body}</p>
            <ul>
                {tags.map(tag => (
                    <li>
                        <Link to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>  
                    </li>
                ))}
            </ul>
            <Link to={path}>Read More</Link>
        </div>       
    )
}

export default Post;