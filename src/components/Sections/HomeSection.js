import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/stanislav.jpg'

const HomeSection = () => {
    return (
        <Home>
            <HelloBody>
                <HelloTitle>Hi, <br /> I'am <span>Stas</span> <br /> Junior Frontend developer </HelloTitle>
            </HelloBody>
            <About>
                <SocialLinks>
                    <SocialLink><i class='bx bxl-instagram'></i></SocialLink>
                    <SocialLink><i class='bx bxl-vk' ></i></SocialLink>
                    <SocialLink><i class='bx bxl-github' ></i></SocialLink>

                </SocialLinks>
                <Avatar src={avatar} alt='avatar' />

            </About>
        </Home>
    );
};

export default HomeSection;

const Home = styled.section`
height: 100vh;
padding: 3rem 0 4rem 0;
`

const Avatar = styled.img`
    width: 100px;
@media (max-width: 767px){
    position: fixed;
    top: 1%;
    right: 1%;
    z-index: 5;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
`
const About = styled.div`
margin: 50px 0 0 0;
display: flex;
`

const HelloBody = styled.div`
padding: 3rem 0 0 0;

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
     color: #4070F4;
 }
    
}
`

// const StyledButton = styled.a`
// display: inline-flex;
// justify-content: center;
// align-items: center;
// height: 45px;
// padding: 0 45px;
// border-radius: 9px;
// background: #4070F4;
// color: white;
// font-weight: 600;
// font-size: 18px;

// `

const SocialLink = styled.a`
display: flex;
font-size: 35px;
text-shadow: 0px 0px 1px #0000005c;
:not(:last-child){
    margin: 0 0 15px 0;
}
`