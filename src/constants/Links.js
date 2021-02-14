import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "./GitImage"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Projects",
    url: "/Projects/",
  },
  {
    id: 3,
    text: "About",
    url: "/About/",
  },
  {
    id: 4,
    text: "Contact",
    url: "/Contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>
        {link.text}
        <svg viewBox="0 0 70 36">
          <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
      </Link>
    </li>
  )
})

const Links = ({ styleClass, onCondition }) => {
  return (
    <div className={`navbar-links ${onCondition ? "navbar_active" : ""}`}>
      <Image />
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
      </ul>
    </div>
  )
}

Link.propTypes = {
  styleClass: PropTypes.string,
}

export default Links
