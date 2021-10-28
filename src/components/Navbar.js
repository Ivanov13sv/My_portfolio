import React from 'react';
import styled from 'styled-components';
import FlexContainer from './FlexContainer';

const Navbar = () => {
    return (
        // <StyledNavbar>
            <nav>
                <FlexContainer align='center' justify='flex-end'>
                    {/* <NavLogo href='#home'>Stanislaw</NavLogo> */}
                    <NavMenu>
                        <ul>
                            <li>
                                <a href='#home'>
                                    <i class='bx bx-home-alt bx-sm'></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href='#about'>
                                    <i class='bx bx-user bx-sm' ></i>
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href='#skills'>
                                    <i class='bx bx-book-alt bx-sm' ></i>
                                    <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a href='#portfolio'>
                                    <i class='bx bx-briefcase-alt bx-sm' ></i>
                                    <span>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href='#contact'>
                                    <i class='bx bx-message-square-detail bx-sm'></i>
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </NavMenu>
                    {/* <Avatar src={avatar} alt='avatar' /> */}
                </FlexContainer>
            </nav>
        // {/* </StyledNavbar> */}
    );
};

export default Navbar;

// const StyledNavbar = styled.header`
// padding: 10px;
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// background: #f5f9f9;
// z-index: 5;
// transition: .4s;
// box-shadow: 0 -1px 12px #00000026;
// height: 3rem;
// `
// const Avatar = styled.img`
// width: 35px;
// height: 35px;
// border-radius: 50%;
// @media (min-width: 767px){
//     position: fixed;
//     top: 0;
//     left: 0;
// }
// `

const NavMenu = styled.div`
ul{
    display: flex; 
    justify-content: space-around;
}

a{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: .25rem;
    color: rgb(18, 18, 18);
    font-weight: 600;
}

span{
    font-size: .7rem;
}


@media (max-width: 767px){
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f5f9f9;
    box-shadow: 0 -1px 12px #00000026;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    display: grid;
    align-content: center;
    border-radius: 1.25rem 1.25rem 0 0;
    transition: .4s;
    z-index: 10;
}
`