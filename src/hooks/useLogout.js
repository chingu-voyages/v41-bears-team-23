import { useAuthContext } from './useAuthContext';

// eslint-disable-next-line import/prefer-default-export
export const useLogout = () => {
	const { dispatch } = useAuthContext();

	const logout = () => {
		localStorage.removeItem('user');
		dispatch({ type: 'LOGOUT' });
	};

	return { logout };
};
