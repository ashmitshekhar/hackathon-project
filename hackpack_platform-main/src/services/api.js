const request = async (path, options = {}) => {
	const token = localStorage.getItem('hackpack_token');
	const response = await fetch(`/api${path}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : {}),
			...options.headers,
		},
	});

	const data = await response.json().catch(() => ({}));
	if (!response.ok) {
		throw new Error(data.message || 'Request failed');
	}
	return data;
};

export const authApi = {
	login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
	register: (details) => request('/auth/register', { method: 'POST', body: JSON.stringify(details) }),
	profile: () => request('/auth/profile'),
};

export const hackathonApi = {
	list: () => request('/hackathons'),
};

export const teamApi = {
	searchMembers: (query = '') => request(`/auth/members?search=${encodeURIComponent(query)}`),
	createTeam: (team) => request('/teams', { method: 'POST', body: JSON.stringify(team) }),
};

export const chatApi = {
	send: (messages) => request('/chat', { method: 'POST', body: JSON.stringify({ messages }) }),
};

 