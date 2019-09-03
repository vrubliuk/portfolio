import React, { Component } from "react";
import "./Up.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons/index";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

class Up extends Component {
  state = {
    isShown: false
  };

  handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  watchScroll = () => {
    this.setState({
      isShown: document.documentElement.scrollTop > 25 ? true : false
    });
  };

  componentDidMount() {
    this.watchScroll();
    window.addEventListener("scroll", this.watchScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.watchScroll);
  }
  
  render() {
    const up = (
      <button type="button" className="Up" onClick={this.handleClick}>
        <FontAwesomeIcon icon={icons.up} />
      </button>
    );

    return this.state.isShown ? up : null;
  }
}

export default Up;
