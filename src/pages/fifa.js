import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from 'gatsby'



const fifa = () => {
  return (
    <Layout>
      <SEO title="FIFA" keywords={['gatsby', 'application', 'react']}/>
      <h3>Welcome to the Fifa section</h3>
      <p className="contact-text">
      This will be all about Fifa20 tips and tricks to help you improve your gaming.
        we will also take a look at all things happening in the FIFA community. We will also
        review gameplay, patches and new features in the game.
        In the meantime, head over to the <Link to="/news">News</Link> section for top stories
      </p>
    </Layout>
  )
}

export default fifa;