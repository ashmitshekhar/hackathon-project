import { createContext, useContext, useEffect, useState } from 'react';
import { authApi } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!localStorage.getItem('hackpack_token')) {
			setLoading(false);
			return;
		}
		authApi.profile()
			.then(setUser)
			.catch(() => localStorage.removeItem('hackpack_token'))
			.finally(() => setLoading(false));
	}, []);

	const authenticate = async (action, details) => {
		const result = await action(details);
		localStorage.setItem('hackpack_token', result.token);
		setUser(result.user || await authApi.profile());
		return result;
	};

	const login = (details) => authenticate(authApi.login, details);
	const register = (details) => authenticate(authApi.register, details);
	const logout = () => {
		localStorage.removeItem('hackpack_token');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);

 