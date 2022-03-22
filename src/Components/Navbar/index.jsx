import React, { useContext } from "react";
import { ButtonContext } from "../../context/sidebarContext";
import {
  YoutubeLogo,
  SearchLogo,
  NavbarContainer,
  NavWrapper,
  SidebarLogo,
  DiplayFlexCon,
  InputSearchBar,
  NotificaionLogoIcon,
  MenuLogoIcon,
  CreateVideoIcon,
  UserAccaunt,
} from "./style";

const Navbar = () => {
  const [logo, setLogo] = useContext(ButtonContext);

  return (
    <>
      <NavbarContainer>
        <NavWrapper>
          <DiplayFlexCon>
            <SidebarLogo onClick={() => setLogo(!logo)} />
            <YoutubeLogo />
          </DiplayFlexCon>
          <DiplayFlexCon>
            <form autoComplete="on">
              <InputSearchBar placeholder="Enter a request" />
            </form>
            <SearchLogo />
          </DiplayFlexCon>
          <DiplayFlexCon>
            <CreateVideoIcon />
            <MenuLogoIcon />
            <NotificaionLogoIcon />
            <UserAccaunt />
          </DiplayFlexCon>
        </NavWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
