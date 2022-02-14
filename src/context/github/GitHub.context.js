import { createContext,useState } from 'react';

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUsers = async () => {
		const response = await fetch(`${GITHUB_URL}/users`, {
			method: 'GET',
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();
		setUsers(data);
		setIsLoading(false);
		console.log(data);
	};
	return (
		<GitHubContext.Provider value={{ users, isLoading, fetchUsers }}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubContext;
