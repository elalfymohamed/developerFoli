import React from 'react'
// 
import Navbar from "../components/Navbar"
import Title from "../components/Title"
import SEO from "../components/SEO"
import FormContact from "../components/Form"
import Footer from '../components/project/Footer'
// Images
import content from "../assets/undraw_contact_us_15o22.svg"
// Styled
// import '../style/_main.scss'


const Contact = () => {
  return (
    <>
      <SEO title="Contact My" />
      <>
        <Navbar />
        <main className="page-contact contact">
          <section className="main-content-section">
            <div className="image-contact">
              <img src={content} alt="contact" />
            </div>
            <Title title="Contact Me" />
          </section>
          <FormContact />
          <div className="linear" />
        </main>
        <Footer setClassFooter="footer-contact" />
      </>
    </>
  )
}

export default Contact
