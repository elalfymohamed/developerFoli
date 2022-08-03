import React, { useEffect, useContext } from "react"
// Gatsby
import { Link } from "gatsby"
// PropTypes
import PropTypes from "prop-types"
// Icon
import { AiFillGithub } from "react-icons/ai"
import { FaShare } from "react-icons/fa"
// Effect Gsap
import { gsap, Expo } from "gsap"
//Components
import Seo from "../components/Seo"

import { ImagesProject } from "../components/projectsImages/ImagesProject"
import { SkillsIcon } from "../components/projectsImages/SkillsIcon"
import ScrollTop from "../constants/ScrollTop"
import { GlobalContext } from "../store/GlobalStateProvider"

import back from "../assets/icon/back.svg"
import previous from "../assets/icon/previous.svg"
// Theme
import back_dark from "../assets/icon/back_dark.svg"
import previous_dark from "../assets/icon/previous_dark.svg"

const Product = ({ pageContext }) => {
  const { state } = useContext(GlobalContext)

  const product = pageContext

  const slideX = 100
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
    if (!state.isDark) {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
    //
    slideLeft(".title .main-headline", -slideX)
    slideLeft(".project-tools ul li", -slideX)
    slideLeft(".back_ .back__", slideX)
    //
    showItem(".banner-back .previous", 1.7)
    showItem(".project-link", 2)
    tl.from(
      ".image img",
      {
        duration: 1,
        y: "800",
      },
      1
    )
  })

  return (
    <>
      <Seo title={`Project | ${product.title}`} />

      {/* <Navbar /> */}

      <div className="banner">
        <div className="inner-banner">
          <div className="container__ fluid">
            <div className="banner-back">
              {!state.isDark ? (
                <img src={previous} alt="previous" className="previous" />
              ) : (
                <img src={previous_dark} alt="previous" className="previous" />
              )}
              <Link to="/Projects/" className="back_">
                {!state.isDark ? (
                  <img src={back} alt="back" className="back__" />
                ) : (
                  <img src={back_dark} alt="back" className="back__" />
                )}
              </Link>
            </div>
            <div className="title">
              <h1 className="main-headline">{product.title}</h1>
            </div>
            <div className="project-tools">
              <SkillsIcon icon={product.icon} />
            </div>
            <div className="project-link">
              <a href={product.ulr} target="_blank" rel="noreferrer">
                <FaShare
                  style={{ color: !state.isDark ? "#16141a" : "#f6f6f6" }}
                />
              </a>
              <a href={product.github} target="_blank" rel="noreferrer">
                <AiFillGithub
                  style={{ color: !state.isDark ? "#16141a" : "#f6f6f6" }}
                />
              </a>
            </div>
            <div className="image">
              <ImagesProject src={product.src} />
            </div>
          </div>
        </div>
        <ScrollTop />
      </div>
    </>
  )
}

Product.propTypes = {
  pageContext: PropTypes.object,
}

export default Product
