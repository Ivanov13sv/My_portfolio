import React from 'react';
import styled from 'styled-components';
import AboutSection from './Sections/AboutSection';
import HomeSection from './Sections/HomeSection';
import MySkills from './Sections/MySkills';
import BackgroundCubes from './UI/BackgroundCubes';
import Container from './Container';
import Contact from './Sections/Contact';
const Main = ({ children }) => {
    return (
        <StyledMain>
            <Container>
                <HomeSection />
                <AboutSection />
                <MySkills />
                <Contact/>
                {/* <BackgroundCubes /> */}
            </Container>
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.main`
padding: 0 10px;
z-index: 5;
`