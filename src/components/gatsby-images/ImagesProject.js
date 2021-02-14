import React from 'react'
// Gatsby
import Image from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

export const ImagesProject = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      fluid: file(relativePath: { eq: "projects/repairdesignic-netlify-app.png" }) {
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
      store: file(relativePath: { eq:  "projects/Gams-Store.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      profile: file(relativePath: { eq: "projects/Profile-Project-png.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      hermann: file(relativePath: { eq: "projects/relaxed-hermann.png"  }) {
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
        <Image fluid={data.fluid.childImageSharp.fluid} />
      ) : src === 2 ? (
        <Image fluid={data.fixed.childImageSharp.fluid} />
      ) : src === 3 ? (
        <Image fluid={data.store.childImageSharp.fluid} />
      ) : src === 4 ? (
        <Image fluid={data.profile.childImageSharp.fluid} />
      ) : (
                <Image fluid={data.hermann.childImageSharp.fluid} />
              )}
    </>
  )
}


