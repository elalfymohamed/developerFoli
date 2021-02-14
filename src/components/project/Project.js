import React, { useState, useRef, useEffect } from "react"
// Gatsby link
import { Link } from "gatsby"
// Gatsby image
import { Image } from "../gatsby-images/image"
// Framer Motion
import { motion, AnimatePresence } from "framer-motion"
// Data
import data from "../../data/products.json"
//
// import Panels from "./Panels"

// Transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
// Variants
const titleSlideUP = {
  initial: { y: 200 },
  animate: { y: 0 },
}
// Parent
const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
}
// Mask Animation
const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const Project = ({ x, y, seCursorHovered }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="project-div"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible", transition: { delay: 1 } }}
          exit={{ visibility: "hidden", transition: { delay: 1 } }}
        >
          <div className="container">
            <div className="project-inner">
              <motion.ul
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {data.map(list => (
                  <List
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    src={list.src}
                    leftLineFlex={list.leftLineFlex}
                    rightLineFlex={list.rightLineFlex}
                    thumbnailPosition={list.thumbnailPosition}
                    x={x}
                    y={y}
                    offset={list.offset}
                    offsetTop={list.offsetTop}
                    seCursorHovered={seCursorHovered}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
        {/* <Panels /> */}
      </AnimatePresence>
    </>
  )
}

const List = ({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
  id,
  x,
  y,
  offset,
  offsetTop,
  seCursorHovered,
}) => {
  let list = useRef()
  const [hoverState, setHoverState] = useState(false)
  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  })
  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    })
  }, [hoverState])

  return (
    <li ref={list}>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => seCursorHovered(true)}
            onMouseLeave={() => seCursorHovered(false)}
            className={`title | ${id}`}
          >
            <h2>
              <motion.div
                variants={titleSlideUP}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div
            className={`thumbnail left-${src}`}
            style={{ left: thumbnailPosition }}
          >
            <Image className="item" src={src} />
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left + offset,
              y: y - listPosition.top - offsetTop,
            }}
            transition={{
              ease: "linear",
            }}
            className="floating-image"
          >
            <Image src={src} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask right"
            ></motion.div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Project
