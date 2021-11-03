import styled from "styled-components";


export const Textarea = styled.textarea`
font-size: 16px;
resize: none;
width: 100%;
height: 115px;
outline: none;
border: 2px solid grey;
border-radius: 10px;
background: transparent;
padding: 5px;
transition: all .3s ease;
${props => props.focused && `
    border: 2px solid #6f8ee4;
    // background: #f1f1f1;
    background: white;
    box-shadow:  box-shadow: inset 0 0 0.5em 0 #4070F4, 0 0 0.5em 0 #4070F4;
`}
:focus{
    border: 2px solid #6f8ee4;
    // background: #f1f1f1;
    background: white;
    box-shadow:  box-shadow: inset 0 0 0.5em 0 #4070F4, 0 0 0.5em 0 #4070F4;
}
`