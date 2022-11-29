import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
		console.log(username, password);
	};
	return (
		<div className="w-2/5 h-screen flex flex-col justify-evenly">
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
			<p>CREATE A NEW ACCOUNT</p>
		</div>
	);
}

export default Login;
