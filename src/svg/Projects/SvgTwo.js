import React from "react"

import styled from "@emotion/styled"

import { keyframes } from "@emotion/react"

import { Device } from "../Device"

const f = [
  `position: absolute; display:block; stroke: none; fill: currentcolor;`,
]
const fn = [
  `position: absolute; display:block; stroke: currentcolor; fill: none;`,
]

const rotate = keyframes`
0% {
  transform:translateY(0px) 
  }
  100% {
    transform:translateY(200px) 
  }
`

const Div = styled.div`
  animation: 4s ease-in-out 0s infinite alternate none running ${rotate};
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`
const Bq8 = styled.svg`
  ${f}
  color:#805ad5;
  width: 4rem;
  left: 5%;
  top: 80%;
  @media ${Device.laptop} {
    display: none;
  }
`
const H1p = styled.svg`
  ${fn}
  color:#0a0a0a;
  width: 3rem;
  left: 95%;
  top: 50%;
  @media ${Device.mobileL} {
    display: none;
  }
`
const Lsz = styled.svg`
  ${f}
  color:#0a0a0a;
  width: 1.5rem;
  left: 85%;
  top: 15%;
`
const Leb = styled.svg`
  ${f}
  color:#2d3748;
  width: 2rem;
  left: 45%;
  top: 10%;
`

const SvgTwo = () => {
  return (
    <Div>
      <Bq8 viewBox="0 0 30 42">
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"></path>{" "}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"></path>
      </Bq8>
      <H1p viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </H1p>
      <Lsz viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Lsz>
      <Leb viewBox="0 0 30 44.58">
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
      </Leb>
    </Div>
  )
}

export default SvgTwo
