import styled from 'styled-components/macro';

export const Hamburger = styled.button`
    padding: 15px 15px;
    display: none;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        display: inline-block;
  }
`;

export const HamburgerBox = styled.span`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`;

export const HamburgerInner = styled.span`
    display: block;
    top: 50%;
    margin-top: -2px;
    
    &, &:after, &:before {
         
        width: 35px;
        height: 4px;
        background-image: linear-gradient( 45deg, #173D7A, #FF2C9C);
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    &:after, &:before {
        content: "";
        display: block;
    }

    &:before {
        top: -10px;
    }

    &:after {
        bottom: -10px;
    }

    ${({active}) => active && `
        & {
            transition-duration: 0.075s;
            transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            transform: rotate(45deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
        }

        &:before {
            transition: top 0.075s 0.12s ease, opacity 0.075s ease;
            top: 0;
            opacity: 0;
            transition: top 0.075s ease, opacity 0.075s 0.12s ease;  
        }

        &:after {
            transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);  
        }
    `}

`;