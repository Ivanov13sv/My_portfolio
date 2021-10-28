import React from 'react';
import {Container, Box, FrontSide, BackSide, RightSide, LeftSide, TopSide, BottomSide} from './style';
const SkillsBox = () => {
    return (
        <Container>
            <Box>
                <FrontSide>Javascript</FrontSide>
                <BackSide>Styled Components</BackSide>
                <LeftSide>Css</LeftSide>
                <RightSide>Html</RightSide>
                <TopSide>React</TopSide>
                <BottomSide>Sass</BottomSide>
            </Box>
        </Container>
    );
};

export default SkillsBox;
