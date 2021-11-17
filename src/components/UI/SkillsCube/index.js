import React from 'react';
import {
    Container,
    Box,
    FrontSide,
    BackSide,
    RightSide,
    LeftSide,
    TopSide,
    BottomSide

} from './style';
import sc from '../../../img/icons/sc.png';
import sass from '../../../img/icons/sass.svg';
import css3 from '../../../img/icons/css3.png';
import html from '../../../img/icons/html.png';


const SkillsBox = () => {
    return (
        <Container>
            <Box>
                <FrontSide><i className='bx bxl-javascript'></i></FrontSide>
                <BackSide><img src={sc} alt='styled-components'/></BackSide>
                <LeftSide><img src={css3} alt='css'/></LeftSide>
                <RightSide><img src={html} alt='html'/></RightSide>
                <TopSide><i className='bx bxl-react' ></i></TopSide>
                <BottomSide><img src={sass} alt='saas'/></BottomSide>
            </Box>
        </Container>
    );
};

export default SkillsBox;

