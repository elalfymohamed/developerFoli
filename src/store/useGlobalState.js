import { useReducer, useEffect } from "react"
import { useLocalState } from "../hooks/useLocalState"

// types of actions
const TOGGLE_THEME_MODE = "TOGGLE_THEME_MODE"

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      localStorage.setItem("isDark", !state.isDark)
      return {
        isDark: !state.isDark,
      }

    default:
      return state
  }
}

const useGlobalState = () => {
  const [isThemeMode, setIsThemeMode] = useLocalState(false, "isDark")
  // Reducer to toggle dark mode and light mode in local storage and state of the app (useReducer)
  const [state, dispatch] = useReducer(reducer, {
    isDark: isThemeMode,
  })

  // click event to light mode
  const clickLightMode = () => {
    dispatch({ type: TOGGLE_THEME_MODE })
  }
  // click event to dark mode
  const clickDarkMode = () => {
    dispatch({ type: TOGGLE_THEME_MODE })
  }

  // useEffect to toggle dark mode
  useEffect(() => {
    // setIsDarkMode()
    setIsThemeMode(
      window.localStorage.getItem("isDark")
        ? JSON.parse(localStorage.getItem("isDark"))
        : false
    )
    //
    if (!state.isDark) {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  })
  return {
    state,
    dispatch,
    clickLightMode,
    clickDarkMode,
  }
}

export default useGlobalState
