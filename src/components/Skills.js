import React from 'react'
//Components
import data from '../constants/Skills'
import TotalSkills from "../svg/skills/TotalSkills"
// Image
import sillsImg from '../assets/undraw_web_developer_p3e51.svg'
import zap from '../assets/icon/iconfinder_zap_298890.svg'




const Skills = () => {

  return (
    <>
      <section className="skills-page skills-center">
        <div className="skills-container">
          <div className="skills-image-div flex animate___">
            <img src={sillsImg} alt="Alfy Working" />
          </div>
          <article className="skills-text- flex animate___">
            <h1 className="skills-heading"> What i do </h1>
            <p className="subTitle skills-text-subtitle">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <div>
              <div className="software-skills-main-div">
                <ul className="dev-icon">
                  {data.map(index => {
                    const { id, img, name, color } = index;
                    return (
                      <li key={id} className="software-skills-inline" name={name}>
                        <img src={img} alt={name} />
                        <p style={{ color: `${color}` }}>{name}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p className="subTitle skills-text">
                <img src={zap} alt="zap" style={{ width: `1em`, height: `1em`, margin: `0 0.05em 0 0.01em`, verticalAlign: `-0.1em` }} />
                Develop highly interactive Front end / User Interfaces for your web and soon mobile applications</p>
            </div>
          </article>
        </div>
        <TotalSkills />
      </section>
    </>
  )
}
export default Skills