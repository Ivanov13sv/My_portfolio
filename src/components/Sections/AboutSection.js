import React from 'react';
import styled from 'styled-components';
import stas from '../../img/321.jpg'
import SectionTitle from '../UI/SectionTitle';
import BackgroundCubes from '../UI/BackgroundCubes';

const AboutSection = () => {
    return (
        <About>
            <SectionTitle>About</SectionTitle>
            <AboutContainer>

                <img alt='Stanislav' src={stas} />

                <AboutSubtitle>
                    <h2>My name is Stanislaw</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim laboris nisi ut aliquip ex ea commodo consequatlaboris nisi ut aliquip ex ea commodo consequat. </p>
                </AboutSubtitle>

            </AboutContainer>
            <BackgroundCubes />
        </About>
    );
};

export default AboutSection;

const About = styled.section`
height: 100vh;
padding: 4rem 0 4rem 0;
display: flex;
flex-direction: column;
`
const AboutContainer = styled.div`
text-align: center;
row-gap: 2rem;
padding: 2rem 0 0 0;

img{
    width: 200px;
    border-radius: 1rem;
    margin: 0 0 10px 0;
    box-shadow: 0px 0px 18px -3px rgba(114, 114, 114, 0.63) inset;
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