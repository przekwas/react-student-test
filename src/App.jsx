import React from 'react';
import styled from 'styled-components';
import Hero from './components/home/Hero';
import LoginForm from './components/login/LoginForm';

const App = () => {
	return (
		<FullDiv className="container-fluid">
			<div className="row">
				<Hero />
				<LoginForm />
			</div>
		</FullDiv>
	);
};

const FullDiv = styled.div`
	height: 100vh;
`;

export default App;
