import React from "react"

import styled from "@emotion/styled"

import SvgOne from "./SvgOne"
import SvgThere from "./SvgThere"
import SvgTow from "./SvgTow"
import { Device } from "../Device"

const Div = styled.div`
  position: absolute;
  background-size: auto;
  background-repeat: no-repeat;
  overflow: hidden;
  will-change: transform;
  width: 100%;
  height: 758px;
  transform: translate3d(0px, 2597px, 0px);
  z-index: -200;

  @media ${Device.laptopL} {
    height: 846px;
    transform: translate3d(0px, 2932px, 0px);
  }
  @media ${Device.laptopM} {
    transform: translate3d(0px, 2707px, 0px);
  }
  @media ${Device.laptop} {
    transform: translate3d(0px, 2264px, 0px);
  }
  @media ${Device.tabletM} {
    height: 880px;
    transform: translate3d(0px, 2272px, 0px);
  }
  @media ${Device.tablet} {
    height: 742px;
    transform: translate3d(0px, 3582px, 0px);
  }
  @media ${Device.tabletS} {
    height: 700px;
    transform: translate3d(0px, 3449px, 0px);
  }
  @media ${Device.mobileL} {
    height: 635px;
    transform: translate3d(0px, 3206px, 0px);
  }
  @media ${Device.mobileM} {
    height: 600px;
    transform: translate3d(0px, 2959px, 0px);
  }
  /* @media ${Device.mobileS} {
    height:590;
    transform: translate3d(0px, 2563px, 0px);
  }  */
`

const TotalEnd = () => {
  return (
    <Div>
      <SvgOne />
      <SvgTow />
      <SvgThere />
    </Div>
  )
}

export default TotalEnd
