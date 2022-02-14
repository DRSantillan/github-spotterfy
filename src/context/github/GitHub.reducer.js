import GitHubActionTypes from "./GitHub.types";

const gitHubReducer = (state, action) => {
	switch (action.type) {
		case GitHubActionTypes.GET_USERS:
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};
		case GitHubActionTypes.SET_LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};

export default gitHubReducer;
