import React, { useState, useEffect } from "react"
//  React icons
import { FaArrowCircleUp } from "react-icons/fa"
// styled
import styled, { keyframes } from "styled-components"

const fadIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`

const Top = styled(FaArrowCircleUp)`
  position: fixed;
  bottom: 20px;
  right: 6px;
  z-index: 99;
  cursor: pointer;
  animation: ${fadIn} 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
  })
  return (
    <div>
      <Top
        onClick={scrollTop}
        title="Go To Top"
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </div>
  )
}

export default ScrollTop
