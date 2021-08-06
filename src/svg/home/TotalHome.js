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
  z-index:-200;


  @media ${Device.laptopM} {
    height: 700px !important;
  } 
  @media ${Device.laptop} {
    height: 460px !important;
  }
`

const TotalHome = () => {
  return (
    <Div
      style={{
        position: `absolute`,
        backgroundSize: `auto`,
        backgroundRepeat: `no-repeat`,
        willChange: `transform`,
        width: `100%`,
        height: `954px`,
        transform: `translate3d(0px, 0px, 0px)`,
      }}
    >
      <SvgOne />
      <SvgTow />
      <SvgThere />
    </Div>
  )
}

export default TotalHome
