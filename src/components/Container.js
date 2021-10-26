import React from 'react';
import styled from 'styled-components';
const Container = (props) => {
    return (
        <StyledContainer {...props}/>

    );
};

export default Container;

const StyledContainer = styled.div`
margin: 0 auto;
@media (min-width: 992px){
    max-width: 1080px;
}
`