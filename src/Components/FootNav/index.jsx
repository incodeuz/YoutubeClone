import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import { FootNavCon } from "./style";

const FootNav = () => {
  const [logo] = useContext(ButtonContext);
  return <FootNavCon logo={logo}>FootNav</FootNavCon>;
};

export default FootNav;
