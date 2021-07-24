import React from "react"
import PropTypes from "prop-types"
// Gatsby
import { graphql, useStaticQuery } from "gatsby"
// Gatsby Image
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    design: file(relativePath: { eq: "projects/REPAIR DESIGN.jpg" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    api: file(relativePath: { eq: "projects/redux api.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    gams: file(relativePath: { eq: "projects/Gams-Store.jpg" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    por: file(relativePath: { eq: "projects/Por.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    document: file(relativePath: { eq: "projects/Document.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

export const Image = ({ src }) => {
  const data = useStaticQuery(query)
  const imageDesign = getImage(data.design)
  const imageApi = getImage(data.api)
  const imageGams = getImage(data.gams)
  const imagePor = getImage(data.por)
  const imageDocument = getImage(data.document)

  return (
    <>
      {src === 1 ? (
        <GatsbyImage
          className="image_project"
          alt={data.design.name}
          image={imageDesign}
        />
      ) : src === 2 ? (
        <GatsbyImage
          className="image_project"
          alt={data.api.name}
          image={imageApi}
        />
      ) : src === 3 ? (
        <GatsbyImage
          className="image_project"
          alt={data.gams.name}
          image={imageGams}
        />
      ) : src === 4 ? (
        <GatsbyImage
          className="image_project"
          alt={data.por.name}
          image={imagePor}
        />
      ) : (
        <GatsbyImage
          className="image_project"
          alt={data.document.name}
          image={imageDocument}
        />
      )}
    </>
  )
}

Image.propTypes = {
  src: PropTypes.node,
}
