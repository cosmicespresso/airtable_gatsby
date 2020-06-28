import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
      <div>Here is the page for record for <strong>{data.airtable.data.slug}</strong>.</div>
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
        }
    }
}`