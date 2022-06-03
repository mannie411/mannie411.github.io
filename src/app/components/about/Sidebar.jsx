import React from "react";
import { Link } from "react-router-dom";
import {
  terminal,
  user,
  gamePad,
  arrowDown,
  folder,
  markDown,
  arrowDownAlt,
  userFile,
  design,
  cloud,
  skill,
  code,
} from "../Icons";

const Sidebar = () => {
  return (
    <>
      <div className="tab icons">
        <ul className="nav">
          <li className="link">{terminal}</li>
          <li className="link active">{user}</li>
          <li className="link">{gamePad}</li>
        </ul>
      </div>
      <div className="tab links">
        <ul className="nav">
          <li>
            <Link to="" className="navlink">
              <span>{arrowDown} </span>
              personal-info
            </Link>
            <div className="sub active">
              <ul className="nav">
                <li className="link">
                  <Link to="" className="user">
                    <span>{userFile} </span>bio
                  </Link>
                </li>
                <li className="link">
                  <span>{arrowDownAlt} </span>
                  <Link to="/about/education" className="edu">
                    <span>{folder} </span>education
                  </Link>
                  <div className="sub active">
                    <ul>
                      <li className="link">
                        <Link to="/about/education/" className="deg">
                          <span>{markDown} </span>degree
                        </Link>
                      </li>
                      <li className="link">
                        <Link to="/about/education/cert" className="cert">
                          <span>{markDown} </span>certification
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about/experience" className="navlink extra">
              <span>{arrowDown} </span>
              experience-info
            </Link>
            <div className="sub">
              <ul className="nav">
                <li className="link">
                  <Link to="/about/experience/dev">
                    <span>{code} </span>
                    development
                  </Link>
                </li>
                <li className="link">
                  <Link to="/about/experience/design">
                    <span>{design} </span>
                    ui-ux
                  </Link>
                </li>
                <li className="link">
                  <Link to="/about/experience/cloud">
                    <span>{cloud} </span>
                    devops
                  </Link>
                </li>
                <li className="link">
                  <Link to="/about/experience/skills">
                    <span>{skill} </span>
                    skills
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
