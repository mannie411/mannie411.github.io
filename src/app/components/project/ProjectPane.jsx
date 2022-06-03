import React from "react";

import Card from "./Card";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

import { react, vue, cancel } from "../Icons";

const ProjectPane = () => {
  const projects = [
    {
      img: img1,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img2,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img3,
      type: vue,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img1,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img2,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img3,
      type: vue,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img1,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img2,
      type: react,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
    {
      img: img3,
      type: vue,
      desc: "Ad consectetur fugiat et ullamco eu Lorem proident nostrud sunt minim consequat.",
      link: "",
    },
  ];

  return (
    <div className="projects-pane">
      <div className="spacer">
        <div className="tab">
          <h4>Tab</h4>
          <span>{cancel}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="projects-card">
            <div className="grid">
              {[...projects].map((x, i) => (
                <Card key={i} props={x} />
              ))}
            </div>
            {/* <div className="grid">
              {[...projects].map((x, i) => (
                <Card key={i} props={x} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPane;
