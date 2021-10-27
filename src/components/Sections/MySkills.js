import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';
import Word from '../UI/Word';
import Container from '../Container';

const MySkills = () => {
    return (
        <Section display='flex' direction='column'>

            <Container>
                <SectionTitle>My skills</SectionTitle>
                
            </Container>
        </Section>
    );
};

export default MySkills;

const SkillsSection = styled.section`
height: 100vh;
padding: 4rem 0 4rem 0;
display: flex;
flex-direction: column;
`