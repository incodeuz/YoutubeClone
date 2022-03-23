import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import { data } from "../../mock/mockApi";
import { BodyCon, CardCon, CardImg } from "./style";

const Body = () => {
  const [logo] = useContext(ButtonContext);

  return (
    <BodyCon logo={logo}>
      {data.map((value) => {
        return (
          <CardCon>
            <CardImg src={value.url} />
          </CardCon>
        );
      })}
    </BodyCon>
  );
};

export default Body;
