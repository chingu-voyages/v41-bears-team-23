import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// eslint-disable-next-line import/prefer-default-export
export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (email, username, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			'https://voyage-server-xk0b.onrender.com/api/v1/register',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, username, password }),
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setIsLoading(false);
		}
	};

	return { signup, isLoading, error };
};
