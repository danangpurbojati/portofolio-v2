import styled from 'styled-components/macro';

export const AboutContent = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AboutImageWrapper = styled.div`
    flex: 1;
    padding: 30px;

    @media (max-width: 992px) {
        padding: 0;
    }

    @media (max-width: 768px) {
        width: 70%;
        margin-bottom: 24px;
    }
`;

export const AboutImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const AboutTextWrapper = styled.div`
    flex: 1;
    padding: 30px;

    @media (max-width: 992px) {
        padding: 0;
    }
`;

export const AboutSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SocialLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    width: 55px;
    height: 55px;
    border: 2px solid #FF2C9C;
    box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.5);
    padding: 10px;
    border-radius: 8px;
    margin: 0 12px 12px 12px;
    transition: .2s ease-in;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.8);
        padding: 8px;
    }
`;

export const AboutSkill = styled.div`
    margin-top: 42px;
    margin-bottom: 42px;
`;

export const Skills = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 16px;
`;

export const SkillImageWrapper = styled.div`
    width: 60px;
    text-align: center;
    margin: 16px;

    img {
        width: 100%;
        object-fit: cover;
    }

    p {
        color: #396CAA;
        font-weight: bold;
        font-size: 14px; 
    }
`;

export const CertificateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const DetailCertificateWrapper = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.5);
    border-radius: 4px;
    padding: 8px;
    transition: .2s ease-in;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.8);
    }
`;

export const CertificateImage = styled.img`
    width: 140px;
    height: 160px;
    object-fit: cover;
`;

export const CertificateTextWrapper = styled.div`
    padding: 10px;
`;

export const CertificateTitle = styled.h4`
    color: #173D7A;
    text-transform: capitalize;
    font-size: 18px;
    margin-bottom: 8px;
`;

export const CertificateSubTitle = styled.h5`
    color: #FF2C9C;
    margin-bottom: 8px;
    text-transform: capitalize;
`;

export const CourseContentText = styled.p`
    color: #173D7A;
    font-weight: bold;
    margin-bottom: 4px;
    text-transform: capitalize;
`;