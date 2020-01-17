import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const LoginForm = () => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const login = e => {
		e.preventDefault();
		MySwal.fire({
			title: <p>Sign in info:</p>,
			html: (
				<div>
					<p>Username: {username}</p>
					<p>Password: {password}</p>
				</div>
			)
		}).then(() => {
			setUsername('');
			setPassword('');
		});
	};

	return (
		<FullDiv className="col-md-6 d-flex align-items-center">
			<form className="form-group p-3 w-100">
				<h2 className="mb-4">Sign in</h2>
				<div className="input-group input-group-lg my-3">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white" id="basic-addon1">
							<FaEnvelope size={25} />
						</span>
					</div>
					<input
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder="email"
						type="text"
						className="form-control"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="input-group input-group-lg my-3">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white" id="basic-addon1">
							<FaLock size={25} />
						</span>
					</div>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="password"
						type="password"
						className="form-control"
					/>
				</div>
				<button onClick={login} className="btn btn-primary btn-lg py-3 btn-block mx-auto w-50 mt-4 shadow-sm">
					Login
				</button>
				<small className="text-center d-block mt-3">
					New to Herp? <a href="#">Sign up for free!</a>
				</small>
			</form>
		</FullDiv>
	);
};

const FullDiv = styled.div`
	height: 100vh;
`;

export default LoginForm;
