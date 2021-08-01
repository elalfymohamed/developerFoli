import React, { useState, useContext } from "react"
// Framer Motion
import { motion } from "framer-motion"
//Components
import useMousePosition from "../hooks/useMousePosition"
import Proj from "../components/project/Project"
import Footer from "../components/project/Footer"
import { Seo, Navbar } from "../components"
import Context from "../store/context"

const Projects = () => {
  // Theme
  const { state } = useContext(Context)
  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, seCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  return (
    <>
      <Seo title="All Projects" />
      <Navbar />
      <main className="project-container">
        <div className="main-title">
          <h1
            className={
              state.isDark
                ? "title page-title dark_mode"
                : "title page-title light_mode"
            }
          >
            All
            <span
              className={
                state.isDark
                  ? "title-offset title-show dark_mode"
                  : "title-offset title-showlight_mode"
              }
            >
              Project
            </span>
          </h1>
        </div>
        <section className={`section section-project`}>
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
          <Proj
            x={x}
            y={y}
            menuState={menuState}
            seCursorHovered={seCursorHovered}
            setMenuState={setMenuState}
          />
        </section>
      </main>
      <Footer setClassFooter="footer-project" />
    </>
  )
}

export default Projects
