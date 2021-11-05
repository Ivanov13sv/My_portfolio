import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../UI/Section';
import Container from '../Container';


const Home = () => {
    return (
        <Section padding='3rem 0 0 0' id='#home'>

            <Container>
                <HelloTitle>Hi! <br /> I'm <span>Stas</span>, <br /> Beginner Frontend developer </HelloTitle>
                <SocialLinks>
                    <SocialItem background='#333'><a rel="noreferrer" target='_blank' href='https://github.com/Ivanov13sv'><i class='bx bxl-github' ></i></a></SocialItem>
                    <SocialItem background='#0088cc'><a rel="noreferrer" target='_blank' href='https://t.me/onedayiwillbecomehokage'><i class='bx bxl-telegram'></i></a></SocialItem>
                    <SocialItem background='linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'><a rel="noreferrer" target='_blank' href='https://www.instagram.com/1dayiwillbecomehokage/'><i class='bx bxl-instagram'></i></a></SocialItem>
                </SocialLinks>
            </Container>
        </Section>
    );
};

export default Home;

const fade = keyframes`
0%{
    transform: translateX(-100%);
}
100%{
    transform: translateX(0);
}
`

const HelloTitle = styled.h1`
font-size: ${props => props.theme.fontSize.mainTitleMd};
line-height: 130%;
margin: 20px 0 40px 0;
text-shadow: 0px 0px 1px #0000005c;


/* animation: ${fade} .4s ease-in-out; */
span{
    position: relative;
    z-index: 5;  
    color: ${props => props.theme.colors.mainBlue};    
}
    
@media ${props => props.theme.media.sm}{
    font-size: ${props => props.theme.fontSize.mainTitleLg};
}
@media ${props => props.theme.media.lg}{
    font-size: ${props => props.theme.fontSize.mainTitleXl};
}
`

const SocialLinks = styled.ul`
display: flex;
flex-direction: column;
@media ${({ theme }) => theme.media.md}{
    flex-direction: row;
}
`

const SocialItem = styled.li`

display: flex;
font-size: 2.3rem;
text-shadow: 0px 0px 1px #0000005c;
margin: 0 0 .5rem 0;
a{
    color: ${({ theme }) => theme.colors.darkBrown};
}


list-style: none;
@media ${({ theme }) => theme.media.md}{
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background-color: #fff;
        font-size: 2.4rem;
        border: 3px solid #fff;
        margin: 0 10px;
        position: relative;
        z-index: 1;
        overflow: hidden;
    
        i{
            position: relative;
            color: #262626;
            transition: .5s;
            z-index: 3;
        }
        &:before{
            content: '';
            position: absolute;
            background: ${props => props.background || '#f00'};
            width: 100%;
            height: 100%;
            top: 100%;
            transition: .3s;
            
        }
    
        &:hover{
            i{
                color: #fff;
                transform: rotateY(360deg);
            }
        }
        &:hover:before{
            top: 0;
        }
        
    }
}
`