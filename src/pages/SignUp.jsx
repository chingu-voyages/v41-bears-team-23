import React, { useState } from 'react';
import img from '../assets/signup.jpg';
import { useSignup } from '../hooks/useSignup';

function SignUp() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(email, username, password);
		console.log(username, email, password);
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="basis-1/2">
				<img src={img} alt="living room" className="w-full object-fit" />
			</div>
			<div className="basis-1/2 px-10 py-10 h-3/5 flex flex-col justify-between">
				<div>
					<h3 className="text-4xl">Join the club and get the benefints</h3>
					<p className="text-sm mt-8">
						Sign up for our newsletter and receive exclusive offers on new
						ranges, sales, pop up stores and more
					</p>
				</div>
				<form
					className="flex flex-col items-center gap-4 w-3/5"
					onSubmit={handleSubmit}
				>
					<input
						className="appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="your username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className="appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="you@email.com"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="your password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="flex-shrink-0 bg-slate-700 hover:bg-slate-500 border-slate-700 hover:border-slate-500 text-sm border-4 text-white py-1 px-2 rounded"
						disabled={isLoading}
					>
						Sign Up
					</button>
					{error && <div>{error}</div>}
				</form>
			</div>
		</div>
	);
}

export default SignUp;
