import React from 'react';
import { StyledButton } from './style';
const MyLinkButton = ({children, href, ...props}) => {
    return (
        <StyledButton href={href} {...props}>
            <span>{children}</span>
        </StyledButton>
    );
};

export default MyLinkButton;
