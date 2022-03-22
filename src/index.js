/** @format */

import React from "react";
import ReactDOM from "react-dom";
import SidebarContext from "./context/sidebarContext";
import Root from "./Root";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <SidebarContext>
      <Root />
    </SidebarContext>
  </React.StrictMode>,
  document.getElementById("root")
);
