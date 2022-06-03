/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="container">
          <div className="top">
            <h3>Hello World! I am,</h3>
            <h1>Emmanuel Imoh</h1>
            <h2>&gt; A Full-Stack Developer</h2>
          </div>
          <div className="bottom">
            <pre>// complete the game to continue</pre>
            <br />
            <pre>// you can also see it on my Github page</pre>
            <br />
            <pre>
              <span className="v-type">const </span>
              <span className="v-name">githubLink </span>
              <span className="v-equals">= </span>
              <span className="v-value">“https://github.com/example/url”</span>
            </pre>
          </div>
        </div>
      </div>
      <div className="game-canvas">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="canvas">
          <div className="game"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
