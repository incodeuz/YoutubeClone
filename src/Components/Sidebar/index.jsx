import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import {  SidebarCon } from "./style";

const Sidebar = () => {
  const [logo] = useContext(ButtonContext);
  return <SidebarCon logo={logo}>
  </SidebarCon>;
};

export default Sidebar;
