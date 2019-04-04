import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'

const Post = ({ title, author, slug, date, body, fluid, tags}) => {
    return (
        <div>
            <Link to={slug}><Img fluid={fluid} /></Link>
            <h3><Link to={slug}>{title}</Link></h3>
            <small>Posted by {author} on {date}</small>
            <p>{body}</p>
            <ul>
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>  
                    </li>
                ))}
            </ul>
            <Link to={slug}>Read More</Link>
        </div>       
    )
}

export default Post;