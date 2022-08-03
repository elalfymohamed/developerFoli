import React, { useContext } from "react"
import PropTypes from "prop-types"
//Components
import { GlobalContext } from "../../store/GlobalStateProvider"

import Animate from "../../svg/Animate2"
import icon from "../../assets/icon/icon_A.svg"

const Footer = ({ setClassFooter }) => {
  const { state } = useContext(GlobalContext)
  return (
    <footer className={setClassFooter ? setClassFooter : "footer"}>
      <Animate />
      <div className="footer-div">
        <div className="footer-flex-div">
          <div
            className="jsx-1811451095 root"
            style={{ transform: ` translateY(-10.569105px)` }}
          >
            <video
              preload="auto"
              playsInline=""
              crossOrigin="anonymous"
              poster="https://images.prismic.io/robin-noguier-portfolio-2020/322d1d3e-4b21-4992-8126-826610c04af1_emoji.gif"
              className="jsx-1811451095 video"
              style={{ width: `5rem` }}
            >
              <source
                src="https://robin-noguier-portfolio-2020.cdn.prismic.io/robin-noguier-portfolio-2020/d92359c2-9522-4cc6-8738-c7b3eb2b4763_Emoji_Long.webm"
                type="video/webm"
                className="jsx-1811451095"
              />
              <track
                src="captions_en.vtt"
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>
          </div>
          <p style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
            Copyright © 2020 - {new Date().getFullYear()} Elalfy Mohamed. All
            rights reserved.
          </p>
        </div>

        <img className="footer-icon" src={icon} alt="icon" />
      </div>
    </footer>
  )
}

Footer.prototype = {
  setClassFooter: PropTypes.string.isRequired,
  // setClassFooter: PropTypes.bool,
}

export default Footer
