import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle'
import MyInput from '../UI/MyInput';
import MyTextarea from '../UI/MyTextarea';
import MyButton from '../UI/MyButton';

const Contact = () => {

    return (
        <Section display='flex' direction='column' id='#contact'>
            <SectionTitle>Contact</SectionTitle>
            <ContactBody>
                <ContactForm >
                    < MyInput width='100%' label='Name' />
                    < MyInput width='100%' type='email' label='Email' />
                    <MyTextarea placeholder='Leave message here...' />
                    <MyButton type='submit'> Send </MyButton>
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
    margin: 0 0 30px 0;
}
justify-content: center;
align-items: center;
max-width: 500px;
margin: 0 auto;
`

const ContactBody = styled.div`
padding: 2.5rem 0 0 0;
`
