import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import Seo from "../components/Seo"
import AstronautIcon from "../constants/AstronautIcon"

const NotFoundPage = () => {
  const [counter, setCounter] = useState(4)

  //
  //
  const To = (cla, num) => {
    gsap.to(cla, {
      y: num,
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      duration: 1,
    })
  }
  //
  const ToX = (cla, num) => {
    gsap.to(cla, {
      x: num,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
    })
  }
  //
  const ToY = (cla, num) => {
    gsap.to(cla, {
      y: num,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
    })
  }
  //
  useEffect(() => {
    gsap.set("svg", { visibility: "visible" })

    To("#headStripe", 0.5)
    To("#spaceman", 0.5)
    ToX("#craterSmall", -3)
    ToX("#craterBig", 3)
    ToY("#circlesSmall circle", -4)
    ToY("#circlesBig circle", -2)
    gsap.set("#glassShine", { x: -68 })

    gsap.fromTo(
      "#starsSmall g",
      { scale: 0, transformOrigin: "50% 50%" },
      {
        scale: 1,
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      }
    )
    gsap.to("#planet", {
      rotation: -2,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
      transformOrigin: "50% 50%",
    })

    gsap.to("#starsBig g", {
      rotation: "random(-30,30)",
      transformOrigin: "50% 50%",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    })

    gsap.to("#glassShine", {
      x: 80,
      duration: 2,
      rotation: -30,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      repeat: -1,
      repeatDelay: 8,
      delay: 2,
    })
    //
  }, [])
  useEffect(() => {
    const item = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    return () => clearTimeout(item)
  }, [counter])
  return (
    <>
      <Seo title="404: Not found" />
      <Helmet>
        <meta
          httpEquiv="refresh"
          content=" 4, url= https://elalfymohamed.netlify.app"
        />
      </Helmet>
      <main className="container">
        <div className="notfound">
          <div className=" notfound_GlassClip">
            <AstronautIcon />
          </div>
          <div className="notfound_info self-center">
            <h1>404</h1>
            <h2>UH OH! You&rsquo;re lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can wait {counter} second and it will Home page
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
export default NotFoundPage
