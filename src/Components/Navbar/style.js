/** @format */

import styled from 'styled-components';
import HeaderLogo from '../../assets/Assets/header/headerLogo/youtubeLogo.png';
import HamburgerLogo from '../../assets/Assets/header/headerLogo/hamburgerMenu.png';
import SearchIcon from '../../assets/Assets/header/headerinput/1.png';
import CreateVideo from '../../assets/Assets/header/headerMore/1.png';
import MenuLogo from '../../assets/Assets/header/headerMore/2.png';
import NotificaionLogo from '../../assets/Assets/header/headerMore/3.png';
import UserIcon from '../../assets/imgs/ava4.png';

const NavbarContainer = styled.div`
	width: 100%;
	background: #212121;
	height: 56px;
	padding: 0 25px;
`;
const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 56px;
`;

const YoutubeLogo = styled.img.attrs({
	src: `${HeaderLogo}`,
})`
	width: 90px;
`;

const SidebarLogo = styled.img.attrs({
	src: `${HamburgerLogo}`,
})`
	width: 20px;
	margin-right: 25px;
`;

const DiplayFlexCon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const InputSearchBar = styled.input`
	width: 570px;
	height: 35px;
	background: #000000;
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-sizing: border-box;
	border-radius: 2px 0px 0px 2px;
	padding: 4px 8px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: white;
	outline: none;
`;

const SearchLogo = styled.img.attrs({
	src: `${SearchIcon}`,
})`
	width: 52px;
`;
const CreateVideoIcon = styled.img.attrs({
	src: `${CreateVideo}`,
})`
	width: 30px;
`;
const MenuLogoIcon = styled.img.attrs({
	src: `${MenuLogo}`,
})`
	width: 30px;
	margin-left: 30px;
`;
const NotificaionLogoIcon = styled.img.attrs({
	src: `${NotificaionLogo}`,
})`
	width: 25px;
	margin-left: 30px;
`;
const UserAccaunt = styled.img.attrs({
	src: `${UserIcon}`,
})`
	width: 35px;
	margin-left: 30px;
	border-radius: 50%;
`;

export {
	NavbarContainer,
	MenuLogoIcon,
	NotificaionLogoIcon,
	CreateVideoIcon,
	InputSearchBar,
	DiplayFlexCon,
	SearchLogo,
	NavWrapper,
	YoutubeLogo,
	SidebarLogo,
	UserAccaunt,
};
