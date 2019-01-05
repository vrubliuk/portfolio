import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import {withRouter } from "react-router-dom"
import Sidebar from "../../HOCs/Sidebar/Sidebar.jsx";

import Profile from "../../components/Profile/Profile";
import LogIn from "../../components/buttons/LogIn";

import Button from "../../components/Button/Button.jsx"
import Tags from "../../components/Tags/Tags";
import Projects from "../../components/Projects/Projects";
import Footer from "../../HOCs/Footer/Footer.jsx"
import Isotope from "isotope-layout";



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
    const {profile, categories, education, languages, history} = this.props;

    return (
      <div className="Home">
        <Sidebar>
          <Profile profile={profile} categories={categories} education={education} languages={languages}  />
        </Sidebar>
        <main>
          
          <Button icon="logIn" additionalClassName="blue" style={{ width: "40px", height: "40px", position: 'absolute', top: '20px', right: '20px'}} onClick={() => history.push('/admin')}/>

          <Tags projects={this.props.projects} activeTag={this.state.activeTag} setActiveTag={this.setActiveTag} />
          <Projects projects={this.props.projects} activeTag={this.state.activeTag} />
          {/* <Resume /> */}
        </main>
        <Footer>
          <Button icon="download" text="Download Resume" additionalClassName="blue" style={{ width: "200px", height: "40px"}} />
          <Button icon="open" text="Open Resume" additionalClassName="blue" style={{ width: "200px", height: "40px"}} />
        </Footer>

      </div>
    );
  }
}

const mapStateToProps = ({ profile, skills, education, languages, projects }) => ({ profile, categories: skills.categories, education: education.education, languages: languages.languages, projects: projects.projects.sort((a, b) => b.priority - a.priority) });

export default withRouter(connect(mapStateToProps)(Home));
