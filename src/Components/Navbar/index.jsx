import React from 'react'
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
    UserAccaunt
} from './style'

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavWrapper>
                    <DiplayFlexCon>
                        <SidebarLogo />
                        <YoutubeLogo />
                    </DiplayFlexCon>
                    <DiplayFlexCon>
                        <form autoComplete='on'>
                            <InputSearchBar placeholder='Enter a request' />
                        </form>
                        <SearchLogo />
                    </DiplayFlexCon>
                    <DiplayFlexCon >
                        <CreateVideoIcon />
                        <MenuLogoIcon />
                        <NotificaionLogoIcon />
                        <UserAccaunt />
                    </DiplayFlexCon>
                </NavWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar