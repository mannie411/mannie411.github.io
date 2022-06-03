import React from "react";
import { Sidebar, AboutPane } from "../components/about";

const About = () => {
  return (
    <div className="about">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="layout">
        <AboutPane />
      </div>
    </div>
  );
};

export default About;
