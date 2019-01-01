import React, {Component} from "react"
import "./FileInput.scss"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons/index";


class FileInput extends Component {

  handleChange = (e) => {
    console.dir(e.target);
    
  }
  
  render() {
    
    const {value, label} = this.props
    const {handleChange} = this
    
    return <div className="FileInput"> 
    {label && <div className="label" >{label}:</div>}
    
    
    <div className="preview" style={{backgroundImage: `url("${value}")`}}>
     
      
      { value ? <div className="remove"><FontAwesomeIcon icon={icons.trash} />  </div>  :   <div className="text"> <FontAwesomeIcon icon={icons.userLogo} /> </div> }
    </div>
    <input type="file" onChange={handleChange}/>
  </div>
  }
  
 
  
  
}

FileInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
}

export default FileInput