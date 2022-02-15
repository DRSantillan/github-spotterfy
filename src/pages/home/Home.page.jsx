import React from 'react';
import UserSearchResults from '../../components/users/users-search-results/UserSearchResults.component';
import Search from '../../components/search/Search.component';

const Home = () => {
	return (
		<>
			<h1 className='text-5xl'>GitHub SpoTTerfy.</h1>
			<p className=' pb-10 pt-3'>
				Search for your favourite GitHub Developer...
			</p>
			<Search />
			<UserSearchResults />
		</>
	);
};
export default Home;
