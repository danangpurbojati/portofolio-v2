import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

export const PageWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    min-width: 100px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 16px;
    margin-bottom: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    transition: 0.3s ease-in-out;
`;

export const ContainedLinkButton = styled(LinkButton)`
    background-color: #FF2C9C;
    color: white;
    border: 1px solid #FF2C9C;

    &:hover {
        background-color: rgba(255, 44, 156, 0.8);
        border: 2px solid rgba(220, 107, 167, 0.1);
    }
`;

export const OutlinedLinkButton = styled(LinkButton)`
    color: #FF2C9C;
    border: 1px solid #FF2C9C;

    &:hover {
        border: 2px solid #FF2C9C;
    }
`;

export const MainTitle = styled.h1`
    color: #173D7A;
    font-size: 34px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: capitalize;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const SubTitle = styled.h3`
    color: #FF2C9C;
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: capitalize;
`;

export const MainText = styled.p`
    text-align: center;
    color: #396CAA;
    font-size: 18px;
    margin-bottom: 16px;
`;

export const Badge = styled.span`
    color: #396CAA;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 4px;
    text-transform: capitalize;
    color: #FF2C9C;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #FF2C9C;
    font-size: 12px;
`;

export const SymbolImage = styled.div`
    height: 200px;
    margin: 0 auto;
    text-align: center;

    img {
        height: 100%;
        object-fit: cover;
    }
`;

export const SymbolText = styled.div`
    margin-top: 24px;
`;
