import React from 'react';
import styled from 'styled-components';
import stas from '../../img/321.jpg'
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import BackgroundCubes from '../UI/BackgroundCubes';

const AboutSection = () => {
    return (
        <Section display='flex' direction='column' id='#about'>
            <SectionTitle>About</SectionTitle>
            <AboutContainer>
                <img alt='Stanislav' src={stas} />
                <AboutSubtitle>
                    <h2>My name is Stanislaw</h2>
                    <p>I'm a self taught web developer from Moscow, Russia</p>
                </AboutSubtitle>
            </AboutContainer>
            {/* <BackgroundCubes /> */}
        </Section>
    );
};

export default AboutSection;

const AboutContainer = styled.div`
text-align: center;
row-gap: 2rem;
padding: 2rem 0 0 0;

img{
    width: 180px;
    border-radius: 1rem;
    margin: 0 0 10px 0;
    // box-shadow: 0px 0px 18px -3px rgba(114, 114, 114, 0.63) inset;
    box-shadow: 0 0 1em 0 ${({theme}) => theme.colors.normalBrown};
}
`
const AboutSubtitle = styled.div`
h2{
    text-shadow: 0px 0px 1px #0000005c;
}
p{
    margin: 10px 0 0 0;
}
`