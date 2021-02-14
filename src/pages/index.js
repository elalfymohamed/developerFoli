import React, { useEffect, useState } from "react"
//Components
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
// import Page from "../components/Project"
import OpenSource from "../components/OpenSource"
import SEO from "../components/SEO"
import ScrollTop from "../constants/ScrollTop"

export default function Home() {
  let Inner
  if (typeof window !== `undefined`) {
    Inner = window.innerWidth
  }
  const breakpoint = 992

  const [width, setWidth] = useState(Inner)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <>
      <SEO title={`Resume | Resume of Elalfy Mohamed`} />
      <Layout>
        <main className="hero-container">
          <div
            style={{
              position: `absolute`,
              width: ` 100%`,
              height: `100%`,
            }}
          >
            <div
              style={{
                position: `absolute`,
                width: `100%`,
                overflow: `hidden`,
              }}
            >
              <Hero />
              <Skills />
              {/* <Page /> */}
              <OpenSource />
            </div>
          </div>
          {width < breakpoint && <ScrollTop />}
        </main>
      </Layout>
    </>
  )
}
