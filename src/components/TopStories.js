import React from 'react';
import '../components/styles/TopStories.css'
import { graphql, StaticQuery } from 'gatsby';
import Thumbnail from '../components/Thumbnail'


const TopStories = () => {
  return (
    <div className="top-stories">
      <h1 className="heading-text">Top Stories</h1>
      <StaticQuery
        query={newsQuery}
        render={data => {
        return (
          <div className="top-stories-content">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Thumbnail className="element"
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
        }}
        />
    </div>
  )
}

const newsQuery = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
  `
export default TopStories
