import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'
import '../components/styles/post.css'



const Post = ({ title, author, slug, date, body, fluid, tags}) => {
    return (
        <div className="post">
        <h3><Link className="post-title" to={slug}>{title}</Link></h3>
        <Link to={slug}><Img className="post-img" fluid={fluid} /></Link>
            <small>Posted by {author} on {date}</small>
            <p className="post-text">{body}</p>
            <ul className="tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link className="tag-info" to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>  
                    </li>
                ))}
            </ul>
        </div>       
    )
}

export default Post;