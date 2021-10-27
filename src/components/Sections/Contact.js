import React from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle'
import MyInput from '../UI/MyInput';

const Contact = () => {
    return (
        <Section display='flex' direction='column'>
            <SectionTitle>Contact</SectionTitle>
            < MyInput label='Name'/>
            < MyInput label='Email'/>
        </Section>
    );
};

export default Contact;

const StyledInput = styled.input`
font-family: inherit;
width: 100%;
border: 0;
border-bottom: 2px solid $9b9b9b;
outline: 0;
font-size: 1.3rem;
color: $white;
padding: 7px 0;
background: transparent;
transition: border-color 0.2s;
&::placeholder {
    color: transparent;
}
`

const StyledForm = styled.form`
position: relative;
padding: 15px 0 0;
margin-top: 10px;
width: 50%;
`

const StyledLabel = styled.label`
position: absolute;
top: 0;
display: block;
transition: 0.2s;
font-size: 1rem;
color: $gray;
:focus{

}
`
