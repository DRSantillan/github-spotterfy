import { createContext, useReducer, useState } from 'react';
import gitHubReducer from './GitHub.reducer';
import GitHubActionTypes from './GitHub.types';

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		isLoading: false,
	};
    //
	const [state, dispatch] = useReducer(gitHubReducer, initialState);
    // get search result(testing only)
	const searchUsers = async text => {
		setLoading();

        const params = new URLSearchParams({q: text})
		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const {items} = await response.json();
        console.log(items)

		dispatch({ type: GitHubActionTypes.GET_USERS, payload: items });
	};

	const fetchUser = async login => {
		setLoading();

		const response = await fetch(`${GITHUB_URL}/user/${login}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		console.log(response.status)
		if(response.status === 404) {
			window.location = '/notfound';
		} else {
		const data = await response.json();
		console.log(data)
		

		dispatch({ type: GitHubActionTypes.GET_USER, payload: data });	
		}
		
	};
    // clear users from state
    const clearUsers =()=> dispatch({type: 'CLEAR_USERS'})
	// set loading
	const setLoading = () => dispatch({ type: 'SET_LOADING' });
    //
	return (
		<GitHubContext.Provider
			value={{
				users: state.users,
				isLoading: state.isLoading,
				searchUsers,
                clearUsers,
				user: state.user,
				fetchUser
			}}
		>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubContext;
