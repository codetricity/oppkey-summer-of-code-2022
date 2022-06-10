module.exports = {
  siteMetadata: {
    title: `THETA X Development Getting Started`,
    siteUrl: `https://oppkeysummerofcode2022main.gatsbyjs.io/`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    `gatsby-remark-images`,
    {
    resolve: "gatsby-source-filesystem", 
    options: {
      name: `thetax-starters`,
      path: `${__dirname}/thetax-starters`,
      
    }
  },
  {
    resolve:   "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
          }
        }
      ]
    }
  }

],
};
