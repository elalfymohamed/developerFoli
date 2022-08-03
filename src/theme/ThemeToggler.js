import React, { useContext } from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { GlobalContext } from "../store/GlobalStateProvider"

import moon from "../assets/darkMode/moon.gif"
import sun from "../assets/darkMode/sun.gif"

const ThemeToggler = () => {
  // context state
  const { state, clickLightMode, clickDarkMode } = useContext(GlobalContext)

  const trans = () => {
    document.documentElement.classList.add("transition")
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition")
    }, 1000)
  }

  return (
    <ModeDark>
      <LightMode
        lightMode={state.isDark ? false : true}
        title="lightMode"
        data-theme="light-theme"
        data-theme-light={state.isDark ? false : true}
        data-theme-mode="light"
      >
        <BtnMode
          type="button"
          data-toggle="light-theme"
          role="button"
          data-theme-mode="light"
          onClick={() => {
            clickLightMode()
            trans()
          }}
        >
          <img src={sun} alt="lightMode" width="33" height="33" />
        </BtnMode>
      </LightMode>
      <DarkMode
        darkMode={state.isDark ? true : false}
        title="darkMode"
        data-theme="dark-theme"
        data-theme-dark={state.isDark ? true : false}
        data-theme-mode="dark"
      >
        <BtnMode
          type="button"
          data-toggle="dark-theme"
          role="button"
          data-theme-mode="dark"
          onClick={() => {
            clickDarkMode()
            trans()
          }}
        >
          <img src={moon} alt="darkMode" width="35" height="35" />
        </BtnMode>
      </DarkMode>
    </ModeDark>
  )
}

export default ThemeToggler

const ModeDark = styled.div`
  position: absolute;
  top: 1.5%;
  right: 8%;

  @media screen and (max-width: 1024px) {
    right: 10%;
  }
  @media screen and (max-width: 425px) {
    right: 15%;
  }
`
const BtnMode = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`

const LightMode = styled.div`
  position: absolute;
  top: -4rem;
  right: 8%;
  transition: all 0.4s ease-in-out;
  opacity: 0;

  @media screen and (max-width: 1024px) {
    right: 10%;
  }
  @media screen and (max-width: 425px) {
    right: 15%;
  }
  ${props =>
    props.lightMode &&
    css`
      top: 0;
      opacity: 1;
    `}
`

const DarkMode = styled.div`
  position: absolute;
  top: 3rem;
  right: 8%;
  transition: all 0.4s ease-in-out;
  opacity: 0;

  @media screen and (max-width: 1024px) {
    right: 10%;
  }
  @media screen and (max-width: 425px) {
    right: 15%;
  }
  ${props =>
    props.darkMode &&
    css`
      top: 0;
      opacity: 1;
    `};
`
