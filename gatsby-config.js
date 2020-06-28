const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Airtable CMS + Gatsby`,
    description: `Boilerplate for using Airtable as a CMS with a Gatsby frontend.`,
    author: `@kallirroi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: process.env.AIRTABLE_TABLE,
            mapping: { Body: 'text/markdown' },
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          }
        ]
      }
    },
  ],
}
