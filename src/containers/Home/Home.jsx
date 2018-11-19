import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <Projects/>
    </div>
  );
};

export default Home;
