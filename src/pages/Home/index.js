import React from 'react';
import heroImage from '../../assets/images/hero-background-med.png';
import { ContainedLinkButton, Container, OutlinedLinkButton } from '../../globalStyles';
import { Hero, HeroContent, HeroImage, HeroImageWrapper, HeroLinkWrapper, HeroMainTitle, HeroSubTitle, HeroText } from './indexStyle';
import FadeInAnimation from '../../hook/FadeInAnimation';

const Home = () => {
    return (
        <FadeInAnimation>
            <Hero>
                <Container>
                    <HeroContent>
                        <HeroText>
                            <HeroMainTitle>"Hello World"</HeroMainTitle>
                            <HeroSubTitle>Hi, I'm Danang - Web developer based in Indonesia</HeroSubTitle>
                            <HeroSubTitle>
                                Experienced in <b>HTML, CSS, Javascript, ReactJs, NodeJs, ExpressJs and MongoDb</b> 
                            </HeroSubTitle>
                            <HeroLinkWrapper>
                                <ContainedLinkButton to="/about">About Me</ContainedLinkButton>
                                <OutlinedLinkButton to="/portofolio">Portofolio</OutlinedLinkButton>
                            </HeroLinkWrapper>
                        </HeroText> 
                        <HeroImageWrapper>
                            <HeroImage src={heroImage} alt="heroImage" />
                        </HeroImageWrapper> 

                    </HeroContent>
                </Container>
            </Hero>
        </FadeInAnimation>
    )
}

export default Home
