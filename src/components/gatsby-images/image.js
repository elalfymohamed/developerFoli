import React from "react"
// Gatsby
import { useStaticQuery, graphql } from "gatsby"
// Gatsby Image
import Img from "gatsby-image"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      fluid: file(relativePath: { eq: "projects/REPAIR DESIGN.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      fixed: file(relativePath: { eq: "projects/redux api.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      gams: file(relativePath: { eq: "projects/Gams-Store.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      por: file(relativePath: { eq: "projects/Por.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      doc: file(relativePath: { eq: "projects/Document.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      {src === 1 ? (
        <Img
          className="image_project"
          fluid={data.fluid.childImageSharp.fluid}
        />
      ) : src === 2 ? (
        <Img
          className="image_project"
          fluid={data.fixed.childImageSharp.fluid}
        />
      ) : src === 3 ? (
        <Img
          className="image_project"
          fluid={data.gams.childImageSharp.fluid}
        />
      ) : src === 4 ? (
        <Img className="image_project" fluid={data.por.childImageSharp.fluid} />
      ) : (
                <Img className="image_project" fluid={data.doc.childImageSharp.fluid} />
              )}
    </>
  )
}
