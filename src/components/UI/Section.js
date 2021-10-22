import React from 'react';
import styled from 'styled-components';
const Section = ({ children }) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
};

export default Section;

const StyledSection = styled.section`
display: flex;
height: 100vh;
padding: 4rem 0 4.5rem 0;
`