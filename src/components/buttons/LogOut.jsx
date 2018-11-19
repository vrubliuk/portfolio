import React from "react";
import "./LogOut.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const LogOut = () => {
  return (
    <button type="button" className="LogOut">
      <FontAwesomeIcon icon={icons.logOut} />
    </button>
  );
};

export default LogOut;
