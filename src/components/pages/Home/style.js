import styled from "styled-components";

export const HelloTitle = styled.h1`
font-size: ${props => props.theme.fontSize.mainTitleMd};
line-height: 130%;
margin: 40px 0 60px 0;
text-shadow: 0px 0px 1px #0000005c;

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

export const SocialLinks = styled.ul`
display: flex;
flex-direction: column;
@media ${({ theme }) => theme.media.md}{
    flex-direction: row;
}
`

export const SocialItem = styled.li`

display: flex;
font-size: 2.3rem;
text-shadow: 0px 0px 1px #0000005c;
margin: 0 0 .5rem 0;
list-style: none;
a{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.darkBrown};
}

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