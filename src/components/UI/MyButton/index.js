import React from 'react';
import styled, { css } from 'styled-components';
const MyButton = ({children, props}) => {
    return (
        <StyledButton>
            <span>{children}</span>
        </StyledButton>
    );
};

export default MyButton;

const StyledButton = styled.button(({theme}) =>css`
cursor: pointer;
position: relative;
height: 40px;
padding: 0 1.5rem;
background: transparent;
border: 2px solid ${theme.colors.secondaryBlue};
border-radius: 10px;
overflow: hidden;
color: ${theme.colors.mainBlue};
z-index: 4;
font-size: ${theme.fontSize.normalSize};
font-weight: 600;
span{
    display: inline-block;
    transition: .3s;
    position: relative;
    z-index: 4;
}
&:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.secondaryBlue};
    top: 100%;
    left: 0;
    transition: .3s;
    z-index: 1;
}
&:hover {
    &:before{
        top: 0;
    }
    span{
        color: #fff;
        transform: rotateY(360deg);
    }
}

`);