import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
        <span><a href="https://www.twitter.com/cfcOutroar" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} /></a></span>

        <div className="content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html }} />
        <Footer />      
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