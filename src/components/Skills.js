import React, { useContext } from "react"
// gatsby
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
//Components
import { imagesData } from "../data/SkillsData"
import TotalSkills from "../svg/skills/TotalSkills"
import Context from "../store/context"
// Image
import zap from "../assets/icon/iconfinder_zap_298890.svg"

// graphql
const query = graphql`
  {
    file(relativePath: { eq: "Programmer-cuate.png" }) {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
const Skills = () => {
  // Theme
  const { state } = useContext(Context)
  // Graphql Image
  const data = useStaticQuery(query)
  const image = getImage(data.file)
  const alt = data.file.name
  return (
    <>
      <section className="skills-page skills-center">
        <div className="skills-container">
          <div className="skills-image-div flex animate___">
            <GatsbyImage image={image} alt={alt} />
          </div>
          <article className="skills-text- flex animate___">
            <h3 className="skills-heading"> What i do </h3>
            <p className="subTitle skills-text-subtitle">
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
            <div>
              <div className="software-skills-main-div">
                <ul className="dev-icon">
                  {imagesData.map(item => {
                    const { id, img, name, color } = item
                    return (
                      <li
                        key={id}
                        className="software-skills-inline"
                        name={name}
                      >
                        <img src={img} alt={name} width="100%" height="100%" />
                        <p
                          style={{
                            color: `${
                              state.isDark && color === "#161614"
                                ? "#f6f6f6"
                                : color
                            }`,
                          }}
                        >
                          {name}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p className="subTitle skills-text">
                <img
                  src={zap}
                  alt="zap"
                  style={{
                    width: `1em`,
                    height: `1em`,
                    margin: `0 0.05em 0 0.01em`,
                    verticalAlign: `-0.1em`,
                  }}
                />
                <span>
                  {" "}
                  Develop highly interactive Front end / User Interfaces for
                  your web and mobile applications
                </span>
              </p>
            </div>
          </article>
        </div>
        <TotalSkills />
      </section>
    </>
  )
}
export default Skills
