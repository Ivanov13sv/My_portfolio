import styled, {css} from "styled-components";

export const StyledButton = styled.button`
	cursor: pointer;
	position: relative;
	height: 40px;
	padding: 0 1.5rem;
	background: transparent;
	border: 2px solid
		${(props) =>
			props.border ||
			css`
				${(props) => props.theme.colors.lime}
			`};
	border-radius: 10px;
	overflow: hidden;
	z-index: 4;
	font-size: ${(props) => props.theme.fontSize.normalSize};
	font-weight: 600;

	span {
		color: ${(props) =>
			props.textColor ||
			css`
				${({ theme }) => theme.colors.mainBlue}
			`};
		display: inline-block;
		transition: 0.3s;
		position: relative;
		z-index: 4;
	}
	&:before {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.theme.colors.secondary};
		top: 100%;
		left: 0;
		transition: 0.3s;
		z-index: 1;
	}
	&:hover {
		&:before {
			top: 0;
		}
		span {
			color: #fff;
			transform: rotateY(360deg);
		}
	}
`;
