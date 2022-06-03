import React from "react";

import { SideBar, ContactPane } from "../components/contact/";

const contact = () => {
  return (
    <div className="contact">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="layout">
        <ContactPane />
      </div>
    </div>
  );
};

export default contact;
