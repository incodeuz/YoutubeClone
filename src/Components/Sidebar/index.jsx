import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonContext } from "../../context/sidebarContext";
import { logoData, logoDataTwo } from "../../mock/logoApi";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  SidebarCon,
  ItemsCon,
  ItemIcon,
  ItemsConTwo,
  ItemTitle,
} from "./style";

const Sidebar = () => {
  const [logo] = useContext(ButtonContext);
  // const navigate = useNavigate()
  return (
    <SidebarCon logo={logo}>
      <ItemsConTwo marginBottom>
        {logoDataTwo.map((value) => {
          return (
            <NavLink style={{ textDecoration: "none" }} to={value.path}>
              <ItemsCon className="bir">
                <ItemIcon src={value.icon} />
                <ItemTitle>{value.title}</ItemTitle>
              </ItemsCon>
            </NavLink>
          );
        })}
        {/* <div onClick={() => navigate(/)}>home</div> */}
      </ItemsConTwo>
      {logoData.map((value) => {
        return (
          <NavLink style={{ textDecoration: "none" }} to={value.path}>
            <ItemsCon className="bir">
              <ItemIcon src={value.icon} />
              <ItemTitle>{value.title}</ItemTitle>
            </ItemsCon>
          </NavLink>
        );
      })}
    </SidebarCon>
    // </Router>
  );
};

export default Sidebar;
