import React from 'react';
import styled from 'styled-components';
import AboutSection from './Sections/AboutSection';
import HomeSection from './Sections/HomeSection';
import MySkills from './Sections/MySkills';
import BackgroundCubes from './UI/BackgroundCubes';
const Main = ({ children }) => {
    return (
        <StyledMain>
            <HomeSection />
            <AboutSection />
            <MySkills />
            <BackgroundCubes />
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.main`
padding: 0 10px;

`