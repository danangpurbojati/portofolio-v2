import styled from 'styled-components/macro';

export const Hero = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
`;

export const HeroContent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 70px;
    }
`;

export const HeroText = styled.div`
    flex: 1;
    padding: 30px;

    @media (max-width: 768px) {
        order: 2;
        text-align: center;
    }
`;

export const HeroMainTitle = styled.h1`
    color: #173D7A;
    font-size: 38px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const HeroSubTitle = styled.p`
    color: #396CAA;
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const HeroLinkWrapper = styled.div`
    margin-top: 24px;
`;

export const HeroImageWrapper = styled.div`
    flex: 1;
    padding: 30px;

    @media (max-width: 768px) {
        order: 1;
        text-align: center;
    }
`;

export const HeroImage = styled.img`
    width: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 70%
    }
`;
