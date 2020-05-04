module.exports = {
  siteMetadata: {
    title: `The OutRoar`,
    titleTemplate: `%s - OutRoar`,
    description: `Chelsea, Fifa, All Things Football.`,
    author: `Newton Mathias`,
    url: "https://www.http://theoutroar.com", // No trailing slash allowed!
    image: "/src/images/gatsby-icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@cfcOutroar",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7962466826176882`
      },
    },
    'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    
  ],
}
