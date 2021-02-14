import React from "react"
import PropTypes from "prop-types"

const Title = ({ title, setTitle, setUnderline }) => {
  return (
    <div className="section-title">
      <h2 className={setTitle ? setTitle : "title"}>
        {title || "default title"}
      </h2>
      <div className={setUnderline ? setUnderline : "underline"} />
    </div>
  )
}
Title.propTypes = {
  setTitle: PropTypes.string,
  title: PropTypes.string,
  setUnderline: PropTypes.string,

}

Title.defaultProps = {
  title: ``,
}
export default Title
