import React from "react"
import styled from "styled-components"
import { Device } from "../Device"

const f = [
  `position: absolute; display:block; stroke: none; fill: currentcolor;`,
]
const fn = [
  `position: absolute; display:block; stroke: currentcolor; fill: none;`,
]
const Kld = styled.svg`
  ${f}
  color:#0a0a0a;
  width: 1.5rem;
  left: 4%;
  top: 20%;
`

const Lmp = styled.svg`
  ${f}
  color:#2d3748;
  width: 3rem;
  left: 70%;
  top: 60%;
  @media ${Device.tabletS} {
  top:90%;
  }
  @media ${Device.mobileL} {
  display:none;
  }
`
const Qgg = styled.svg`
  ${f}
  color:#ed8936;
  width: 1.5rem;
  left: 10%;
  top: 10%;
`
const Er4 = styled.svg`
  ${f}
  color:#2d3748;
  width: 3rem;
  left: 20%;
  top: 30%;
`

const Lkm = styled.svg`
  ${fn}
  color:#2d3748;
  width: 2rem;
  left: 80%;
  top: 70%;
`
//


const E3F3CV = styled.svg`
  ${f}
  color:#ff9900;
  width: 1.5rem;
  left: 61%;
  top: 105%;
`

const DED3G4 = styled.svg`
  ${f}
  color:#1280b4;
  width: 3rem;
  left: 17%;
  top: 109%;
  @media ${Device.mobileL} {
  display:none;
  }
`

const FA4G4 = styled.svg`
  ${fn}
  color:#052b3d;
  width: 2rem;
  left: 25%;
  top: 100%;
`

const SvgThere = () => {
  return (
    <>
      <Kld viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Kld>
      <Lmp viewBox="0 0 30 30">
        <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </Lmp>
      <Qgg viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </Qgg>
      <Er4 viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </Er4>
      <Lkm viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </Lkm>
      {/*  */}
      <E3F3CV viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </E3F3CV>
      <DED3G4 viewBox="0 0 30 30">
        <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
      </DED3G4>
      <FA4G4 viewBox="0 0 30 30">
        <polygon
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        ></polygon>
      </FA4G4>
    </>
  )
}

export default SvgThere
