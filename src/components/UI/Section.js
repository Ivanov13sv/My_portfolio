import React from 'react';
import styled,{keyframes} from 'styled-components';
const Section = (props) => {
    return (

        <StyledSection {...props} />
    );
};

export default Section;

const blur = keyframes`
0%{

    filter: blur(30px);
}

100%{
    filter: blur(0px); 
}


`

const StyledSection = styled.section`
animation: ${blur} .3s ease-in-out;
position: relative;
display: ${props => props.display || 'block'};
flex-direction: ${props => props.direction || 'row'};
height: 100vh;
padding: ${props => props.padding || '1rem 0 0 0'};
@media ${props => props.theme.media.md} {
    padding: 5rem 0 2rem;
}

`