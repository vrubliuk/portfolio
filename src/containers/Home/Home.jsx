import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "../../HOCs/Sidebar/Sidebar.jsx";

import Profile from "../../components/Profile/Profile";

import Button from "../../components/Button/Button.jsx";
import Tags from "../../components/Tags/Tags";
import Projects from "../../components/Projects/Projects";
import Footer from "../../HOCs/Footer/Footer.jsx";
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
    const { activeTag } = this.state;
    const { profile, projects, resume, history } = this.props;
    const { setActiveTag } = this;

    return (
      <div className="Home">
        <Sidebar>
          <Profile profile={profile} />
        </Sidebar>
        <main>
          <Button
            icon="logIn"
            additionalClassName="blue"
            style={{ width: "40px", height: "40px", position: "absolute", top: "20px", right: "20px" }}
            onClick={() => history.push("/admin")}
          />

          <Tags projects={projects} activeTag={activeTag} setActiveTag={setActiveTag} />
          <Projects projects={projects} activeTag={activeTag} />
        </main>
        {resume && (
          <Footer>
            <Button icon="download" text="Download Resume" additionalClassName="blue" style={{ width: "200px", height: "40px" }} />
            <Button icon="open" text="Open Resume" additionalClassName="blue" style={{ width: "200px", height: "40px" }} />
          </Footer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ general, contacts, skills, experiences, education, languages, projects, resume }) => ({
  profile: { ...general, ...contacts, ...skills, ...experiences, ...education, ...languages },
  projects: projects.projects,
  resume: resume.resume
});

export default withRouter(connect(mapStateToProps)(Home));
