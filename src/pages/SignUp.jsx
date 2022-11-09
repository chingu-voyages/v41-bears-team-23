import React, { useState } from 'react';
import img from '../assets/signup.jpg';

function SignUp() {
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
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
				<form className="flex items-center" onSubmit={handleSubmit}>
					<input
						className="appearance-none bg-transparent border border-gray-300  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="you@email.com"
						value={email}
						onChange={handleChange}
					/>
					<button className="flex-shrink-0 bg-slate-700 hover:bg-slate-500 border-slate-700 hover:border-slate-500 text-sm border-4 text-white py-1 px-2 rounded">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
