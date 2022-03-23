import React, { useContext } from "react";
import { BodySearchContext } from "../../context/searchBody";
import { ButtonContext } from "../../context/sidebarContext";
import { data } from "../../mock/mockApi";
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
  Microphone,
  MicrophoneOn,
} from "./style";

const Navbar = () => {
  const [logo, setLogo, mic, setMic] = useContext(ButtonContext);
  const [filter, setFilter] = useContext(BodySearchContext);

  const navbarSearch = (e) => {
    const newData = data.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(newData);
  };

  return (
    <>
      <NavbarContainer>
        <NavWrapper>
          <DiplayFlexCon>
            <SidebarLogo onClick={() => setLogo(!logo)} />
            <a
              href="https://www.youtube.com/channel/UCB0Ryoxqhqu_h_FBEY233Xg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo />
            </a>
          </DiplayFlexCon>
          <DiplayFlexCon>
            <form autoComplete="on">
              <InputSearchBar
                placeholder="Enter a request"
                onChange={(e) => navbarSearch(e)}
              />
            </form>
            <SearchLogo />
            {mic ? (
              <Microphone onClick={() => setMic(!mic)} />
            ) : (
              <MicrophoneOn onClick={() => setMic(!mic)} />
            )}
          </DiplayFlexCon>
          <DiplayFlexCon>
            <CreateVideoIcon />
            <MenuLogoIcon />
            <NotificaionLogoIcon />
            <UserAccaunt />:
          </DiplayFlexCon>
        </NavWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
