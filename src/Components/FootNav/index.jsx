import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import { result } from "../../mock/footNavMock";
import { FootNavCon, FootCard } from "./style";

const FootNav = () => {
  const [logo] = useContext(ButtonContext);
  return (
    <FootNavCon logo={logo}>
      {result.map((value) => {
        return <FootCard>{value}</FootCard>;
      })}
    </FootNavCon>
  );
};

export default FootNav;
