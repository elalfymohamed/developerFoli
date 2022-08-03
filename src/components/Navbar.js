import React, { useState, useEffect, useContext } from "react"
// Gatsby Link
import { Link } from "gatsby"
// Framer Motion
import { motion } from "framer-motion"
//Components
import PageLink from "../constants/Links"
import useMousePosition from "../hooks/useMousePosition"
import ThemeToggler from "../theme/ThemeToggler"
import { GlobalContext } from "../store/GlobalStateProvider"

const Navbar = () => {
  // Theme
  const { state } = useContext(GlobalContext)
  //
  const [condition, setCondition] = useState(false)
  const [cursorHovered, seCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  // ClassName
  const MODAL_OPEN = "navbar_active"
  const OPEN_NAV = "effect-links"

  useEffect(() => {
    if (condition) {
      document.body.classList.add(MODAL_OPEN)
      document.querySelectorAll(".nav-links li").forEach(link => {
        link.classList.add(OPEN_NAV)
      })
    } else {
      document.body.classList.remove(MODAL_OPEN)
      document.querySelectorAll(".nav-links li").forEach(link => {
        link.classList.remove(OPEN_NAV)
      })
    }
    return () => {
      setCondition(!condition)
    }
  }, [condition])

  return (
    <header className="page-header">
      <nav className="navigation">
        <motion.div
          animate={{
            x: x - 16,
            y: y - 16,
            scale: cursorHovered ? 1.3 : 1,
            opacity: cursorHovered ? 0.8 : 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          className="cursor"
        ></motion.div>
        <div className="nav-center">
          <Link to="/" className="link-home logo">
            <span className="grey-color">&lt;</span>
            <span
              className={state.isDark ? "logo-name dark_mode" : "logo-name"}
            >
              Elalfy Mohamed
            </span>
            <span className="grey-color">/&gt;</span>
          </Link>
          <ThemeToggler />
          <div className="nav-header">
            <button
              className={`hamburger ${condition ? "open_navbar" : ""}`}
              aria-label="Toggle navigation"
              type="button"
              tabIndex={`${condition ? "0" : "-1"}`}
              data-toggle="collapse"
              aria-controls="navbarNav"
              onClick={() => setCondition(!condition)}
              onMouseEnter={() => seCursorHovered(true)}
              onMouseLeave={() => seCursorHovered(false)}
            >
              <span className="line" />
              <span className="line" />
            </button>
          </div>
          <PageLink styleClass="nav-links" onCondition={condition} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
