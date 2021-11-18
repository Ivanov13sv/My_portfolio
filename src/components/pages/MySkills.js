import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';
import Container from '../Container';
// import SkillsBox from '../UI/SkillsCube';

const MySkills = () => {
    return (
        <Section display='flex' direction='column'>
            <SectionTitle>My skills</SectionTitle>
            <Container>
                {/* <SkillBody>
                    <SkillsText>Here are some of the tools I'm using and getting better at.</SkillsText>
                    <SkillsBox />
                </SkillBody> */}
                <Icons>
                    <li><i className='bx bxl-javascript'/></li>
                    <li><i className='bx bxl-react'/></li>
                    <li>1</li>
                </Icons>
            </Container>
        </Section>
    );
};

export default MySkills;

// const SkillsText = styled.p`
// margin: 2rem 0 6rem 0;
// `

// const SkillBody = styled.div`
// display: flex;
// flex-direction: column;

// `
const anim = keyframes`
0%{
    transform:  rotate(0deg);
}

100%{
    transform:  rotate(720deg);

    border-radius: 50%;
}
`

const Icons = styled.ul`
position: relative;

    li {
        margin: 0 0 30px 0;
        
        i{
            animation: ${anim} 9s linear infinite;
        }
    }
`