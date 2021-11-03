import React from 'react';
import styled from 'styled-components';

const SectionTitle = (props) => {
    return (
        <StyledTitle {...props}/>

    );
};

export default SectionTitle;

const StyledTitle = styled.h2`
text-align: center;
position: relative;
margin: 0 auto;
text-shadow: 0px 0px 1px #0000005c;
padding: 5px 10px;
&:after{
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    right: 0;
    top: 2.5rem;
    border-bottom: .125rem solid ${({theme}) => theme.colors.secondaryBlue};
    border-radius: 30px;
    box-shadow: 0 0 .4rem 0 ${({theme}) => theme.colors.mainBlue};
    
}
`