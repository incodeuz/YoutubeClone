import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import { logoData, logoDataTwo } from "../../mock/logoApi";
import {
  SidebarCon,
  ItemsCon,
  ItemIcon,
  ItemsConTwo,
  ItemTitle,
} from "./style";

const Sidebar = () => {
  const [logo] = useContext(ButtonContext);
  return (
    <SidebarCon logo={logo}>
      <ItemsConTwo marginBottom>
        {logoDataTwo.map((value) => {
          return (
            <ItemsCon>
              <ItemIcon src={value.icon} />
              <ItemTitle>{value.title}</ItemTitle>
            </ItemsCon>
          );
        })}
      </ItemsConTwo>
      {logoData.map((value) => {
        return (
          <ItemsCon>
            <ItemIcon src={value.icon} />
            <ItemTitle>{value.title}</ItemTitle>
          </ItemsCon>
        );
      })}
    </SidebarCon>
  );
};

export default Sidebar;
