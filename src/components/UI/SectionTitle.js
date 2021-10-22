import React from 'react';
import styled from 'styled-components';

const SectionTitle = (props) => {
    return (
        <StyledTitle {...props}/>

    );
};

export default SectionTitle;

const StyledTitle = styled.h2`
position: relative;
margin: 0 auto;
text-shadow: 0px 0px 1px #0000005c;
&:after{
    position: absolute;
    content: '';
    width: 64px;
    height: 0.18rem;
    left: 0;
    right: 0;
    top: 2rem;
    border-radius: 30px;
    background-color:#4070F4;
}
`