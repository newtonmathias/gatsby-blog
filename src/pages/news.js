import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby';
import Post from '../components/Post'


const News = () =>  (
    <Layout>
      <SEO title="NEWS" keywords={['gatsby', 'application', 'react']}/>
      <h1>Top News</h1>
      <StaticQuery
        query={newsQuery}
        render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
              />
            ))}
          </div>
        )
        }}
        />
    </Layout>
  )


const newsQuery = graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            title
            date
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default News;