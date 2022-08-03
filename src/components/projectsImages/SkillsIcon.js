import React from "react"

import PropTypes from "prop-types"
// icons
import { toleProject } from "../../data/SkillsData"

export const SkillsIcon = ({ icon }) => {
  return (
    <>
      {toleProject.map((item, index) => {
        return (
          icon === index + 1 && (
            <ul key={index}>
              {item.icons.map((ele, i) => (
                <li key={i}>
                  <img src={ele} alt={`icon`} />
                </li>
              ))}
            </ul>
          )
        )
      })}
    </>
  )
}

SkillsIcon.propTypes = {
  icon: PropTypes.node,
}
