import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';
import Word from '../UI/Word';

const MySkills = () => {
    return (
        <Section display='flex' direction='column'>
            <SectionTitle>My skills</SectionTitle>
            <Word></Word>
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