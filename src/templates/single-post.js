import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
  return (
    <Layout>
        <SEO title={post.title} />
        <h1>{post.title}</h1>
        <Img fluid={post.image.childImageSharp.fluid} />
        <span>{post.date}</span>
        <span>{post.author}</span>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html }} />
        <ul>
            {post.tags.map(tag => (
                <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>

    </Layout>
  )
}


export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`


export default SinglePost