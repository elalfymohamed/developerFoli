import React from "react"
import PropTypes from "prop-types"
import { FaReact, FaSass, FaHtml5, FaGulp } from "react-icons/fa"
import { SiWebpack, SiJavascript, SiRedux } from "react-icons/si"

export const Icons = ({ icon }) => {
  return (
    <>
      {icon === 1 ? (
        <ul>
          <li>
            <FaReact />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <SiWebpack />
          </li>
        </ul>
      ) : icon === 2 ? (
        <ul>
          <li>
            <FaReact />
          </li>

          <li>
            <SiRedux />
          </li>
          <li>
            <FaSass />
          </li>
        </ul>
      ) : icon === 3 ? (
        <ul>
          <li>
            <SiJavascript />
          </li>

          <li>
            <FaGulp />
          </li>
          <li>Pug</li>
          <li>
            <FaSass />
          </li>
        </ul>
      ) : icon === 4 ? (
        <ul>
          <li>
            <SiJavascript />
          </li>

          <li>
            <FaHtml5 />
          </li>

          <li>
            <FaSass />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <FaHtml5 />
          </li>

          <li>
            <FaSass />
          </li>
        </ul>
      )}
    </>
  )
}

Icons.propTypes = {
  icon: PropTypes.node,
}
