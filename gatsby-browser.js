import React from "react"

import "./src/style/_main.scss"

import GlobalStateProvider from "./src/store/GlobalStateProvider"

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.pointerEvents = "none"
    document.getElementById("___loader").style.clipPath =
      "circle(60px at 100% -18%)"
  }, 1000)
}

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
)


