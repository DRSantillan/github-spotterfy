import React from 'react';
import UserSearchResults from '../../components/users/users-search-results/UserSearchResults.component';
import Search from '../../components/search/Search.component';

const Home = () => {
	return <>
        <h1 className="text-6xl">Welcome To GitHub SpoTTerfy.</h1>
        <Search/>
        <UserSearchResults/> 
    </>;
};
export default Home;
