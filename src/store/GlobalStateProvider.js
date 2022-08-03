import React, { createContext } from "react"
import PropTypes from "prop-types"
import useGlobalState from "./useGlobalState"

export const GlobalContext = createContext()

const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={useGlobalState()}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalStateProvider.propTypes = {
  children: PropTypes.object,
}

export default GlobalStateProvider
