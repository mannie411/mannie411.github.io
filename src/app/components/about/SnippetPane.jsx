import React from "react";
import { bubble, star } from "../Icons";

const SnippetPane = () => {
  return (
    <div className="snippet-pane">
      <div className="spacer"></div>
      <div className="container">
        <div className="title">
          <p>{"// Code Showcase"}</p>
        </div>
        <div className="code-snippet">
          <div className="profile">
            <div className="user">
              <img src="" alt="" srcSet="" />
              <div>
                <p>@mannie411</p>
                <p>created 5 months ago</p>
              </div>
            </div>
            <div className="review">
              <p>{bubble} details</p>
              <p>{star} 3 stars</p>
            </div>
          </div>
          <iframe
            title="code-snippet"
            frameBorder="0"
            src="data:text/html;charset=utf-8,
                <head><base target='_blank' /></head>
                <body>
                  <script src='https://gist.github.com/mannie411/aecdaee2b8a3f23b5d42bfa9a88da19d.js'></script>
               </body>"
          />
        </div>
      </div>
    </div>
  );
};

export default SnippetPane;
