import React from "react";
import styled from "styled-components";
import smallPhoto from "../../img/smallAva.jpg";
import mediumPhoto from "../../img/321.jpg";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import Container from "../Container";

const About = () => {
	return (
		<Section display='flex' direction='column'>
			<Container>
				<SectionTitle>About</SectionTitle>
				<AboutContainer>
					<picture>
						<source
							srcSet={smallPhoto}
							type='image/jpeg'
							media='(max-width: 767px)'
						/>
						<source
							srcSet={mediumPhoto}
							type='image/jpeg'
							media='(min-width: 768px)'
						/>
						<img scr={mediumPhoto} alt='Stanislav' />
					</picture>
					{/* <img alt='Stanislav' src={stas} /> */}
					<AboutSubtitle>
						<h2>About me</h2>
						<p>
							I'm a self taught web developer from Moscow, Russia
						</p>
					</AboutSubtitle>
				</AboutContainer>
				{/* <BackgroundCubes /> */}
			</Container>
		</Section>
	);
};

export default About;

const AboutContainer = styled.div`
	text-align: center;
	row-gap: 2rem;
	padding: 2rem 0 0 0;

	img {
		width: 180px;
		height: 180px;
		border-radius: 1rem;
		margin: 0 0 10px 0;
		// box-shadow: 0px 0px 18px -3px rgba(114, 114, 114, 0.63) inset;
		box-shadow: 0 0 1em 0 ${({ theme }) => theme.colors.normalBrown};
	}

	@media ${(props) => props.theme.media.md} {
		display: flex;
		flex-direction: row-reverse;

		img {
			width: 280px;
			height: 280px;
		}
	}
`;
const AboutSubtitle = styled.div`

padding: 0 30px 0 0;
	h2 {
		text-shadow: 0px 0px 1px #0000005c;
	}
	p {
		margin: 10px 0 0 0;
	}
    @media ${({theme}) => theme.media.md}{
        padding: 0 30px;
    }
`;
