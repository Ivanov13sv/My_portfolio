import React from "react";
import Container from "../Container";
import Card from "../UI/MyCard/index";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import styled from "styled-components";

const Portfolio = () => {
	return (
		<Section id='/portfolio'>
			<Container>
				<SectionTitle> Portfolio </SectionTitle>
				<PortfolioBody>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
					<Card
						cardName='UI Framework'
						cardDescr='Lorem	asd;fjnasjkdfn asdf lasdkf alskdf lasdfla ksjdnflkjasdnlk'
					/>
				</PortfolioBody>
			</Container>
		</Section>
	);
};

export default Portfolio;

const PortfolioBody = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
