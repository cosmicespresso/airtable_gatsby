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
      {data.airtable.data.Images.map( (image, index) => (
        <img key={index} alt="project images" src={image.url} width={400}/>
      ))}
      <Link to={'/'}>back</Link>
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
          Images {
            url
          }
        }
    }
}`