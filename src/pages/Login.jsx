import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import img from '../assets/login1.jpg';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
		console.log(username, password);
	};

	const navigate = useNavigate();

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="basis-1/2">
				<img src={img} alt="living room" className="w-full object-fit" />
			</div>
			<div className="basis-1/2 px-10 py-10 h-3/5 flex flex-col justify-between">
				<h3 className="text-4xl">SIGN IN</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							className="mb-8 appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
							placeholder="username"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
						<input
							className="appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
							placeholder="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<button
						type="submit"
						className="flex-shrink-0 bg-slate-700 hover:bg-slate-500 border-slate-700 hover:border-slate-500 text-sm border-4 text-white py-1 px-2 rounded"
						disabled={isLoading}
					>
						LOGIN
					</button>
					{error && <div>{error}</div>}
				</form>
				<button
					type="submit"
					className="flex-shrink-0 bg-slate-700 hover:bg-slate-500 border-slate-700 hover:border-slate-500 text-sm border-4 text-white py-1 px-2 rounded w-64"
					onClick={() => navigate('/signup')}
				>
					CREATE A NEW ACCOUNT
				</button>
			</div>
		</div>
	);
}

export default Login;
