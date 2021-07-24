import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="page-header">{siteTitle}</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
