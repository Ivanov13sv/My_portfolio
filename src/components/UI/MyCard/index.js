import React from "react";
import Container from "../../Container";
import MyLinkButton from "../MyLinkButton";
import {StyledCard, CardBody, CardTitle, CardDescr, CardStack,StackList,CardButtons} from './style';

const Card = ({ cardName, cardDescr, cardStack, gitHref, testHref }) => {
	return (
		<Container>
			<StyledCard>
				<CardBody>
					<CardTitle>{cardName}</CardTitle>
					<CardDescr>
						<h3>Description:</h3>
						<p> {cardDescr} </p>
					</CardDescr>
					<CardStack>
						<h3>Stack:</h3>
						<StackList>
							<li>react</li>
							<li>jss</li>
							<li>jss</li>
							<li>jss</li>
							<li>jss</li>
							<li>jasdasds</li>
							<li>jss</li>
						</StackList>
					</CardStack>
					<CardButtons>
						<MyLinkButton
							textColor={(props) => props.theme.colors.lime}
						>
							Hello
						</MyLinkButton>
						<MyLinkButton
							textColor={(props) => props.theme.colors.lime}
						>
							Hello
						</MyLinkButton>
					</CardButtons>
				</CardBody>
			</StyledCard>
		</Container>
	);
};

export default Card;
