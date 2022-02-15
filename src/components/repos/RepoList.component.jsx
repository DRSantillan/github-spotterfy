import React from 'react';
import PropTypes from 'prop-types';
import RepoListItem from './RepoListItem.component';

const RepoList = ({ repos }) => {
	return (
		<div className='rounded-lg shadow-lg card bg-base-100'>
			<div className='card-body'>
				<h2 className='text-3xl my-4 font-bold card-title'>
					Latest Repositories
				</h2>
			</div>
			{repos.map(repo => (
				<RepoListItem key={repo.id} repo={repo} />
			))}
		</div>
	);
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
