import React, { useEffect, useState } from "react"

import Seo from "../components/Seo"
import OpenSource from "../components/OpenSource"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Layout from "../components/Layout"
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
      <Seo title="Resume | Resume of Elalfy Mohamed" />
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
              <OpenSource />
            </div>
          </div>
          {width < breakpoint && <ScrollTop />}
        </main>
      </Layout>
    </>
  )
}
