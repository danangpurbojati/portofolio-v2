import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavWrapper = styled(motion.div)`
    background-color: white;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 14px 0;
    z-index: 999;
`;

export const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled(NavLink)`
    height: 40px;
    width: 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`;

export const Logo = styled.img`
    height: 100%;
`;

export const MainMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    li {
        margin-left: 24px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MainLink = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    text-transform: capitalize;
    color: #173D7A;
    transition: .2s ease-in-out;
    padding: 5px 0 ;
    display: inline-block;
    padding: 8px 16px;
    /* border-radius: 4px; */
    font-weight: bold;

    &:hover, &.active {
        /* box-shadow: 0 1px 3px 0 rgba(255, 44, 156, 0.3); */
        /* font-weight: bold; */
        color: #FF2C9C;
    }
`;

export const MobileNav = styled.div`
    background-color: rgba(0,0,0,0.4);
    display: ${({active}) => active ? 'block' : 'none'};
    position: absolute;
    top: 99%;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: .2s ease-in-out;
`;

export const MobileContent = styled.div`
    background-color: white;
    /* z-index: 999; */
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 0;
`;

export const MobileLink = styled(NavLink)`
    text-decoration: none;
    /* border: 1px solid red; */
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    padding: 8px 16px;
    margin: 14px 0;
    transition: .2s ease-in-out;

    &:hover, &.active {
        font-weight: bold;
        box-shadow: 0 1px 3px 0 rgba(255, 44, 156, 0.3);
        color: #FF2C9C;
    }
`;