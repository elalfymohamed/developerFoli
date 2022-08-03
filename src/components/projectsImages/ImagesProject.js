import React from "react"
import PropTypes from "prop-types"
// Gatsby Image
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// get images -> Graphql
import { GraphqlImagesProjects } from "./GraphqlImagesProjects"

export const ImagesProject = ({ src }) => {
  const items = GraphqlImagesProjects()

  return (
    <>
      {items.map((ele, index) => {
        return (
          src === index + 1 && (
            <GatsbyImage
              key={index}
              className="image_project"
              alt={ele.name}
              image={getImage(ele.image)}
            />
          )
        )
      })}
    </>
  )
}

ImagesProject.propTypes = {
  src: PropTypes.node,
}
