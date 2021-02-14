import React from "react"
import styled from "styled-components"
import { Device } from "../Device"

const G0l = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #18b760;
  width: 1.5rem;
  left: 4%;
  top: 20%;
`

const Lmp = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #2d3748;
  width: 3rem;
  left: 70%;
  top: 60%;
  @media ${Device.mobileL} {
  display:none;
  }
`

const E4r = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #2d3748;
  width: 3rem;
  left: 20%;
  top: 30%;
   @media ${Device.mobileL} {
  display:none;
  }
`
const Kmh = styled.svg`
  position: absolute;
  stroke: currentcolor;
  fill: none;
  display: block;
  color: #2d3748;
  width: 2rem;
  left: 80%;
  top: 70%;
`

const SvgThere = () => {
  return (
    <>
      <G0l viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </G0l>
      <Lmp viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Lmp>
      <E4r viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </E4r>
      <Kmh viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </Kmh>
    </>
  )
}

export default SvgThere
