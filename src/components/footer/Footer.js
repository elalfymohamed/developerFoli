import React, { useContext } from "react"
// Styled Components
import { Vid, Di, C4De4, Div, P, Icon } from "./styles"
//Components
import Animate from "../../svg/Animate"
import End from "../../svg/End/TotalEnd"
import { GlobalContext } from "../../store/GlobalStateProvider"
// image
import icon from "../../assets/icon/icon_A.svg"

const Footer = () => {
  const { state } = useContext(GlobalContext)
  return (
    <footer>
      <Animate />
      <Div>
        <C4De4>
          <Di
            className="jsx-1811451095 root"
            style={{ transform: ` translateY(-10.569105px)` }}
          >
            <Vid
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
              <track kind="captions" srcLang="en" label="english_captions" />
            </Vid>
          </Di>

          <P style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
            Copyright © 2020 - {new Date().getFullYear()} Elalfy Mohamed. All
            rights reserved .
          </P>
        </C4De4>

        <Icon src={icon} alt="icon" />
      </Div>
      <End />
    </footer>
  )
}

export default Footer
