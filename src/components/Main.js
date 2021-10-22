import React from 'react';
import styled from 'styled-components';
import HomeSection from './Sections/HomeSection';
const Main = ({ children }) => {
    return (
        <StyledMain>
            <HomeSection />
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.main`
padding: 4rem 10px 0 10px;
`