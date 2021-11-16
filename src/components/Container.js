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
padding: 0 15px;

@media ${({theme}) => theme.media.md}{
    max-width: 800px;
    padding: 0 30px;
}

@media ${({theme}) => theme.media.xl}{
    max-width: 1080px;

}
`