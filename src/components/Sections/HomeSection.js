import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/stanislav.jpg'

const HomeSection = () => {
    return (
        <section>
            <div>
                <div>Hi, <br /> I'am <span>Stas</span> <br /> Junior Frontend developer </div>
                <StyledButton>Contact</StyledButton>
            </div>
            <div>
                <div>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                </div>
                <Avatar src={avatar} alt='avatar' />
            </div>
        </section>
    );
};

export default HomeSection;

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


const HelloBody = styled.div`

`

const StyledButton = styled.a`
display: inline-flex;
justify-content: center;
align-items: center;
height: 45px;
padding: 0 45px;
border-radius: 10px;
background: blue;
color: white;
font-weight: 500;

`