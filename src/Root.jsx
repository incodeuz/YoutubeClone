/** @format */

import React, { useContext } from "react";
import Body from "./Components/Body";
import FootNav from "./Components/FootNav";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { ButtonContext } from "./context/sidebarContext";
import { DisplayFlexColumn, DisplayFlexContent } from "./rootStyle";

const Root = () => {
  const [logo, setLogo] = useContext(ButtonContext);
  return (
    <div>
      <Navbar />
      <DisplayFlexContent>
        {logo ? <Sidebar />:<h1>Dabba bolle</h1>}
        <DisplayFlexColumn>
          <FootNav />
          <Body />
        </DisplayFlexColumn>
      </DisplayFlexContent>
    </div>
  );
};

export default Root;
