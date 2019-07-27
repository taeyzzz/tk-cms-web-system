import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const allArticle = data.allStrapiArticle.edges.map(obj => {
    return(
      <li key={obj.node.id}>
        <h2>
          <Link to={`/${obj.node.id}`}>
          {obj.node.title}
        </Link>
        </h2>
        <Img fixed={obj.node.image.childImageSharp.fixed} />
        <p>{obj.node.content}</p>
      </li>
    )
  })
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {allArticle}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
