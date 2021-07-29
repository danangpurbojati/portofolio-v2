import React from 'react';
import contactImage from '../../assets/images/contact.png';

import emailImage from '../../assets/images/email.svg'
import callImage from '../../assets/images/call.svg'
import { Container, MainText, MainTitle, PageWrapper, SymbolImage, SymbolText } from '../../globalStyles';
import { ContactIcon, ContactInfo, ContactText } from './contactStyle';
import FadeInAnimation from '../../hook/FadeInAnimation';

const Contact = () => {
    return (
        <PageWrapper>
            <Container>
                <FadeInAnimation>
                    <SymbolImage>
                        <img src={contactImage} alt="project" />
                    </SymbolImage>
                </FadeInAnimation>

                <FadeInAnimation>
                    <SymbolText>
                        <MainTitle>contact me</MainTitle>
                        <MainText>Fell free to contact me any time</MainText>
                    </SymbolText>
                </FadeInAnimation>

                <FadeInAnimation>
                    <ContactInfo href="mailto:danangpurbojati@gmail.com">
                        <ContactIcon src={emailImage} alt="email" />
                        <ContactText>danangpurbojati@gmail.com</ContactText>
                    </ContactInfo>

                    <ContactInfo href="tel:+6281235717712">
                        <ContactIcon src={callImage} alt="phone" />
                        <ContactText>+6281-235-717-712</ContactText>
                    </ContactInfo>
                </FadeInAnimation>
            </Container>
        </PageWrapper>
    )
}

export default Contact
