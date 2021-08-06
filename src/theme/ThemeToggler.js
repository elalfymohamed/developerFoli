import React, { useContext, useEffect } from "react"

import styled, { css } from "styled-components"

import Context from "../store/context"
import { useLocalState } from "../hooks/useLocalState"

import moon from "../assets/darkMode/moon.gif"
import sun from "../assets/darkMode/sun.gif"

const ThemeToggler = () => {
  const { state, dispatch } = useContext(Context)

  const [darkMode, setDarkMode] = useLocalState(false, "dark")
  const [lightMode, setLightMode] = useLocalState(true, "light")

  useEffect(() => {
    if (!state.isDark) {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  })
  const trans = () => {
    document.documentElement.classList.add("transition")
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition")
    }, 1000)
  }

  return (
    <ModeDark>
      <LightMode lightMode={lightMode} title="lightMode">
        <BtnMode
          type="button"
          data-toggle="lightMode"
          onClick={() =>
            setDarkMode(!darkMode) ||
            setLightMode(!lightMode) ||
            dispatch({ type: "TOGGLE_DARK_MODE" }) ||
            trans()
          }
        >
          <img src={sun} alt="lightMode" width="33" height="33" />
        </BtnMode>
      </LightMode>
      <DarkMode darkMode={darkMode} title="darkMode">
        <BtnMode
          type="button"
          data-toggle="darkMode"
          onClick={() =>
            setLightMode(!lightMode) ||
            setDarkMode(!darkMode) ||
            dispatch({ type: "TOGGLE_DARK_MODE" }) ||
            trans()
          }
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
