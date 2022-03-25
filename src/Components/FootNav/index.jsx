import React, { useContext } from "react";
import { BodyContext } from "../../context/choose";
import { ButtonContext } from "../../context/sidebarContext";
import { result } from "../../mock/footNavMock";
import { FootNavCon, FootCard } from "./style";

const FootNav = () => {
  const [click, setClick] = useContext(BodyContext);
  const [logo] = useContext(ButtonContext);
  return (
    <FootNavCon logo={logo}>
      {result.map((value) => {
        return (
          <FootCard
            style={{
              background: click === value && "white",
              color: click === value && "black",
            }}
            onClick={() => setClick(value)}
          >
            {value}
          </FootCard>
        );
      })}
    </FootNavCon>
  );
};

export default FootNav;
