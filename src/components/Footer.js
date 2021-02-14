import React from "react"
// Styled Components
import styled from "styled-components"
//Components
import Animate from "../svg/Animate"
import End from "../svg/End/TotalEnd"
import { Device } from "../svg/Device"
import icon from "../assets/icon/am25.svg"
// Styled

const Div = styled.div`
  text-align: center;
  height: 128px;
  will-change: transform;
  transform: translate3d(0px, 3472px, 0px);

  @media ${Device.laptopL} {
    transform: translate3d(0px, 3861px, 0px);
  }
  @media ${Device.laptopM} {
    transform: translate3d(0px, 3598px, 0px);
  } 
  @media ${Device.laptop} {
    transform: translate3d(0px, 3177px, 0px);
  } 
  @media ${Device.tabletM} {
  transform: translate3d(0px, 3144px, 0px);
  }
  @media ${Device.tablet} {
    height:90px;
    transform: translate3d(0px, 4373px, 0px);
  }
    @media ${Device.tabletS} {
    transform: translate3d(0px, 4190px, 0px);
  }
  @media ${Device.mobileL} {
    transform: translate3d(0px, 3843px, 0px);
  }
  @media ${Device.mobileM} {
    transform: translate3d(0px, 3594px, 0px);
  }
  /* @media ${Device.mobileS} {
    transform: translate3d(0px, 3175px, 0px);
  }  */

`

const C4De4 = styled.div`
  display: flex;
  justify-content: center;
`

const P = styled.p`
  font-size: 16px;
  color: #fff;
  /* color: #12131d; */
  mix-blend-mode: difference;
  margin-bottom: 0;
  
  @media ${Device.tablet} {
  font-size:14px;
  /* color: #12131d; */
  }
   @media ${Device.mobileL} {
    font-size:12px;
  color: #12131d;
  }
`
const Icon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  position: absolute;
  top: 49px;
  @media ${Device.tablet} {
  width:2.5rem;
  height:2.5rem;
  }
`
const Vid = styled.video`
@media ${Device.tablet} {
width:4rem !important;
}
 @media ${Device.mobileL} {
    width: 3rem !important;
  }
`
const Di = styled.div`
@media ${Device.tabletS} {
transform: translateY(-1.5691px) !important;
}
`


const Footer = () => {
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
              <track
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </Vid>
          </Di>

          <P>Copyright © 2020 Elalfy Mohamed. All rights reserved .</P>
        </C4De4>
        <Icon src={icon} alt="icon" />
      </Div>
      <End />
    </footer>
  )
}

export default Footer
