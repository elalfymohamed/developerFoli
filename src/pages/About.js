import React, { useEffect } from "react"
// Effect Gsap
import { TweenMax, Expo, TimelineMax, Bounce } from 'gsap'
//Components
import Navbar from "../components/Navbar"
import Title from '../components/Title'
import Footer from '../components/project/Footer'
import SEO from '../components/SEO'
//  Image
// import Img from '../assets/undraw_about_me_wa29.svg'
import Img from '../assets/undraw_about_me_wa299.svg'
// import Img from '../assets/About us page-cuate.svg'

// Styled
// import '../style/_main.scss'

const About = () => {
  const tl = new TimelineMax()

  const slideLeft = (cla, sX, m = .1) => {
    TweenMax.from(
      cla,
      1.5,
      {
        delay: 1.1 + m,
        opacity: 0,
        x: sX,
        ease: Expo.easeInOut,
      },
      1
    )
  }

  useEffect(() => {
    slideLeft(".about-img img", -100)
    slideLeft(".title", 100, 0.2)
    slideLeft(".underline", 200, 0.3)
    // 
    tl.from('.about-text .about-stack', 1, {
      y: -30,
      opacity: 0,
      ease: Bounce.easeOut,
    }, 1.5)

    tl.fromTo(
      '.about-text p',
      2,
      {
        opacity: "0",
      },
      { opacity: "1" },
      2
    )
  })

  return (
    <>
      <SEO title="About Me " />
      <Navbar />
      <section className=" about-page">
        <div className="section-about about-center">
          <div className="about-img">
            <img src={Img} alt="about" />
          </div>
          <article className="about-contents">
            <Title title="About me" />
            <div className="about-text">
              <p> I am a Front-End Developer I
              with one year of experience working as a JavaScript and React, and
              mostly work with JavaScript (React, Gatsby).</p>
              <div className="about-stack">
                <span>Gatsby</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>Sass</span>
                <span>Webpack</span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  )

}


export default About