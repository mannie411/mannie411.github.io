import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="bar-title">
        <h6>emmanuel-imoh</h6>
      </div>
      <nav className="menu">
        <div className="left">
          <div className="tab active">
            <Link to="/">_home</Link>
          </div>
          <div className="tab">
            <Link to="/about">_about-me</Link>
          </div>
          <div className="tab">
            <Link to="/projects">_projects</Link>
          </div>
        </div>
        <div className="right">
          <div className="tab extra">
            <Link to="/contact">_contact-me</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
