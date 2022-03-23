/** @format */

import React from "react";
import ReactDOM from "react-dom";
import SearchContext from "./context/searchBody";
import SidebarContext from "./context/sidebarContext";
import Root from "./Root";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <SearchContext>
      <SidebarContext>
        <Root />
      </SidebarContext>
    </SearchContext>
  </React.StrictMode>,
  document.getElementById("root")
);
