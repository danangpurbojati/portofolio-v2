import React, { useState, useEffect } from 'react';
import { Hamburger, HamburgerBox, HamburgerInner } from './hamburgerStyle';
import { Logo, MainLink, MainMenu, MainNav, MobileContent, MobileLink, MobileMenu, MobileNav, NavLogo, NavWrapper } from './navStyled';
import logo from '../../assets/images/logo.png';
import { Container } from '../../globalStyles';
import { mainAnimation } from '../../globalStyles/animation';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const clickNavbar = () => {
        setOpenNav(!openNav);
    }

    const closeMenu = () => {
        setOpenNav(false);
    }

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [openNav])

    return (
        <NavWrapper
            variants={mainAnimation}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <MainNav>
                    <NavLogo onClick={closeMenu}  to="/">
                        <Logo src={logo} alt="logo" />
                    </NavLogo>
                    <MainMenu>
                        <li>
                            <MainLink onClick={closeMenu} exact to="/">home</MainLink>
                        </li>
                        <li>
                            <MainLink onClick={closeMenu} to="/about">about me</MainLink>
                        </li>
                        <li>
                            <MainLink onClick={closeMenu} to="/portofolio">portofolio</MainLink>
                        </li>
                        <li>
                            <MainLink onClick={closeMenu} to="/contact">contact</MainLink>
                        </li>
                    </MainMenu>
                    <Hamburger onClick={clickNavbar}>
                        <HamburgerBox>
                            <HamburgerInner active={openNav}>
                            </HamburgerInner>
                        </HamburgerBox>
                    </Hamburger>
                </MainNav>
            </Container>
            
            <MobileNav active={openNav}>
                <MobileContent>
                    <Container>
                        <MobileMenu>
                            <MobileLink onClick={closeMenu} exact to="/">home</MobileLink>                            
                            <MobileLink onClick={closeMenu} to="/about">about me</MobileLink>                           
                            <MobileLink onClick={closeMenu} to="/portofolio">portofolio</MobileLink>
                            <MobileLink onClick={closeMenu} to="/contact">contact</MobileLink>
                        </MobileMenu>
                    </Container>
                </MobileContent>
            </MobileNav>
        </NavWrapper>
    )
}

export default Navbar
