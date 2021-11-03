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

@media ${({theme}) => theme.media.lg}{
    max-width: 1080px;

}
`