/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ChooseContext from "./context/choose";
import SearchContext from "./context/searchBody";
import SidebarContext from "./context/sidebarContext";
import Root from "./root/Root";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChooseContext>
        <SearchContext>
          <SidebarContext>
            <Root />
          </SidebarContext>
        </SearchContext>
      </ChooseContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
