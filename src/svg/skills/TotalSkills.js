import React from "react"
import SvgOne from "./SvgOne"
import SvgTow from "./SvgTow"
import SvgThere from "./SvgThere"
import styled from "styled-components"
import { Device } from "../Device"

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -200;
  @media ${Device.laptopL} {
    transform: translate3d(0px, 920.4px, 0px) !important;
    /* transform: translate3d(0px, 1206.4px, 0px) !important; */
  }
  @media ${Device.laptopM} {
    height:690px !important;
  }
  @media ${Device.laptop} {
    transform: translate3d(0px, 648.4px, 0px) !important;
    height:662px !important;
  }
  @media ${Device.tablet} {
    height:1000px !important;
    /* transform: translate3d(0px, 1818.2px, 0px) !important; */
  }
`
const TotalSkills = () => {
  return (
    <Div
      style={{
        position: `absolute`,
        backgroundSize: `auto`,
        backgroundRepeat: `no-repeat`,
        willChange: `transform`,
        width: `100%`,
        height: `900px`,
        transform: `translate3d(0px, 1049.4px, 0px)`,
      }}
    >
      <SvgOne />
      <SvgTow />
      <SvgThere />
    </Div>
  )
}

export default TotalSkills
