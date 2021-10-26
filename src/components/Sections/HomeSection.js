import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/stanislav.jpg'
import Section from '../UI/Section'

const HomeSection = () => {
    return (
        <Section display='flex' direction='column'>
            <HelloBody>
                <HelloTitle>Hi, <br /> I'm <span>Stas</span> <br /> Beginner Frontend developer </HelloTitle>
            </HelloBody>
            <About>
                <SocialLinks>
                    <SocialLink><i class='bx bxl-instagram'></i></SocialLink>
                    <SocialLink><i class='bx bxl-vk' ></i></SocialLink>
                    <SocialLink><i class='bx bxl-github' ></i></SocialLink>

                </SocialLinks>
                {/* <Avatar src={avatar} alt='avatar' /> */}

            </About>
        </Section>
    );
};

export default HomeSection;

// const Avatar = styled.img`
//     width: 100px;
// @media (max-width: 767px){
//     position: fixed;
//     top: 1%;
//     right: 1%;
//     z-index: 5;
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
// }
// `
const About = styled.div`
margin: 50px 0 0 0;
display: flex;
`

const HelloBody = styled.div`
padding: 1rem 0 0 0;

`

const SocialLinks = styled.div`
display: flex;
flex-direction: column;

`

const HelloTitle = styled.h1`
font-size: 33px;
line-height: 130%;
margin: 20px 0 40px 0;
text-shadow: 0px 0px 1px #0000005c;
 span{
     position: relative;
     z-index: 5;
     color: #4070F4;
 }
    
}
`

const SocialLink = styled.a`
display: flex;
font-size: 35px;
text-shadow: 0px 0px 1px #0000005c;
:not(:last-child){
    margin: 0 0 15px 0;
}
`