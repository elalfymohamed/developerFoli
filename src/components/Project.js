import React from "react"
//Components
import Info from "./ProjectItem"
import Title from "./Title"
import Total from "../svg/Projects/TotalProjects"


const Project = () => {
  return (
    <section className="section project">
      <Title title="Projects" />
      <Total />
      <div className="section_center project_center">
        <Info />
      </div>
    </section>
  )
}

export default Project
