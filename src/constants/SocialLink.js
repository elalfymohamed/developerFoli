import React from "react"
// import { Link } from 'gatsby'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { OutboundLink } from "gatsby-plugin-google-analytics"


const data = [
  {
    id: 1,
    icon: <AiFillGithub className="social-icon" />,
    url: "https://github.com/elalfy404",
  },
  {
    id: 2,
    icon: <AiFillLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/elalfy-mohamed-33162410b/",
  },
]

const links = data.map(icons => {
  return (
    <li key={icons.id}>
      <OutboundLink to={icons.url} className="social-link" target="_blank" rel="noopener">
        {icons.icon}
      </OutboundLink>
    </li>
  )
})

const SocialLink = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

export default SocialLink
