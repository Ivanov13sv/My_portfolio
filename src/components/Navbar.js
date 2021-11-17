import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <NavMenu>
                <ul>
                    <li>
                        <StyledNavLink to='/'>
                            <i class='bx bx-home-alt bx-sm'></i>
                            <span>Home</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to='/about' >
                            <i class='bx bx-user bx-sm' ></i>
                            <span>About</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink  to='/skills' >
                            <i class='bx bx-book-alt bx-sm' ></i>
                            <span>Skills</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink  to='/works' >
                            <i class='bx bx-briefcase-alt bx-sm' ></i>
                            <span>Works</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink  to='/contactMe' >
                            <i class='bx bx-message-square-detail bx-sm'></i>
                            <span>Contact me</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink  to='/contact' >
                            <i class='bx bx-message-square-detail bx-sm'></i>
                            <span>Contact</span>
                        </StyledNavLink>
                    </li>
                </ul>
            </NavMenu>
        </nav>
    );
};

export default Navbar;

const NavMenu = styled.div`
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
    i {
        @media ${props => props.theme.media.md}{
            display: none;
        }
    }
}

span{
    font-size: .7rem;

}

@media ${props => props.theme.media.xs}{

    span {
        display: none;
    }
}

@media ${props => props.theme.media.sm}{
    ul{
        justify-content: center;
        column-gap: 3rem;
    }

}

@media ${props => props.theme.media.md}{
    height: 3rem;
    top: 0;
    left: 0;
    border-radius: 0;
    ul{
        margin: 0 auto;
    }
    span {
        font-size: 1.2rem;
    }

}

@media ${({ theme }) => theme.media.xl}{


}
`
const shine = keyframes`
    0% {color:inherit;}
    100% {color: #4070F4;}
`
;

const StyledNavLink = styled(NavLink)`


&.active > *{
    transition: .3s all ease;
    color: ${props => props.theme.colors.mainBlue};

}


@media ${props => props.theme.media.md}{
cursor: pointer;
&:hover {
    span{
        // -webkit-animation:${shine} 1s infinite;
        // color: green;
    }
}
}
`
    ;
