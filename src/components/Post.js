import React from 'react'
import Link from 'gatsby'

const Post = ({ title, author, path, date, body}) => {
    return (
        <div>
            <h3>{title}</h3>
            <small>Posted by {author} on {date}</small>
            <p>{body}</p>
        </div>       
    )
}

export default Post;