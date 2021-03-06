import React from 'react';
import { StyledButton } from './style';
const MyButton = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            <span>{children}</span>
        </StyledButton>
    );
};

export default MyButton;
