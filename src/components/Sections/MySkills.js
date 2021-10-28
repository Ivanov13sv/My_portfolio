import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';
import Word from '../UI/Word';
import Container from '../Container';
import SkillsBox from '../UI/SkillsCube';

const MySkills = () => {
    return (
        <Section display='flex' direction='column'>

            <Container>
                <SectionTitle>My skills</SectionTitle>
                <SkillsBox />
            </Container>
        </Section>
    );
};

export default MySkills;
