import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage({data}) {

  const { edges: projects } = data.allAirtable;
  return (
      <Layout>
        <SEO title="Home" />
        <h3>Projects</h3>
        {projects.map(({ node: project }, index) => (
          <div 
            key={index} 
            style={{
              margin: `4vh 0`,
            }} 
          >
            <Link to={`/${project.data.slug}`}>
              <h4>{project.data.Title}</h4>
            </Link>
            <div>by {project.data.Author}</div>
          </div>
         ))
        }
      </Layout>
  )
}

export const query = graphql`
    query {
      allAirtable(sort: {fields: data___orderID})  {
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