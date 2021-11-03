import styled, { keyframes } from "styled-components";

export const rotating = keyframes`
0%{
    transform: rotateX(45deg) rotateY(-45deg);
}
25%{
    transform: rotateX(-45deg) rotateY(-45deg);
}
50%{
    transform: rotateX(45deg) rotateY(45deg);
}
75%{
    transform: rotateX(-45deg) rotateY(45deg);
}
100%{
    transform: rotateX(45deg) rotateY(-45deg);
}
`
export const Container = styled.div`
margin: 0 auto;
position: relative;
perspective: 1000px;
// transform: translate(-50%, -50%);
`
export const RadioButtons = styled.div`
margin: 0 0 150px 0;
    input{
        margin: 0 10px 0 0;
    }
`




export const Side = styled.div`
box-shadow: inset 0 0 0.5em 0 #4070F4, 0 0 0.5em 0 #4070F4;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 150px;
width: 150px;
text-align: center;
color: white;
// background: #98b0f5;
background: transparent;

border: 1px solid white;
font-size: 32px;
position: absolute;
transition: all 1s ease;
> *{
    font-size: 100px;

}
img{
    width: 80px;
}

`

export const FrontSide = styled(Side)`
transform: translateZ(75px);
color: yellow;
z-index: 11;
`
export const BackSide = styled(Side)`
transform: translateZ(-75px);
>*{
    background: rgb(66, 66, 66);
}
`
export const LeftSide = styled(Side)`
right: 75px;
transform: rotateY(-90deg);
color: #2565AE;
`
export const RightSide = styled(Side)`
left: 75px;
transform: rotateY(90deg);
`
export const TopSide = styled(Side)`
bottom: 75px;
transform: rotateX(90deg);
color: #61DBFB;

`
export const BottomSide = styled(Side)`
top: 75px;
transform: rotateX(-90deg);
`

export const Box = styled.div`
z-index: 10;
height: 150px;
width: 150px;
// position: absolute;
// left: -15px;
transform-style: preserve-3d;
animation: ${rotating} 7s infinite;
&:hover {
    ${FrontSide}{transform: translateZ(115px) rotateY(360deg);}
    ${BackSide}{transform: translateZ(-115px) rotateY(360deg);}
    ${LeftSide}{right: 115px;}
    ${RightSide}{left: 115px;}
    ${TopSide}{bottom: 115px;}
    ${BottomSide}{top: 115px;}
} 
`
export const InnerBox = styled(Box)`
z-index: 5;
top: 25px;
left: 30px;
height: 60px;
width: 60px;
transform: translateZ(-400px);
`
const SmallSide = styled(Side)`
width: 60px;
height: 60px;
z-index: 6;
`

export const SmallFrontSide = styled(SmallSide)`
transform: translateZ(30px);
color: yellow;
z-index: 5;

`
export const SmallBackSide = styled(SmallSide)`
transform: translateZ(-30px);
`
export const SmallLeftSide = styled(SmallSide)`
right: 30px;
transform: rotateY(-90deg);
color: #2565AE;
`
export const SmallRightSide = styled(SmallSide)`
left: 30px;
transform: rotateY(90deg);
`
export const SmallTopSide = styled(SmallSide)`
bottom: 30px;
transform: rotateX(90deg);
color: #61DBFB;
`
export const SmallBottomSide = styled(SmallSide)`
top: 30px;
transform: rotateX(-90deg);

`