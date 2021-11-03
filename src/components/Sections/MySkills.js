import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';
import Word from '../UI/Word';
import Container from '../Container';
import SkillsBox from '../UI/SkillsCube';

const MySkills = () => {
    return (
        <Section display='flex' direction='column' id='#skills'>
            <SectionTitle>My skills</SectionTitle>
            <Container>
                <SkillBody>
                    <SkillsText>Here are some of the tools I'm using and getting better at.</SkillsText>
                    <SkillsBox />
                </SkillBody>
            </Container>
        </Section>
    );
};

export default MySkills;

const SkillsText = styled.p`
margin: 2rem 0 6rem 0;
`

const SkillBody = styled.div`
display: flex;
flex-direction: column;

`