import styled from "@emotion/styled"
import { Device } from "../../svg/Device"

// Styled
export const Div = styled.div`
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
    height: 90px;
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

export const C4De4 = styled.div`
  display: flex;
  justify-content: center;
`

export const P = styled.p`
  font-size: 16px;
  color: #fff;
  /* color: #12131d; */
  mix-blend-mode: difference;
  margin-bottom: 0;

  @media ${Device.tablet} {
    font-size: 14px;
    /* color: #12131d; */
  }
  @media ${Device.mobileL} {
    font-size: 12px;
    color: #12131d;
  }
`
export const Icon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  position: absolute;
  top: 49px;
  @media ${Device.tablet} {
    width: 2.5rem;
    height: 2.5rem;
  }
`
export const Vid = styled.video`
  @media ${Device.tablet} {
    width: 4rem !important;
  }
  @media ${Device.mobileL} {
    width: 3rem !important;
  }
`
export const Di = styled.div`
  @media ${Device.tabletS} {
    transform: translateY(-1.5691px) !important;
  }
`
