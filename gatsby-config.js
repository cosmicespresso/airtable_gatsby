require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Airtable CMS + Gatsby`,
    description: `Boilerplate for using Airtable as a CMS with a Gatsby frontend.`,
    author: `@kallirroi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: process.env.GATSBY_AIRTABLE_TABLE,
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          }
        ]
      }
    },
  ],
}
