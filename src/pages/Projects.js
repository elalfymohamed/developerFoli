import React, { useContext } from "react"

import Footer from "../components/project/Footer"
import ProjectItem from "../components/project/ProjectItem"
import Seo from "../components/Seo"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../store/GlobalStateProvider"
import ScrollTop from "../constants/ScrollTop"

const Projects = () => {
  // Theme
  const { state } = useContext(GlobalContext)

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
              Projects
            </span>
          </h1>
        </div>
        <section className={`section section-project`}>
          <ProjectItem />
        </section>
      </main>
      <Footer setClassFooter="footer-project" />
      <ScrollTop />
    </>
  )
}

export default Projects
