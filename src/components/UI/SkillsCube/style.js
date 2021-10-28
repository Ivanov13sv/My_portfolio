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
margin: 8rem 0 0 0;
// position: absolute;
perspective: 1000px;
// transform: translate(-50%, -50%);
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
background: #98b0f5;
border: 2px solid white;
font-size: 32px;
position: absolute;
transition: all 1s ease;
`

export const FrontSide = styled(Side)`
transform: translateZ(75px);
`
export const BackSide = styled(Side)`
transform: translateZ(-75px);
`
export const LeftSide = styled(Side)`
right: 75px;
transform: rotateY(-90deg);
`
export const RightSide = styled(Side)`
left: 75px;
transform: rotateY(90deg);
`
export const TopSide = styled(Side)`
bottom: 75px;
transform: rotateX(90deg);
`
export const BottomSide = styled(Side)`
top: 75px;
transform: rotateX(-90deg);
`
export const Box = styled.div`
height: 150px;
width: 150px;
postion: absolute;
top: 100px;
left: 100px;
transform-style: preserve-3d;
animation: ${rotating} 7s infinite;
&:hover ${FrontSide}{
    transform: translateZ(100px) rotateY(360deg);
}
&:hover ${BackSide}{
    transform: translateZ(-100px) rotateY(360deg);
}
&:hover ${LeftSide}{
    right: 100px;
}
&:hover ${RightSide}{
    left: 100px;
}
&:hover ${TopSide}{
    bottom: 100px;
}
&:hover ${BottomSide}{
    top: 100px;
}
`