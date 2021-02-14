import React from "react"
//Components
import data from "../Skills"
import Title from "../../components/Title"
import TotalSkills from "../../svg/skills/TotalSkills"
// Style
import "../style/_Skills.scss"

const MySkills = () => {
  return (
    <section className="skills bg-grey">
      <Title title="My Skills" />
      <div className="skills-center section-center animate___">
        {data.map(index => {
          const { id, img, name, color } = index
          return (
            <article key={id} className="skill skill-center animate___">
              <img src={img} alt={name} className="skills-img" />
              <div className="box-info">
                <h4 className={`skills-title`} style={{ color: `${color}` }}>
                  {name}
                </h4>
              </div>
            </article>
          )
        })}
      </div>
      <TotalSkills />
    </section>
  )
}

export default MySkills
