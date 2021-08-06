import React from "react"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
0% {
  transform:translateY(0px) 
  }
  100% {
    transform:translateY(30px) 
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

const Uz3 = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentcolor;
  display: block;
  color: #ed8936;
  width: 2rem;
  left: 70%;
  top: 20%;
`
const Q15 = styled.svg`
  position: absolute;
  stroke: currentcolor;
  fill: none;
  display: block;
  color: #2d3748;
  width: 2rem;
  left: 25%;
  top: 5%;
`

const SvgOne = () => {
  return (
    <Div>
      <Uz3 viewBox="0 0 30 44.58">
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
      </Uz3>
      <Q15 viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </Q15>
    </Div>
  )
}

export default SvgOne
