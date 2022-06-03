import React from "react";
import { Link } from "react-router-dom";

import { arrowDown, mail, phone, externalLink } from "../Icons";

const Sidebar = () => {
  return (
    <div className="links">
      <ul className="nav">
        <li>
          <Link to="" className="navlink">
            <span>{arrowDown} </span>
            contacts
          </Link>
          <div className="sub active">
            <ul className="nav">
              <li className="link">
                <Link to="" className="user">
                  <span>{mail} </span>dev.mannie@gmail.com
                </Link>
              </li>
              <li className="link">
                <Link to="" className="user">
                  <span>{phone} </span>+23409033656275
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="" className="navlink extra">
            <span>{arrowDown} </span>
            find-me-also-in
          </Link>
          <div className="sub">
            <ul className="nav">
              <li className="link">
                <Link to="" className="user">
                  <span>{externalLink} </span>Instagram
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
