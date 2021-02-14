import React, { useState } from "react"
// Framer Motion
import { motion } from "framer-motion"
//Components
import Navbar from "../components/Navbar"
import useMousePosition from "../hooks/useMousePosition"
import Proj from "../components/project/Project"
import Footer from "../components/project/Footer"
import SEO from "../components/SEO"
//Styles
// import '../style/_main.scss'


const Projects = () => {
  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, seCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  return (
    <>
      <SEO title="All Projects" />
      <Navbar />
      <main className="project-container">
        <div className="main-title">
          <h1 className="title page-title">
            All
            <span className="title-offset title-show">Project</span>
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
