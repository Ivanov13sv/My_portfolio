import React from 'react'
import { useState } from 'react/cjs/react.development'
import { InputContainer, InputLabel } from './style';



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
