import React from "react";
import styled, { keyframes } from "styled-components";
const BackgroundCubes = () => {
	return (
		<Wrapper>
			<Area>
				<Circles>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</Circles>
			</Area>
		</Wrapper>
	);
};

export default BackgroundCubes;

const Wrapper = styled.div``;

const Area = styled.div`
	background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
	// width: 100%;
	// height:100vh;
`;

const animate = keyframes`
0%{
    transform: translateY(0) rotate(0deg);
    border-radius: 0;

}

100%{
    transform: translateY(-1300px) rotate(720deg);

    border-radius: 50%;
}
}
`;

const Circles = styled.ul`

	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(255, 255, 255, 0.5);
		animation: ${animate} 13s linear infinite;
		bottom: -150px;
	}
	li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 1s;
		animation-duration: 12s;
	}
	li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 3s;
	}
	li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}
	li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}
	li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}
	li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}
	li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}
	li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}
	li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}
`;
