import React from "react";
import { Link } from "react-router-dom";

import { arrowDown, checkboxBlank, react } from "../Icons";

const Sidebar = () => {
  return (
    <div className="links">
      <ul className="nav">
        <li>
          <Link to="" className="navlink">
            <span>{arrowDown} </span>
            projects
          </Link>
          <div className="sub active">
            <ul className="nav">
              <li className="link">
                <span>{checkboxBlank} </span>
                <Link to="" className="user">
                  <span>{react} </span>React
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
