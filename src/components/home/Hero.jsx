import React from 'react';
import styled from 'styled-components';
import { FaFeather } from 'react-icons/fa';

const Hero = () => {
	return (
		<FullDivPurple className="col-md-6 order-md-2 d-flex justify-content-center align-items-center">
			<h1 className="text-white">
				<FaFeather /> Chirper
			</h1>
		</FullDivPurple>
	);
};

const FullDivPurple = styled.div`
	height: 100vh;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export default Hero;
