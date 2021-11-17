import React from "react";
import Container from "../../Container";
import {StyledCard, CardBody, CardTitle, CardDescr, CardStack,StackList,CardButtons, CardButton} from './style';

const Card = ({ cardName, cardDescr, cardStack, gitHref, testHref }) => {
	return (
		<Container>
			<StyledCard>
				<CardBody>
					<CardTitle>{cardName}</CardTitle>
					<CardDescr>
						<h4>Description:</h4>
						<p> {cardDescr} </p>
					</CardDescr>
					<CardStack>
						<h4>Stack:</h4>
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
						<CardButton
							textColor={(props) => props.theme.colors.lime}
						>
							Hello
						</CardButton>
						<CardButton
							textColor={(props) => props.theme.colors.lime}
						>
							Hello
						</CardButton>
					</CardButtons>
				</CardBody>
			</StyledCard>
		</Container>
	);
};

export default Card;
