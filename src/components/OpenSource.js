import React from "react"
//Components
import Repo from "../constants/Repo"
import Title from "../components/Title"
import Total from "../svg/Projects/TotalProjects"

const OpenSource = () => {
  return (
    <section className="open-source-section">
      <Title title="Open Source Project" />
      <Total />
      <div className="repo-cards-div-section  animate___">
        <Repo />
      </div>
    </section>
  )
}

export default OpenSource
