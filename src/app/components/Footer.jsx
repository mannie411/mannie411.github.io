import React from "react";

import { github, linkedin, twitter } from "./Icons";

const Footer = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  const date = new Date().toLocaleDateString();

  return (
    <footer className="footer">
      <div className="social">
        <div className="title">
          <h6>find me on:</h6>
        </div>
        <div className="link">
          <a
            href="https://www.twitter.com/_mannie411"
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitter}
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/mannie411"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.github.com/mannie411"
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </div>
      </div>
      <div className="date">
        <span>{time}</span>
        <span>{date}</span>
      </div>
      <div className="credit">
        <p className="text">
          <span> Inspired by:</span>
          <span>
            {" "}
            <a
              href="https://www.behance.net/gallery/132027861/Portfolio-Concept"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "5px" }}
            >
              Yanka Darelova
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
