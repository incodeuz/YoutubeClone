import React from "react";
import { navigatorLogo } from "../../mock/NavigatorLogo";
import MyLogo from "../../assets/forNavbar/myLogo.png";
import { message } from "antd";
import {
  WrapperNavigator,
  NavCard,
  NavCardLogo,
  NavDisplayFlex,
  NavBody,
  NavBodyPopularAvtor,
  NavBodyTitle,
  NavBodyCardImg,
  NavBodyCarouselData,
} from "./style";
import { data } from "../../mock/mockApi";

const Navigator = () => {
  const success = () => {
    message.success("Coming Soon insha'Allah");
  };
  return (
    <WrapperNavigator>
      <NavDisplayFlex>
        {navigatorLogo.map((value) => {
          return (
            <NavCard onClick={success} key={value.id}>
              <NavCardLogo src={value.logo} />
              <h4 style={{ color: "white" }}>{value.title}</h4>
            </NavCard>
          );
        })}
      </NavDisplayFlex>
      <NavBody>
        <NavDisplayFlex>
          <NavCardLogo
            src={MyLogo}
            style={{
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              marginRight: "10px",
            }}
          />
          <NavBodyTitle>inCode Organization</NavBodyTitle>
          <NavBodyPopularAvtor>
            <h4>New popular channel</h4>
          </NavBodyPopularAvtor>
        </NavDisplayFlex>
        <NavBodyCarouselData>
          {data.map((value) => {
            return <NavBodyCardImg src={value.url} />;
          })}
        </NavBodyCarouselData>
      </NavBody>
    </WrapperNavigator>
  );
};

export default Navigator;
