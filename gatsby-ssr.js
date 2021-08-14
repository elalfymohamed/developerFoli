import React from "react"
import GlobalStateProvider from "./src/store/GlobalStateProvider"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
)
