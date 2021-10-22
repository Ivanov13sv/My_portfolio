import React from 'react';
import styled from 'styled-components';
const Section = ({children}) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
};

export default Section;

const StyledSection = styled.section`
padding: 4.5rem 0 2rem 0;
margin: 0 0 60px 0;
`