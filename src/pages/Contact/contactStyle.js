import styled from 'styled-components/macro';

export const ContactInfo = styled.a`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    text-decoration: none;
    padding: 8px 16px;
    width: fit-content;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.5);
    transition: .2s ease-in-out;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.8);
    }
`;

export const ContactIcon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`;

export const ContactText = styled.p`
    color: #173D7A;
    font-weight: bold;
    margin-left: 16px;
`;