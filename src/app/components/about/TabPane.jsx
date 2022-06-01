import React from "react";
import { Outlet } from "react-router-dom";

import { cancel } from "../Icons";

const TabPane = () => {
  // let location = useLocation();
  // console.log(location);
  return (
    <div className="tab-pane">
      <div className="spacer">
        <div className="tab">
          <h4>Tab</h4>
          <span>{cancel}</span>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default TabPane;
