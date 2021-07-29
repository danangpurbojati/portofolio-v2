import React from 'react';

import html from '../../assets/images/skilss/html.png';
import css from '../../assets/images/skilss/css.png';
import javascript from '../../assets/images/skilss/javascript.png';
import react from '../../assets/images/skilss/react.png';
import express from '../../assets/images/skilss/express.png';
import nodejs from '../../assets/images/skilss/node-js.png';
import mongodb from '../../assets/images/skilss/mongodb.png';

import profile from '../../assets/images/profile1.png';
import linkedin from '../../assets/images/linkedin-black.png';
import github from '../../assets/images/github.png';
import download from '../../assets/images/download.png';

import { Badge, Container, MainText, MainTitle, PageWrapper, SubTitle } from '../../globalStyles';
import { AboutContent, AboutImage, AboutImageWrapper, AboutSkill, AboutSocial, AboutTextWrapper, CertificateImage, CertificateSubTitle, CertificateTextWrapper, CertificateTitle, CertificateWrapper, CourseContentText, DetailCertificateWrapper, SkillImageWrapper, Skills, SocialLink } from './aboutStyle';

import courses from './courses';

import FadeInAnimation from '../../hook/FadeInAnimation';


const About = () => {
    return (
        <PageWrapper>
            <Container>

                <FadeInAnimation>
                    <AboutContent>
                        <AboutImageWrapper>
                            <AboutImage src={profile} alt="profile" />
                            <AboutSocial>
                                <SocialLink target="_blank" href="https://www.linkedin.com/in/danang-wahyu-purbojati-b03902b4/">
                                    <AboutImage src={linkedin} alt="linkedin" title="linkedin" />
                                </SocialLink>
                                <SocialLink target="_blank" href="https://github.com/danangpurbojati">
                                    <AboutImage src={github} alt="github" title="github" />
                                </SocialLink>
                                <SocialLink target="_blank" href="https://drive.google.com/file/d/1LsqQhUCUskmlwLrJL_lFP7nNMi-pLijB/view?usp=sharing">
                                    <AboutImage src={download} alt="download" title="download cv" />
                                </SocialLink>
                            </AboutSocial>
                        </AboutImageWrapper>
                        <AboutTextWrapper>
                            <MainTitle>Who Am I ?</MainTitle>
                            <SubTitle>let me introduce you</SubTitle>
                            <MainText>
                                My name is Danang Wahyu Purbojati. I'm web developer from Indonesia.
                            </MainText>

                            <MainText>
                                My programming skills began with front-end side, learning how to use html, css, and javascript to make nice looking website, completed with reactjs and progressive web app to upscale my frontend skills.
                            </MainText>

                            <MainText>
                                I also developed my skill in backend side. Using nodejs, express and mongodb to create rest api that will be used by front-end side to create full-stack-application.
                            </MainText>
                        </AboutTextWrapper>
                    </AboutContent>
                </FadeInAnimation>
                

                <FadeInAnimation>
                    <AboutSkill>
                        <MainTitle>skills</MainTitle>
                        <MainText>Familiar with following technologies:</MainText>
                        <Skills>
                            <SkillImageWrapper>
                                <img src={html} alt="html" />
                                <p>HTML</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={css} alt="css" />
                                <p>CSS</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={javascript} alt="javascript" />
                                <p>Javascript</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={react} alt="reactjs" />
                                <p>ReactJs</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={nodejs} alt="nodejs" />
                                <p>NodeJs</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={express} alt="expressjs" />
                                <p>ExpressJs</p>
                            </SkillImageWrapper>
                            <SkillImageWrapper>
                                <img src={mongodb} alt="mongodb" />
                                <p>Mongodb</p>
                            </SkillImageWrapper>
                        </Skills>
                    </AboutSkill>
                </FadeInAnimation>

                <FadeInAnimation>
                    <AboutSkill>
                        <MainTitle>certificates</MainTitle>
                        <CertificateWrapper>
                            {
                                courses.map(course => (
                                    <DetailCertificateWrapper target="_blank" href={course.link} key={course.id}>
                                        <CertificateImage src={course.picture} alt={course.name} />
                                        <CertificateTextWrapper>
                                            <CertificateTitle>{course.name}</CertificateTitle>
                                            <CertificateSubTitle>{course.place} ({course.year})</CertificateSubTitle>
                                            <CourseContentText>course content:</CourseContentText>
                                            {
                                                course.content.map((content, index) => (
                                                    <Badge key={index}>
                                                        {content}
                                                    </Badge>
                                                ))
                                            }                                        
                                        </CertificateTextWrapper>
                                    </DetailCertificateWrapper>
                                ))
                            }
                        </CertificateWrapper>
                    </AboutSkill> 
                </FadeInAnimation>

            </Container>

        </PageWrapper>
    )
}

export default About
