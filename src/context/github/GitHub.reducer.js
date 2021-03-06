import GitHubActionTypes from './GitHub.types';

const gitHubReducer = (state, action) => {
	switch (action.type) {
		case GitHubActionTypes.GET_USERS:
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};
		case GitHubActionTypes.GET_USER_AND_REPOS:
			return {
				...state,
				user: action.payload.user,
				repos: action.payload.repos,
				isLoading: false,
			};
		case GitHubActionTypes.SET_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GitHubActionTypes.CLEAR_USERS:
			return {
				...state,
				users: [],
			};
		default:
			return state;
	}
};

export default gitHubReducer;
