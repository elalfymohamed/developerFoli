import React, { useEffect } from "react"
// Gatsby Image
import Image from "gatsby-image"
// Gatsby
import { graphql, useStaticQuery } from "gatsby"
// Gsap
import { gsap } from "gsap"
// Gsap ScrollTrigger
import { ScrollTrigger } from "gsap/src/ScrollTrigger"
//Components
import Icon from "../constants/SocialLink"
import TotalHome from "../svg/home/TotalHome"
// style
import Styles from "../style/module/Hero.module.scss"


// Graphql
export const query = graphql`
  {
    file(relativePath: { eq: "ToyFaces_Tansparent_BG_29.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

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
            <h1 className="animate___">
              Hello, I'm El-alfy{" "}
              <span role="img" aria-label="img" className={Styles.wave_emoji}>
                👋
              </span>
            </h1>
            <h2 className="animate___">
              and I{" "}
              <span role="img" aria-label="img">
                ❤️
              </span>{" "}
              Front-End Web developer
            </h2>
            <p className="animate___">
              I am a <strong>Front-End Developer </strong> living in Egypt 🇪🇬, I
              mostly work with <strong>JavaScript</strong> (React, Gatsby).
            </p>
            <Icon styleClass={Styles.hero_links} />
          </div>
        </article>
        <Image fluid={fluid} className={Styles.hero_img} />
      </div>
    </section>
  )
}

export default Hero
