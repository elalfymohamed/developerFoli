import React, { useEffect, useRef } from "react"
// Gatsby image
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// Gatsby
import { graphql, useStaticQuery } from "gatsby"
// Styled Components

import styled from "@emotion/styled"

// Images
import build from "../assets/icon/build.svg"
import curved from "../assets/icon/curved.svg"
import sound from "../assets/sounds/Ta-Dah-For-CCM026901.mp3"
// import sound from "../assets/sounds/download.mp3"
// media device
import { Device } from "../svg/Device"

const query = graphql`
  {
    file(relativePath: { eq: "about-unicorn.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

const GitImage = () => {
  const data = useStaticQuery(query)
  const image = getImage(data.file)
  const alt = data.file.name
  const beepRef = useRef(null)
  const curvedRef = useRef(null)

  useEffect(() => {
    const audio = beepRef.current
    const curved = curvedRef.current

    curved.addEventListener("click", () => {
      audio.play()
    })
  }, [])

  return (
    <>
      <Div>
        <GatsbyImage
          className="unicorn"
          image={image}
          alt={alt}
          style={{ width: `10rem`, height: `30%` }}
        />
      </Div>
      <Build>
        <img
          src={build}
          alt="build"
          style={{ width: `4rem`, height: `4rem` }}
        />
      </Build>
      <Curved ref={curvedRef}>
        <audio src={sound} ref={beepRef}>
          <source src={sound} type="audio/mpeg" />
        </audio>
        <img
          src={curved}
          alt="curved"
          style={{ width: `3rem`, height: `3rem` }}
        />
      </Curved>
    </>
  )
}

// Styled
const Div = styled.div`
  display: block;
  position: absolute;
  right: 145px;
  top: 220px;
  @media ${Device.laptop} {
    right: 70px;
  }
  @media ${Device.tabletS} {
    display: none;
  }
`
const Build = styled.div`
  display: block;
  position: absolute;
  right: 65%;
  top: 5%;
  @media ${Device.tabletM} {
    display: none;
  }
`
const Curved = styled.div`
  display: block;
  position: absolute;
  left: 1%;
  bottom: 1%;
`

export default GitImage
