import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="window">
      <div className="bar">
        <div className="bar-actions">
          <ul className="actions">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="bar-title">
          <h6>_mannie411</h6>
        </div>
      </div>
      <div className="menu">
        <div className="tab active">
          <Link to="/">_home</Link>
        </div>
        <div className="tab">
          <Link to="/about">_about</Link>
        </div>
        <div className="tab">
          <Link to="/projects">_projects</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
