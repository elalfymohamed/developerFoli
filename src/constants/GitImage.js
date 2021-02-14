import React, { useEffect } from "react"
// Gatsby image
import Images from "gatsby-image"
// Gatsby
import { graphql, useStaticQuery } from "gatsby"
// Styled Components
import styled from "styled-components"
// Images
import build from '../assets/icon/build.svg'
import curved from '../assets/icon/curved.svg'
import son from '../assets/sounds/Ta-Dah-For-CCM026901.mp3'
// media device
import { Device } from '../svg/Device'
// Styled
const Div = styled.div`
  display: block;
  position: absolute;
  right: 145px;
  top: 220px;
  @media ${Device.laptop} {
    right:70px;
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

export const getIme = graphql`
  {
    file(relativePath: {eq: "about-unicorn.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const GitImage = () => {
  useEffect(() => {
    document.getElementById('curved')
      .addEventListener('click', (e) => {
        document.getElementById('beep').play()
      })
  })
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getIme)
  return (
    <>
      <Div>
        <Images
          className="unicorn"
          fluid={fluid}
          style={{ width: `10rem`, height: `30%` }}
        />
      </Div>
      <Build>
        <img src={build} alt="build" style={{ width: `4rem` }} />
      </Build>
      <Curved id='curved'>
        <audio src={son} id="beep" />
        <img src={curved} alt="curved" style={{ width: `3rem` }} />
      </Curved>
    </>
  )
}



export default GitImage
