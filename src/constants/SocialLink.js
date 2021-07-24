import React, { useContext } from "react"
import PropTypes from "prop-types"
// Gatsby
import { useStaticQuery, graphql } from "gatsby"
//  Icon
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaFileDownload } from "react-icons/fa"
import Context from "../store/context"

const SocialLink = ({ styleClass }) => {
  // Theme
  const { state } = useContext(Context)
  //
  const data = [
    {
      id: 1,
      icon: (
        <AiFillGithub
          className={state.isDark ? "social-icon dark_mode" : "social-icon"}
        />
      ),
      url: "https://github.com/elalfymohamed",
      title: "GO to Github",
    },
    {
      id: 2,
      icon: (
        <AiFillLinkedin className="social-icon" style={{ color: "#2977c9" }} />
      ),
      url: "https://www.linkedin.com/in/elalfy-mohamed-33162410b/",
      title: "GO to LinkedIn",
    },
  ]

  const links = data.map(icons => {
    return (
      <li key={icons.id}>
        <a
          href={icons.url}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title={icons.title}
        >
          {icons.icon}
        </a>
      </li>
    )
  })

  // File
  const file = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            relativePath
          }
        }
      }
    }
  `)

  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {links}
      <li>
        <a
          href="mailto:elalfy.m002@gmail.com"
          className={state.isDark ? "social-link dark_mode" : "social-link"}
          title="Send Email"
        >
          <MdEmail className="social-ico" />
        </a>
      </li>
      {file.allFile.edges.map((file, index) => (
        <li key={index}>
          <a
            href={file.node.relativePath}
            className="social-link"
            download
            title="Download CV"
          >
            <FaFileDownload
              className={"social-ico"}
              style={{ color: "#FBBB3C" }}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

SocialLink.prototype = {
  styleClass: PropTypes.string,
}

export default SocialLink
