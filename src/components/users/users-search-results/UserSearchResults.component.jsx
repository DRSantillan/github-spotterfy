import React, { useEffect, useState } from 'react';
import Spinner from '../../layout/spinner/Spinner.component';
import UserSearchResultItem from './user-search-result-item/UserSearchResultItem.component';

const UserSearchResults = () => {
	// state
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		
		const response = await fetch(
			`${process.env.REACT_APP_GITHUB_URL}/users`,
			{
				method: 'GET',
				headers: {
					Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
				},
			}
		);
		const data = await response.json();
		setUsers(data);
		setIsLoading(false);
		console.log(data)
	};
    if(!isLoading){
        return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (<UserSearchResultItem user={user}/>))}
    </div>;
    } else {
        return <Spinner/>
    }
	
};

export default UserSearchResults;
