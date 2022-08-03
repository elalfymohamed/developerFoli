import React from "react"

import styled from "@emotion/styled"

import { keyframes } from "@emotion/react"

import { Device } from "./Device"

const g94xf = keyframes`
0%{
  d:path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z")
}
50%{
  d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z")
}
100%{
  d:path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z")
}
`

const Div = styled.div`
  position: absolute;
  background-size: auto;
  background-repeat: no-repeat;
  will-change: transform;
  width: 100%;
  height: 222px;
  transform: translate3d(0px, 0px, 0px);
`
const Wml = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
`
const E16 = styled.div`
  position: relative;
  height: 100%;
`
const Cow = styled.svg`
  color: #2d3748;
  fill: currentcolor;
  width: 100%;
  height: 30vh;

  path {
    animation: 20s linear 0s infinite alternate none running ${g94xf};
  }
  @media ${Device.tabletM} {
    height: 22vh;
  }
  @media ${Device.tabletS} {
    height: 19vh;
  }
  @media ${Device.mobileL} {
    height: 18vh;
  }
`

const Animate2 = () => {
  return (
    <Div>
      <Wml>
        <E16>
          <Cow
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              ></animate>
            </path>
          </Cow>
        </E16>
      </Wml>
    </Div>
  )
}

export default Animate2
