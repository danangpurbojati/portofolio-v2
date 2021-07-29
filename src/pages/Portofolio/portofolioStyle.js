import styled from 'styled-components/macro';

export const ProjectWrapper = styled.div`
    margin-top: 38px;
    margin-bottom: 38px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Project = styled.div`
     border-radius: 16px;
    /* width: 300px; */
    height: 250px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.5);
    position: relative;
    padding: .5px;
    transition: .5s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(255, 44, 156, 0.8); 
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

export const ProjectText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding: 4px;
    background-color: white;
    opacity: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    ${Project}:hover > & {
        opacity: 1;
        transition: .5s ease-in-out;
    }
`;

export const ProjectTitle = styled.h3`
    color: #173D7A;
    text-align: center;
    margin-bottom: 16px;
    font-size: 24px;
`;

export const ProjectBadgeWrapper = styled.div`
    text-align: center;
    margin-bottom: 16px;
`;

export const ProjectLinkWrapper = styled.div`
    text-align: center;
`;

export const SmallLinkButton = styled.a`
    display: inline-block;
    min-width: 100px;
    text-align: center;
    
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
    margin-right: 14px;
    margin-bottom: 14px;
    padding: 4px 8px;
    border-radius: 4px;
    transition: 0.2s;
    font-size: 13px;
`;

export const SmallContainedLink = styled(SmallLinkButton)`
    background-color: #FF2C9C;
    color: white;
    border: 1px solid #FF2C9C;

    &:hover {
        background-color: rgba(255, 44, 156, 0.8);
    }
`;

export const SmallOutlinedLink = styled(SmallLinkButton)`
    background-color: white;
    color: #FF2C9C;
    border: 1px solid #FF2C9C;

    &:hover {
        background-color: #FF2C9C;
        color: white;
    }
`;