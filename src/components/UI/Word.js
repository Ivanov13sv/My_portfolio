import React from 'react';
import styled from 'styled-components';
const Word = () => {
    return (
        <div>
            <StyledSpan>H</StyledSpan>
            <StyledSpan>E</StyledSpan>
            <StyledSpan>L</StyledSpan>
            <StyledSpan>L</StyledSpan>
            <StyledSpan>O</StyledSpan>
        </div>
    );
};

export default Word;

const StyledSpan = styled.span`

transform: scale(2);
&:hover{
    color: red;
    transform: scale(1.3);
}
`