import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      localStorage.setItem("isDark", !state.isDark)
      return {
        isDark: !state.isDark,
      }

    default:
      return state
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: localStorage.getItem("isDark")
      ? JSON.parse(localStorage.getItem("isDark"))
      : false,
  })
  return { state, dispatch }
}

export default useGlobalState
