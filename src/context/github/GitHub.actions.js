import GitHubActionTypes from "./GitHub.types";

export const fetchGitHubUser = users => ({
	type: GitHubActionTypes.GET_USERS,
	payload: users,
});
