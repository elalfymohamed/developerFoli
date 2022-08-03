import { useState, useEffect } from "react"

export const useLocalState = (localItem, key) => {
  const [theme, setTheme] = useState(() => {
    const stickyValue =
      typeof window !== `undefined` ? window.localStorage.getItem(key) : null
    return stickyValue !== null ? JSON.parse(stickyValue) : localItem
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(theme))
  }, [key, theme])

  return [theme, setTheme]
}
