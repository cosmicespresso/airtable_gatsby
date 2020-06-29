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
      {data.airtable.data.Images && data.airtable.data.Images.map( (image, index) => (
        <div key={index}
            style={{
              backgroundImage: 'url(' + image.url + ')',
              backgroundSize: '100%',
              backgroundPosition: 'top',
              width:'30vw', 
              height:'50vh', 
              margin: '2vh 0'
              }}>
            </div>
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