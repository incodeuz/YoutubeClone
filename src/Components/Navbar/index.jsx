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
  Microphone,
  MicrophoneOn,
} from "./style";

const Navbar = () => {
  const [logo, setLogo, mic, setMic] = useContext(ButtonContext);
  console.log(mic);
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
              <InputSearchBar placeholder="Enter a request" />
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
