import React from 'react';
import styled,{keyframes} from 'styled-components';
import avatar from '../../img/stanislav.jpg'
import Section from '../UI/Section'

const HomeSection = () => {
    return (
        <Section display='flex' direction='column'>
                <HelloTitle>Hi! <br /> I'm <span>Stas</span>, <br /> Beginner Frontend developer </HelloTitle>
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


const SocialLinks = styled.div`
display: flex;
flex-direction: column;

`
const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`

const HelloTitle = styled.h1`
font-size: 32px;
line-height: 130%;
margin: 20px 0 40px 0;
text-shadow: 0px 0px 1px #0000005c;
 span{
     position: relative;
     z-index: 5;
    // color: transparent;    
    color: #4070F4;    
	// -webkit-background-clip: text;
	// background-clip: text;
	// background-image: linear-gradient(-45deg, #ee7752,  #23a6d5, #23d5ab);
	// background-image: linear-gradient(-45deg, #2A49A1, #345BC7, #3055BA, #4070F4);
    // animation: ${gradient} 5s ease infinite;
    // background-size: 400% 400%;

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