import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import { BodyCon } from "./style";

const Body = () => {
  const [logo] = useContext(ButtonContext);

  return <BodyCon logo={logo}>Body</BodyCon>;
};

export default Body;
