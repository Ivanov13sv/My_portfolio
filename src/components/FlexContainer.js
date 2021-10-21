import React from 'react';
import styled from 'styled-components';

const FlexContainer = ({children,...props}) => {
    return (
        <Flex {...props}>
            {children}
        </Flex>
    );
};

export default FlexContainer;

const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${({justify}) => justify || 'stretch'};
margin: ${props => props.margin || '0'}; 
`