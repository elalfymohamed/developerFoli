import React from "react"

import styled from "@emotion/styled"

import { keyframes } from "@emotion/react"

import { Device } from "../Device"

const rotate = keyframes`
0% {
  transform:translateY(0px) 
  }
  100% {
    transform:translateY(200px) 
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

const Y0d = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  color: #3182ce;
  width: 4rem;
  left: 80%;
  top: 10%;
  @media ${Device.laptop} {
    display: none;
  }
`

const K18 = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  color: #0a0a0a;
  width: 3rem;
  left: 90%;
  top: 50%;
  @media ${Device.mobileM} {
    display: none;
  }
`
const Zcj = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  color: #4a5568;
  width: 4rem;
  left: 70%;
  top: 90%;
  @media ${Device.tablet} {
    display: none;
  }
`
const G6b = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  color: #2d3748;
  width: 4rem;
  left: 30%;
  top: 65%;
  @media ${Device.mobileL} {
    display: none;
  }
`

const SQ6 = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  color: #ed64a6;
  width: 4rem;
  left: 28%;
  top: 15%;
  @media ${Device.laptop} {
    display: none;
  }
`
const F29 = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  color: #2d3748;
  width: 1.5rem;
  left: 75%;
  top: 10%;
`
const Leb = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  color: #2d3748;
  width: 2rem;
  left: 45%;
  top: 10%;
  @media ${Device.tablet} {
    display: none;
  }
`

const SvgTow = () => {
  return (
    <Div>
      <Y0d viewBox="0 0 30 42">
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"></path>{" "}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"></path>
      </Y0d>
      <K18 viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </K18>
      <Zcj viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Zcj>
      <G6b viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </G6b>
      <SQ6 viewBox="0 0 100 100">
        <path
          strokeWidth="3px"
          d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
        ></path>
      </SQ6>
      <F29 viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </F29>
      <Leb viewBox="0 0 30 44.58">
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
      </Leb>
    </Div>
  )
}

export default SvgTow
