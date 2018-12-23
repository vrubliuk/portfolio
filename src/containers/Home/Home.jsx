import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import {withRouter } from "react-router-dom"
import Sidebar from "../../HOCs/Sidebar/Sidebar.jsx";

import Profile from "../../components/Profile/Profile";
import LogIn from "../../components/buttons/LogIn";

import Button from "../../components/Button/Button.jsx"
import Resume from "../../components/Resume/Resume";
import Tags from "../../components/Tags/Tags";
import Projects from "../../components/Projects/Projects";
import Isotope from "isotope-layout";

const mapStateToProps = ({ profile, projects }) => ({ profile, projects: projects.projects.sort((a, b) => b.priority - a.priority) });

class Home extends Component {
  state = {
    activeTag: "All"
  };

  isotope;

  setActiveTag = tag => {
    this.setState({
      activeTag: tag
    });
  };

  initIsotope = () => {
    const projects = document.querySelector(".Projects");
    this.isotope = new Isotope(projects, {
      itemSelector: ".project",
      masonry: {
        isFitWidth: true
      }
    });
  };

  componentDidMount() {
    this.initIsotope();
  }

  componentDidUpdate() {
    this.isotope.arrange({ filter: this.state.activeTag === "All" ? "*" : `.${this.state.activeTag}` });
  }

  render() {
    const {history} = this.props;

    return (
      <div className="Home">
        <Sidebar>
          <Profile profile={this.props.profile} />
        </Sidebar>
        <div>
          
          <Button icon="logIn" additionalClassName="blue" style={{ width: "40px", height: "40px", position: 'absolute', top: '20px', right: '20px'}} onClick={() => history.push('/admin')}/>

          <Tags projects={this.props.projects} activeTag={this.state.activeTag} setActiveTag={this.setActiveTag} />
          <Projects projects={this.props.projects} activeTag={this.state.activeTag} />
          <Resume />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Home));
