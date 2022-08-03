import React, { useEffect } from "react"

import Footer from "../components/project/Footer"
import Form from "../components/Form"
import Seo from "../components/Seo"
import Navbar from "../components/Navbar"
import Title from "../components/Title"

// Effect Gsap
import { gsap, Expo } from "gsap"
// Images
import content from "../assets/Mail sent-pana.svg"

const Contact = () => {
  const tl = gsap.timeline()

  const slideLeft = (cla, sX) => {
    gsap.from(
      cla,
      1.5,
      {
        delay: 1.1,
        opacity: 0,
        x: sX,
        ease: Expo.easeInOut,
      },
      1
    )
  }
  const showItem = (nCla, time) => {
    tl.fromTo(
      nCla,

      {
        duration: 1,
        opacity: "0",
      },
      { opacity: "1" },
      time
    )
  }

  useEffect(() => {
    slideLeft(".image-contact img", -100)
    slideLeft(".title", 100)
    slideLeft(".underline", 200, 0.3)
    //
    tl.from(".form-contact", { duration: 1, y: "800" }, 1)
    showItem(".linear", 1.7)
    showItem(".contact-us-div", 1.7)
  }, [])
  return (
    <>
      <Seo title="Contact My" />
      <>
        <Navbar />
        <main className="page-contact contact">
          <section className="main-content-section">
            <div className="image-contact">
              <img src={content} alt="contact" />
            </div>
            <Title title="Contact Me" />
          </section>
          <Form />
        </main>
        <Footer setClassFooter="footer-contact" />
      </>
    </>
  )
}

export default Contact
