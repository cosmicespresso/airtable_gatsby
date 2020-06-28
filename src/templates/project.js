import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"

export default function Project({ data }) {

  return (
    <Layout>
      <main
        dangerouslySetInnerHTML={{
          __html: data.airtable.data.Body.childMarkdownRemark.html,
        }}
      />
      <Link to={'/'}>back to home</Link>
    </Layout>
  )
}

export const query = graphql`
  query getProject($recordId: String!){
    airtable(recordId: { eq: $recordId}) {
        recordId
        data {
          slug
          Author
          Title
          Body {
            childMarkdownRemark {
              html
            }
          }
        }
    }
}`