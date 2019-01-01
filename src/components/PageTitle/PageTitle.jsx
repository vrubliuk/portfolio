import React from 'react'
import "./PageTitle.scss"
import PropTypes from "prop-types"

const PageTitle = ({title}) => {
  return <div className="PageTitle">{title}</div>  
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle;

