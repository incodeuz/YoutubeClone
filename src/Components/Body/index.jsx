import React, { useContext } from "react";
import { BodySearchContext } from "../../context/searchBody";
import { ButtonContext } from "../../context/sidebarContext";
import {
  BodyCon,
  CardCon,
  CardImg,
  CardTitle,
  CardName,
  DisplayFlex,
  DisplayFlexColumn,
} from "./style";

const Body = () => {
  const [logo] = useContext(ButtonContext);
  const [filter] = useContext(BodySearchContext);
  console.log(filter);

  return (
    <BodyCon logo={logo}>
      {filter.map((value) => {
        return (
          <CardCon>
            <CardImg src={value.url} />
            <DisplayFlex>
              <CardTitle src={value.avatar} />
              <DisplayFlexColumn>
                <CardName>{value.name}</CardName>
              </DisplayFlexColumn>
            </DisplayFlex>
          </CardCon>
        );
      })}
    </BodyCon>
  );
};

export default Body;
