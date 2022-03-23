/** @format */

import React, { useContext } from "react";
import Body from "./Components/Body";
import FootNav from "./Components/FootNav";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { ButtonContext } from "./context/sidebarContext";
import { DisplayFlexColumn, DisplayFlexContent } from "./rootStyle";

const Root = () => {
  const [logo] = useContext(ButtonContext);
  return (
    <div>
      <Navbar />
      <DisplayFlexContent>
        {logo && <Sidebar />}
        <DisplayFlexColumn>
          <FootNav />
          <Body />
        </DisplayFlexColumn>
      </DisplayFlexContent>
    </div>
  );
};

export default Root;
