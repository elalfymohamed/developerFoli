import React, { useEffect } from "react"
// Gatsby
import { Link } from "gatsby"
// Icon
import { AiFillGithub } from "react-icons/ai"
import { FaShare } from "react-icons/fa"
// Effect Gsap
import { TweenMax, Expo, TimelineMax } from "gsap"
//Components
import { ImagesProject } from "../components/gatsby-images/ImagesProject"
import { Icons2 } from "../components/gatsby-images/Icons2"
import SEO from "../components/SEO"
import ScrollTop from "../constants/ScrollTop"

import back from "../assets/icon/back.svg"
import previous from "../assets/icon/previous.svg"

const Product = ({ pageContext }) => {
  const product = pageContext

  const slideX = 100
  const tl = new TimelineMax()

  const slideLeft = (cla, sX) => {
    TweenMax.from(
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
      1,
      {
        opacity: "0",
      },
      { opacity: "1" },
      time
    )
  }

  useEffect(() => {
    slideLeft(".title .main-headline", -slideX)
    slideLeft(".project-tools ul li", -slideX)
    slideLeft(".back_ .back__", slideX)
    //
    showItem(".banner-back .previous", 1.7)
    showItem(".project-link", 2)
    tl.from(".image img", 1, { y: "800" }, 1)
  })

  return (
    <>
      <SEO title={`Project | ${product.title}`} />

      {/* <Navbar /> */}

      <div className="banner">
        <div className="inner-banner">
          <div className="container__ fluid">
            <div className="banner-back">
              <img src={previous} alt="previous" className="previous" />
              <Link to="/Projects/" className="back_">
                <img src={back} alt="back" className="back__" />
              </Link>
            </div>
            <div className="title">
              <h1 className="main-headline">{product.title}</h1>
            </div>
            <div className="project-tools">
              <Icons2 icon={product.icon} />
            </div>
            <div className="project-link">
              <Link to={product.ulr} target="_blank" rel="noopener">
                <FaShare />
              </Link>
              <Link to={product.github} target="_blank" rel="noopener">
                <AiFillGithub />
              </Link>
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

export default Product
