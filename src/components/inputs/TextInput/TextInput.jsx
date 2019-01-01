import React from "react"
import "./TextInput.scss"
import PropTypes from "prop-types"

const TextInput = ({value, label}) => {

  return <div className="TextInput"> 
    {label && <div className="label" >{label}:</div>}
   <input value={value} type="text"/>
  </div>
  
}

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
}

export default TextInput