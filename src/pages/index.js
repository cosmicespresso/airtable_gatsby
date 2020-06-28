import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({data}) {

  const { edges: projects } = data.allAirtable;
  return (
      <Layout>
        <SEO title="Home" />
        <h1>Projects</h1>
        {
          projects.map(({ node: project }, index) => (
              <div 
                key={index} 
                style={{
                  margin: `4vh 0`,
                }} 
              >
                <Link to={`/${project.data.slug}`}><h4>{project.data.Title}</h4></Link>
                <h5>by {project.data.Author}</h5>
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