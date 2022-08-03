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
  animation: 4s ease-in-out 0s infinite alternate none running ${rotate};
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  @media ${Device.mobileL} {
    display: none;
  }
`
const Szf = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #48bb78;
  width: 4rem;
  left: 40%;
  top: 75%;
  @media ${Device.laptop} {
    display: none;
  }
`
const Hin = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #0a0a0a;
  width: 3rem;
  left: 90%;
  top: 30%;
`

const Cqs = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #ecc94b;
  width: 4rem;
  left: 70%;
  top: 75%;
  @media ${Device.tabletS} {
    display: none;
  }
`

const A62 = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #0a0a0a;
  width: 4rem;
  left: 18%;
  top: 75%;
`

const Lml = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #0a0a0a;
  width: 1.5rem;
  left: 75%;
  top: 10%;
  @media ${Device.laptop} {
    display: none;
  }
`

const Laq = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #48bb78;
  width: 2rem;
  left: 45%;
  top: 10%;
  @media ${Device.laptop} {
    display: none;
  }
`

const SvgTow = () => {
  return (
    <Div>
      <Szf viewBox="0 0 30 42">
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"></path>{" "}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"></path>
      </Szf>
      <Hin viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </Hin>
      <Cqs viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Cqs>
      <A62 viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </A62>
      <Lml viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Lml>
      <Laq viewBox="0 0 30 44.58">
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
      </Laq>
    </Div>
  )
}

export default SvgTow
