import React from 'react';
import projectImage from '../../assets/images/project.png';
import { Badge, Container, MainText, MainTitle, PageWrapper, SymbolImage, SymbolText } from '../../globalStyles';
import { Project, ProjectBadgeWrapper, ProjectImage, ProjectLinkWrapper, ProjectText, ProjectTitle, ProjectWrapper, SmallContainedLink, SmallOutlinedLink } from './portofolioStyle';
import FadeInAnimation from '../../hook/FadeInAnimation';
import projects from './projects';
const Portofolio = () => {
    return (
        <PageWrapper>            
            <Container>
                <FadeInAnimation>
                    <SymbolImage>
                        <img src={projectImage} alt="project" />
                    </SymbolImage>
                    <SymbolText>
                        <MainTitle>Projects</MainTitle>
                        <MainText>Here are few projects i've worked on recently</MainText>
                    </SymbolText>
                </FadeInAnimation>

                <FadeInAnimation>
                    <ProjectWrapper>
                        {
                            projects.map(project => (
                                <Project key={project.id}>
                                    <ProjectImage src={project.image} alt={project.name} />
                                    <ProjectText>
                                        <div>
                                            <ProjectTitle>{project.name}</ProjectTitle>
                                            <ProjectBadgeWrapper>
                                                {
                                                    project.techologies.map((technology,index) => (
                                                        <Badge key={index}>
                                                            {technology}
                                                        </Badge>
                                                    ))
                                                }
                                            </ProjectBadgeWrapper>
                                            <ProjectLinkWrapper>
                                                <SmallContainedLink target="_blank" href={project.githubLink}>view code</SmallContainedLink>
                                                <SmallOutlinedLink target="_blank" href={project.liveLink}>live demo</SmallOutlinedLink>
                                            </ProjectLinkWrapper>
                                        </div>
                                    </ProjectText>
                                </Project>
                            ))
                        }
                    </ProjectWrapper>
                </FadeInAnimation>
            </Container>
        </PageWrapper>
    )
}

export default Portofolio
