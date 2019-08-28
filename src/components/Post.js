import React from 'react'
import Img from 'gatsby-image'
import '../components/styles/post.css'



const Post = ({ title, author, slug, date, body, fluid, tags}) => {
    return (
        <div className="post">
        <a href={slug}><Img className="post-img" fluid={fluid} /></a>
        <h3><a className="post-title" href={slug}>{title}</a></h3>
            <small>{date}</small>
            <p className="post-text">{body}</p>
        </div>
               
    )
}

export default Post;
