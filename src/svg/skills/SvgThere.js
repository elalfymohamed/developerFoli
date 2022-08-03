import React from "react"

import styled from "@emotion/styled"

import { Device } from "../Device"

const Kld = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #0a0a0a;
  width: 1.5rem;
  left: 4%;
  top: 20%;
  @media ${Device.laptopM} {
    display: none;
  }
`
const L3f = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #ed64a6;
  width: 3rem;
  left: 80%;
  top: 60%;

  @media ${Device.laptop} {
    display: none;
  }
`

const Qgg = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #ed8936;
  width: 1.5rem;
  left: 10%;
  top: 10%;
`

const An8 = styled.svg`
  position: absolute;
  stroke: none;
  fill: currentColor;
  display: block;
  color: #ecc94b;
  width: 3rem;
  left: 49%;
  top: 26%;
  @media ${Device.laptop} {
    display: none;
  }
`

const Lku = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #e53e3e;
  width: 4rem;
  left: 75%;
  top: 30%;
  @media ${Device.laptop} {
    display: none;
  }
`

const L6k = styled.svg`
  position: absolute;
  stroke: currentColor;
  fill: none;
  display: block;
  color: #ecc94b;
  width: 2rem;
  left: 80%;
  top: 70%;
`
const SvgThere = () => {
  return (
    <>
      <Kld viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Kld>
      <L3f viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </L3f>
      <Qgg viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </Qgg>
      <An8 viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </An8>
      <Lku viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </Lku>
      <L6k viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </L6k>
    </>
  )
}

export default SvgThere
