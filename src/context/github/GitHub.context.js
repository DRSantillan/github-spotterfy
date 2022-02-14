import { createContext, useReducer, useState } from 'react';
import gitHubReducer from './GitHub.reducer';
import GitHubActionTypes from './GitHub.types';

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
	const initialState = {
		users: [],
		isLoading: false,
	};
	const [state, dispatch] = useReducer(gitHubReducer, initialState);

	const fetchUsers = async () => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users`, {
			method: 'GET',
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();

		dispatch({ type: GitHubActionTypes.GET_USERS, payload: data });
	};
	// set loading
	const setLoading = () => dispatch({ type: 'SET_LOADING' });
	return (
		<GitHubContext.Provider
			value={{
				users: state.users,
				isLoading: state.isLoading,
				fetchUsers,
			}}
		>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubContext;
