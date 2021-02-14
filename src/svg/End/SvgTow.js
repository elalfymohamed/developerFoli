import React from "react"
import styled, { keyframes } from "styled-components"
import { Device } from "../Device"

const rotate = keyframes`
0% {
  transform:translateY(0px) 
  }
  100% {
    transform:translateY(150px) 
  }
`
const Div = styled.div`
  animation: 18s ease-in-out 0s infinite alternate none running ${rotate};
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

const H1p = styled.svg`
  position: absolute;
  stroke: currentcolor;
  fill: none;
  display: block;
  color: #0a0a0a;
  width: 3rem;
  left: 95%;
  top: 50%;
  @media ${Device.tablet} {
    left:30%;
  }
`
const Obi = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #0a0a0a;
  width: 1.5rem;
  left: 85%;
  top: 15%;
`

const Elb = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #2d3748;
  width: 2rem;
  left: 45%;
  top: 10%;
   @media ${Device.mobileL} {
  display:none;
  }
`

const SvgTow = () => {
  return (
    <Div>
      <H1p viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </H1p>
      <Obi viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Obi>
      <Elb viewBox="0 0 30 44.58">
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
      </Elb>
    </Div>
  )
}

export default SvgTow
