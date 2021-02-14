import React from "react"
// Gatsby Link
import { Link } from "gatsby"
// Gatsby image
import { Image } from "./gatsby-images/image"
// Icons
import { Icons } from "./gatsby-images/Icons"
// Data
import data from "../data/products.json"
// Icons
import { GoBrowser } from "react-icons/go"

const ProjectItem = () => {
  return (
    <>
      {data.map(list => (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          src={list.src}
          icon={list.icon}
          ulr={list.ulr}
          number={list.number}
        />
      ))}
    </>
  )
}

const List = ({ title, src, icon, ulr, number }) => {
  return (
    <article className="project_item animate___">
      <div className="wrapper_project">
        <Image src={src} />
      </div>
      <div className="number">{number}</div>
      <div className="body">
        <div className="location">
          <h2>{title}</h2>
        </div>
        <div className="icons">
          <Icons icon={icon} />
        </div>
        <div className="headline">
          <Link to={ulr} className="link" target="_blank" rel="noopener">
            Live
            <GoBrowser />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
