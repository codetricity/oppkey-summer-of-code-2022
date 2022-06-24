module.exports = {
  siteMetadata: {
    title: `RICOH THETA API Development Getting Started`,
    url: `https://start.theta360.guide`,
    image: "/getting_started.jpg",
    description: "RICOH THETA API Getting started guide. Mobile app development for 360 cameras.",
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
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-DSEPQZKM1K", 
      ],
    
    }
  }

],
};
