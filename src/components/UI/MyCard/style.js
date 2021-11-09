import styled, {keyframes} from "styled-components";
import background from "../../../img/background/card_background.jpg";

const flow = keyframes`
0% {
    background-position: 0%;
}

50% {
    background-position: 1000%;
}

100%{
    background-position: 0%;
}
}
`;

export const CardBody = styled.div`
	background-image: linear-gradient(to top, #22212c, hsl(0 0% 0% / 0));
	padding: 1.5rem 1.5rem 5rem 1.5rem;
	margin-bottom: -3.5rem;

	> *:not(:last-child) {
		margin: 0 0 20px 0;
	}
	@media ${(props) => props.theme.media.md} {
		transform: translateY(65%);
		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
`;

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.lime};
	position: relative;
	width: max-content;
	font-weight: 500;
	padding: 0 0 5px 0;
	::after {
		content: "";
		position: absolute;
		background-color: ${({ theme }) => theme.colors.purple};
		height: 4px;
		width: calc(100% + 20%);
		left: -15%;
		bottom: 0;
		@media ${(props) => props.theme.media.md} {
			width: 0;
		}
	}
`;
export const StyledCard = styled.div`
	margin: 30px 0 0 0;
	padding: 3rem 0 0;
	background-image: url(${background});
	box-shadow: 0 0 15px 3px #767676;
	border-radius: 15px;
	max-width: 250px;
	overflow: hidden;
	animation: ${flow} 300s linear infinite;

	@media ${(props) => props.theme.media.md} {
		max-width: 280px;
		&:hover {
			transition: transform 0.4s ease;
			transform: scale(1.03);

			${CardBody} {
				transform: translateY(0%);
				transition-delay: 0.4s;
			}
			${CardTitle}::after {
				width: calc(100% + 20%);
				transition: 0.4s;
			}
		}
	}
`;

export const CardDescr = styled.div`
	p {
		min-height: 5rem;
	}
	> * {
		color: ${({ theme }) => theme.colors.secondaryPurple};
	}
	h3 {
		font-weight: 500;
		margin: 0 0 10px 0;
	}
`;

export const CardStack = styled.div`
	h3 {
		font-weight: 500;
		color: ${({ theme }) => theme.colors.secondaryPurple};
	}
	display: flex;
	> * {
		margin: 0 15px 0 0;
	}
`;

export const StackList = styled.ul`
	display: flex;
	li {
		list-style: none;
	}
`;

export const CardButtons = styled.div`
	display: flex;
	justify-content: space-around;
	> * {
		flex: 0 1 50%;
		margin: 0 10px;
	}
`;
