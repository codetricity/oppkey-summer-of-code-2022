module.exports = {
  siteMetadata: {
    title: `THETA X Development Getting Started`,
    siteUrl: `https://oppkeysummerofcode2022main.gatsbyjs.io/`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `thetax-starters`,
      path: `${__dirname}/thetax-starters`,
    }
  },
  "gatsby-plugin-mdx",
],
};
