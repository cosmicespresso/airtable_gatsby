import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({data}) {

  const { edges: rows } = data.allAirtable;
  return (
      <Layout>
        <SEO title="Home" />
        <h1>Home</h1>
        {
          rows.map(({ node: row }, index) => (
              <div 
                key={index} 
                style={{
                  margin: `4vh 0`,
                }} 
              >
                  <div>{row.data.Title}</div>
                  <div>{row.data.Author}</div>
                  <Link to={`/${row.data.slug}`}>link to page</Link>
              </div>
          ))
        }
      </Layout>
  )
}

export const query = graphql`
    query {
        allAirtable  {
          edges {
            node {
              data {
                Author
                Title
                slug
              }
            }
          }
        }
    }
`