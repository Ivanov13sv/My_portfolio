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
						<h2>Nice to meet you here</h2>
						<p>
							I'm a self taught web developer from Moscow, Russia.
						</p>
						<p>
							My journey as a developer has just begun, but I'm sure it will be a hell of a lot of fun! 

						</p>
						<p>
							In my free time I like to eat, skateboard and Nezuko.
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
	padding: 4rem 0 0 0;

	img {
		width: 180px;
		height: 180px;
		border-radius: 1rem;
		margin: 0 0 10px 0;
		// box-shadow: 0px 0px 18px -3px rgba(114, 114, 114, 0.63) inset;
		box-shadow: 0 0 0.8em 0 grey;
	}

	@media ${(props) => props.theme.media.md} {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		img {
			width: 280px;
			height: 280px;
		}
	}
`;
const AboutSubtitle = styled.div`
	h2 {
		text-shadow: 0px 0px 1px #0000005c;
	}
	p {
		font-size: 1.1rem;
		margin: .5rem 0 0 0;
	}
	@media ${({ theme }) => theme.media.md} {
		padding: 0 30px;
		p{
			font-size: 1.4rem;
		}
	}
`;
