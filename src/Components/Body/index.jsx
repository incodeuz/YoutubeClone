import React, { useContext } from "react";
import { BodyContext } from "../../context/choose";
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
  CardChannelName,
  CardViews,
  CardWhenPosted,
} from "./style";

const Body = () => {
  const [logo] = useContext(ButtonContext);
  const [filter] = useContext(BodySearchContext);
  const [click] = useContext(BodyContext);
  console.log(filter);

  return (
    <BodyCon logo={logo}>
      {filter
        .filter((e) => click === '' ? true : click === e.type)
        .map((value) => {
          return (
            <CardCon>
              <CardImg src={value.url} />
              <DisplayFlex>
                <CardTitle src={value.avatar} />
                <DisplayFlexColumn>
                  <CardName>{value.name}</CardName>
                  <CardChannelName>{value.channelName}</CardChannelName>
                  <DisplayFlex>
                    <CardViews>{value.views}</CardViews>
                    <CardWhenPosted>{value.whenPosted}</CardWhenPosted>
                  </DisplayFlex>
                </DisplayFlexColumn>
              </DisplayFlex>
            </CardCon>
          );
        })}
    </BodyCon>
  );
};

export default Body;
