import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utility/utilityFunction'
import '../components/styles/single-post.css'

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
  return (
    <Layout>
        <SEO title={post.title} />
        <h1 className="title">{post.title}</h1>
        <Img fluid={post.image.childImageSharp.fluid} />
        <span className="text-info">{post.date}</span> by{' '}
        <span className="text-info">{post.author}</span>
        <div className="content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html }} />      
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