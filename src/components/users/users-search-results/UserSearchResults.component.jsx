import React, { useContext } from 'react';
import Spinner from '../../layout/spinner/Spinner.component';
import UserSearchResultItem from '../user-search-result-item/UserSearchResultItem.component';
import GitHubContext from '../../../context/github/GitHub.context';

const UserSearchResults = () => {
	// state
	const {users, isLoading} = useContext(GitHubContext)
	


	
    if(!isLoading){
        return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (<UserSearchResultItem key={user.id} user={user}/>))}
    </div>;
    } else {
        return <Spinner/>
    }
	
};

export default UserSearchResults;
