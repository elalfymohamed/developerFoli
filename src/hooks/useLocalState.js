import { useState, useEffect } from "react"

export const useLocalState = (localItem, key) => {
  const [theme, setTheme] = useState(() => {
    const stickyValue = localStorage.getItem(key)

    return stickyValue !== null ? JSON.parse(stickyValue) : localItem
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme))
  }, [key, theme])

  return [theme, setTheme]
}
