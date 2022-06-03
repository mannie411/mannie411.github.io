/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card">
      <div className="heading">
        <h5>Proect 1</h5>
        <p>
          <span>4,592</span> commits
        </p>
      </div>
      <div className="body">
        <div className="img">
          <img src={props?.img} alt="" srcSet="" />
          <div className="type">{props?.type}</div>
        </div>
        <div className="desc">
          <p>{props?.desc}</p>
          <a className="btn" href="/" target="_blank" rel="noopener noreferrer">
            view-project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
