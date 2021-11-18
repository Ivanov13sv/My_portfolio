import React from 'react';
import Section from '../../UI/Section';
import Container from '../../Container';
import { HelloTitle, SocialLinks, SocialItem } from './style';


const Home = () => {
    return (
        <Section padding='3rem 0 0 0'>
            <Container>
                <HelloTitle>Hi! <br /> I'm <span>Stas</span>, <br /> Beginner Frontend developer </HelloTitle>
                <SocialLinks>
                    <SocialItem background='#333'><a rel="noreferrer" target='_blank' href='https://github.com/Ivanov13sv'><i className='bx bxl-github' ></i></a></SocialItem>
                    <SocialItem background='#0088cc'><a rel="noreferrer" target='_blank' href='https://t.me/onedayiwillbecomehokage'><i className='bx bxl-telegram'></i></a></SocialItem>
                    <SocialItem background='linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'><a rel="noreferrer" target='_blank' href='https://www.instagram.com/1dayiwillbecomehokage/'><i className='bx bxl-instagram'></i></a></SocialItem>
                </SocialLinks>
            </Container>
        </Section>
    );
};

export default Home;
