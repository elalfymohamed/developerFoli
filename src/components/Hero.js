import React, { useEffect, useContext } from "react"
// Gatsby Image
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// Gatsby
import { graphql, useStaticQuery } from "gatsby"
// Gsap
import { gsap } from "gsap"
// Gsap ScrollTrigger
import { ScrollTrigger } from "gsap/src/ScrollTrigger"
//Components
import { SocialLink } from "../constants"
import TotalHome from "../svg/home/TotalHome"
import Context from "../store/context"
// style
import * as Styles from "../style/module/Hero.module.scss"

// Graphql
const query = graphql`
  {
    file(relativePath: { eq: "ToyFaces_Tansparent_BG_29.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

const Hero = () => {
  // Theme
  const { state } = useContext(Context)
  // Graphql Image
  const data = useStaticQuery(query)
  const image = getImage(data.file)
  const alt = data.file.name

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.batch(".animate___", {
      onEnter: batch =>
        gsap.from(batch, { opacity: 0, y: 100, duration: 1, stagger: 0.25 }),
      onEnterBack: batch =>
        gsap.from(batch, { opacity: 0, y: -100, duration: 1, stagger: 0.25 }),
      // markers: true,
    })
  })

  return (
    <section className={Styles.hero_center}>
      <TotalHome />
      <div className={(Styles.section_center, Styles.hero__)}>
        <article className={Styles.hero_info}>
          <div className={Styles.hero_title}>
            <h1 className={`animate___`}>
              Hello, I&rsquo;m El-alfy{" "}
              <span role="img" aria-label="img" className={Styles.wave_emoji}>
                👋
              </span>
            </h1>
            <h2
              className={`animate___ ${
                state.isDark ? "dark_mode" : "light_mode"
              }`}
            >
              and I{" "}
              <span role="img" aria-label="img">
                ❤️
              </span>{" "}
              Front-End Web developer
            </h2>
            <p
              className={`animate___ ${
                state.isDark ? " dark_mode" : "light_mode"
              }`}
            >
              I am a <strong>Front-End Developer </strong> living in Egypt 🇪🇬, I
              mostly work with <strong>JavaScript</strong> (React, GatsbyJs,
              NextJs).
            </p>
            <SocialLink styleClass={`${Styles.hero_links} animate___`} />
          </div>
        </article>
        <GatsbyImage image={image} alt={alt} className={Styles.hero_img} />
      </div>
    </section>
  )
}

export default Hero
