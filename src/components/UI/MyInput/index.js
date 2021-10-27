import React from 'react'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'


const MyInput = ({ label, ...props }) => {

    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const handleFocus = () => {
        return value ? setFocused(true) : setFocused(false);
    }

    return (
        <InputContainer {...props} focused={focused}>
            <input onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => handleFocus()}
                value={value} />
            <InputLabel focused={focused}>{label}</InputLabel>
        </InputContainer>
    )
}
export default MyInput;

const InputContainer = styled.div`
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
}
&:after{
    position: absolute;
    z-index: 10;
    content: '';
    top: 30px;
    background-color: grey;
    transform: scale(1);
    height: 2px;
    width: 100%;
    transition: all .3s ease;
    ${props => props.focused && `
    background-color: #6f8ee4;
    box-shadow:  0 0 0.1em 0 #6f8ee4;
    `}
}

`

const InputLabel = styled.label`
color: grey;
position: absolute;
top: 8px;
left: 0;
font-size: 16px;
font-family:inherit;
transition: all .2s ease;
font-weight: 500;


${props => props.focused && `
    top: -15px;
    left: 0;
    color: #4070F4;
    font-size: 13px;
`}
`
