import React from "react";
import Container from "../Container";
// import MyCard from "../UI/MyCard";
import MyCard from "../UI/MyCard/index";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import styled from "styled-components";


const Works = ({ ...props }) => {


	return (
		<Section >
			<Container>
				<SectionTitle> Works </SectionTitle>
				<PortfolioBody>
					<h2> Examples of my works</h2>
					<PortfolioSlider >
						<MyCard
							cardName='UI Fraasdmework'
							cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
						/>
						<MyCard
							cardName='UI Fraasdmework'
							cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
						/>
						<MyCard
							cardName='UI Fraasdmework'
							cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
						/>
						<MyCard
							cardName='UI Fraasdmework'
							cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
						/>
						<MyCard
							cardName='UI Fraasdmework'
							cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
						/>
					</PortfolioSlider>
				</PortfolioBody>
			</Container>
		</Section>
	);
};

export default Works;

const PortfolioBody = styled.div`
	h2 {
		text-align: center;
		display: none;
	}
	@media ${({theme}) => theme.media.md}{
		h2{
			display: block;
		}
	}
`;

const PortfolioSlider = styled.div`
	display: flex;
	overflow: auto;
	padding: 20px 0 20px 0;
	transition: 0.3s;
	@media ${(props) => props.theme.media.md} {
		flex-wrap: wrap;
		overflow: none;
	}
`;
