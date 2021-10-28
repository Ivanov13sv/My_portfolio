import React, { useState } from 'react';
import { Textarea } from './style';

const MyTextarea = ({ ...props }) => {

    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () =>{
        value? setFocused(true) : setFocused(false);
    }



    return (
        <Textarea focused={focused} onBlur={() => handleFocus()} onChange={(e) => setValue(e.target.value)} {...props} value={value} />
    );
};

export default MyTextarea;
