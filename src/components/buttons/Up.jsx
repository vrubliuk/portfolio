import React, { Component } from "react";
import "../../assets/styles/button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";
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
      <div className="Up button" onClick={this.handleClick}>
        <FontAwesomeIcon icon={icons.up} />
      </div>
    );

    return this.state.isShown ? up : null;
  }
}

export default Up;
