/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="top">
          <h1>Hello World! I am</h1>
          <h2>Emmanuel Imoh</h2>
          <h3>Full-Stack Software Engineer</h3>
        </div>
        <div className="bottom">
          <h6>// write the code below to continue:</h6>
          <h4>
            &gt; <span>whois</span>
          </h4>
        </div>
      </div>
      <div className="project">
        <Card />
      </div>
    </div>
  );
};

export default Home;
