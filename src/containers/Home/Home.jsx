import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions/index";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Profile from "../../components/Profile/Profile";
import Button from "../../components/buttons/Button/Button.jsx";
import Tags from "../../components/Tags/Tags";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer.jsx";
import Up from "../../components/buttons/Up/Up.jsx";
import Isotope from "isotope-layout";

class Home extends Component {
  state = {
    activeTag: "All"
  };

  link = React.createRef();

  isotope;

  setActiveTag = tag => {
    this.setState({
      activeTag: tag
    });
  };

  initIsotope = () => {
    const projects = document.querySelector(".Projects");
    this.isotope = new Isotope(projects, {
      itemSelector: ".isotope-project",
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
    const { token, profile, projects, resume, history, logOut } = this.props;
    const { setActiveTag, link } = this;

    return (
      <div className="Home">
        <Sidebar>
          <Profile profile={profile} />
        </Sidebar>
        <main>
          {token ? (
            <>
              <Button
                icon="config"
                additionalClassName="grey"
                style={{ width: "40px", height: "40px", position: "absolute", top: "20px", right: "80px", borderRadius: "50%" }}
                onClick={() => history.push("/admin")}
              />
              <Button
                icon="logOut"
                additionalClassName="red"
                style={{ width: "40px", height: "40px", position: "absolute", top: "20px", right: "20px", borderRadius: "50%" }}
                onClick={logOut}
              />
            </>
          ) : (
            <Button
              icon="logIn"
              additionalClassName="blue"
              style={{ width: "40px", height: "40px", position: "absolute", top: "20px", right: "20px", borderRadius: "50%" }}
              onClick={() => history.push("/login")}
            />
          )}
          <Tags projects={projects} activeTag={activeTag} setActiveTag={setActiveTag} />
          <Projects projects={projects} activeTag={activeTag} />
        </main>
        {resume && (
          <Footer>
            <a style={{ display: "none" }} ref={link} href={resume}>
              Download
            </a>
            <Button
              icon="download"
              text="Download Resume"
              additionalClassName="blue"
              style={{ width: "200px", height: "40px" }}
              onClick={() => link.current.click()}
            />
            <Up />
          </Footer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, general, contacts, skills, experiences, educations, languages, projects, resume }) => ({
  token: auth.token,
  profile: { ...general, ...contacts, ...skills, ...experiences, ...educations, ...languages },
  projects: projects.projects,
  resume: resume.resume
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
