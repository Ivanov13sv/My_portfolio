import React from 'react';
import styled from 'styled-components'
import { Container, 
    Box, 
    FrontSide, 
    BackSide, 
    RightSide, 
    LeftSide, 
    TopSide, 
    BottomSide, 
    InnerBox, 
    SmallFrontSide, 
    SmallBackSide, 
    SmallRightSide,
    SmallLeftSide,
    SmallTopSide,
    SmallBottomSide,

} from './style';
import sc from '../../../img/icons/sc.png';
import sass from '../../../img/icons/sass.svg';
import css3 from '../../../img/icons/css3.png';
import html from '../../../img/icons/html.png';
const SkillsBox = () => {
    return (
        <Container>
            <RadioButtons>
                <Radio type='radio' checked/>
                <Radio type='radio' />
                <Radio type='radio' />
                <Radio type='radio' />
                <Radio type='radio' />
                <Radio type='radio' />
            </RadioButtons>
            <Box>
                <FrontSide><i class='bx bxl-javascript'></i></FrontSide>
                <BackSide><img src={sc} /></BackSide>
                {/* <LeftSide><i class='bx bxl-css3' ></i></LeftSide> */}
                <LeftSide><img src={css3} /></LeftSide>
                {/* <RightSide><i class='bx bxl-html5' ></i></RightSide> */}
                <RightSide><img src={html} /></RightSide>
                <TopSide><i class='bx bxl-react' ></i></TopSide>
                <BottomSide><img src={sass} /></BottomSide>
            </Box>
            {/* <InnerBox>
                <SmallFrontSide></SmallFrontSide>
                <SmallBackSide></SmallBackSide>
                <SmallLeftSide></SmallLeftSide>
                <SmallRightSide></SmallRightSide>
                <SmallTopSide></SmallTopSide>
                <SmallBottomSide></SmallBottomSide>
            </InnerBox> */}
        </Container>
    );
};

export default SkillsBox;

const RadioButtons = styled.div`
margin: 0 0 150px 0;
    input{
        margin: 0 10px 0 0;
    }
`

const Radio = styled.input`
${props => props.checked
    ? `color: red;`
    : null }
    // ? transition-duration: 3s;
    //    transition-timing-function: cubic-bezier(0);`
    // : null }
