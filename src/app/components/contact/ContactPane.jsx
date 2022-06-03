import React from "react";

import { cancel } from "../Icons";

const ContactPane = () => {
  return (
    <div className="contact-pane">
      <div className="spacer">
        <div className="tab">
          <h4>Tab</h4>
          <span>{cancel}</span>
        </div>
      </div>
      <div className="wrapper bt">
        <div className="form-code">
          <div className="inner">
            <form className="container form" action="">
              <div className="form-group">
                <label htmlFor="name">_name:</label>
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Jonathan Davis |"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">_email:</label>
                <input type="text" name="" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">_message:</label>
                <textarea name="" id="message" rows="10"></textarea>
              </div>
              <button className="btn">submit</button>
            </form>
          </div>
          <div className="code-snippet"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPane;
