import React from "react"
import SvgOne from "./SvgOne"
import SvgTow from "./SvgTwo"
import SvgThere from "./SvgThere"
import styled from "styled-components"
import { Device } from "../Device"

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index:-200;
    @media ${Device.laptopL} {
    transform: translate3d(0px, 2047px, 0px) !important;
    height:985px !important;
  }
  @media ${Device.laptopM} {
    transform: translate3d(0px, 1625.2px, 0px) !important;
  }
  @media ${Device.laptop} {
    transform: translate3d(0px, 1318.2px, 0px) !important;
  }
  @media ${Device.tablet} {
    height: 1577px !important;
    transform: translate3d(0px, 1818.2px, 0px) !important;
  }
`
const TotalProjects = () => {
  return (
    <Div
      style={{
        position: `absolute`,
        backgroundSize: `auto`,
        backgroundRepeat: `no-repeat`,
        willChange: `transform`,
        width: `100%`,
        height: `683px`,
        transform: `translate3d(0px, 1960.2px, 0px)`,
      }}
    >
      <SvgOne />
      <SvgTow />
      <SvgThere />
    </Div>
  )
}

export default TotalProjects
