import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle'
import MyInput from '../UI/MyInput';
import MyTextarea from '../UI/MyTextarea';

const Contact = () => {

    return (
        <Section padding='2rem 0 0 0' display='flex' direction='column'>
            <SectionTitle>Contact</SectionTitle>
            <ContactBody>
                <ContactForm >
                    < MyInput width='100%' label='Name' />
                    < MyInput type='email' width='100%' label='Email' />
                    <MyTextarea placeholder='Leave message here...' />
                    <ContactButton value='Send' type='submit' />
                </ContactForm>
            </ContactBody>

        </Section>
    );
};

export default Contact;

const ContactForm = styled.form`
display: flex;
flex-direction: column;
>:not(:last-child){
    margin: 0 0 25px 0;
}
`

const ContactBody = styled.div`
padding: 2.5rem 0 0 0;
`

const ContactButton = styled.input`
width: 100px;
height: 30px;
margin: 0 auto;
border: 2px solid #6f8ee4;
border-radius: 5px;
background-color: transparent;
font-family: inherit;
font-size: 1rem;
`