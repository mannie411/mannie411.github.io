import React from "react";
import { Sidebar, SnippetPane, TabPane } from "../components/about";

const About = () => {
  return (
    <div className="about">
      <Sidebar />
      <TabPane />
      <SnippetPane />
    </div>
  );
};

export default About;
