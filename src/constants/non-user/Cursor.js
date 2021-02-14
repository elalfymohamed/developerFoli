import React, { useEffect } from "react"

const Cursor = () => {
  const addEventListener = () => {
    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX
      const mouseY = evt.clientY

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      })

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      })
    })
  }
  useEffect(() => {
    addEventListener()
  })
  return (
    <>
      <div class="cursor" />
      <div class="shapes">
        <div class="shape shape-1" />
        <div class="shape shape-2" />
        <div class="shape shape-3" />
      </div>
    </>
  )
}

export default Cursor
