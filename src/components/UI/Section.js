import React from 'react';
import styled from 'styled-components';
const Section = (props) => {
    return (

        <StyledSection {...props} />

    );
};

export default Section;

const StyledSection = styled.section`
position: relative;
display: ${props => props.display || 'block'};
flex-direction: ${props => props.direction || 'row'};
height: 100vh;
padding: ${props => props.padding || '4rem 0 0 0'};
`