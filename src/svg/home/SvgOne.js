import React from "react"
import styled, { keyframes } from "styled-components"
import { Device } from "../Device"

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
const Lpp = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #ed8936;
  width: 12rem;
  left: 10%;
  top: 20%;
  @media ${Device.laptopM} {
    display: none;
  }
`

const Sji = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #e53e3e;
  width: 12rem;
  left: 60%;
  top: 70%;

  @media ${Device.laptopM} {
    display: none;
  }
`

const W3l = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #4a5568;
  width: 1.5rem;
  left: 60%;
  top: 15%;
`

const SvgOne = () => {
  return (
    <Div>
      <Lpp viewBox="0 0 30 30">
        <polygon
          strokeWidth="1px"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        ></polygon>
      </Lpp>
      <Sji viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </Sji>
      <W3l viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </W3l>
    </Div>
  )
}

export default SvgOne
