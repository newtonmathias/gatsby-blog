import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from 'gatsby'



const MatchCenter = () => {
  return (
    <Layout>
      <SEO title="MATCH CENTER" keywords={['gatsby', 'application', 'react']}/>
      <h3>Welcome to the Match Center section</h3>
      <p className="contact-text">This section will feature match reviews and analysis. 
       It will also take a look into upcoming matches and stats.
       we will also review players and any other relevant stories.
       In the meantime, head over to the <Link to="/news">News</Link> section for top stories
      </p>
    </Layout>
  )
}

export default MatchCenter;