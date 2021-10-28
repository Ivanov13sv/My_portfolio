import styled from "styled-components";


export const InputContainer = styled.div`
width: ${props => props.width || '300px'};
display: flex;
position: relative;
input{
    padding: 5 5px;
    border: 0;
    height: 30px;
    background: transparent;
    outline: none;
    width:100%;
    font-size: 14px;
    
}
&:after{
    position: absolute;
    z-index: 5;
    content: '';
    top: 30px;
    background-color: grey;
    transform: scale(1);
    height: 2px;
    width: 100%;
    transition: all .3s ease;
    ${props => props.focused && `
    background-color: #6f8ee4;
    // box-shadow:  0 0 0.1em 0 #6f8ee4;
    `}
}

`

export const InputLabel = styled.label`
color: grey;
position: absolute;
top: 6px;
left: 0;
font-size: 18px;
font-family:inherit;
transition: all .2s ease;
font-weight: 500;



${props => props.focused && `
    top: -15px;
    left: 0;
    color: #4070F4;
    font-size: 15px;
`}
`
