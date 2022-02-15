import React, { useState, useContext } from 'react';
import GitHubContext from '../../context/github/GitHub.context';
import AlertContext from '../../context/alert/Alert.context';
import Alerter from '../layout/alert/Alert.component';
import { searchUsers } from '../../context/github/GitHub.actions';
import GitHubActionTypes from '../../context/github/GitHub.types';

const Search =  () => {
	const [text, setText] = useState('');
	const { users, dispatch } = useContext(GitHubContext);
	const { setAlert } = useContext(AlertContext);

	const handleChange = event => setText(event.target.value);
	const handleSubmit = async event => {
		event.preventDefault();

		if (text === '') {
			setAlert('Please enter text to search', 'error');
		} else {
			dispatch( {type: GitHubActionTypes.SET_LOADING})
			const users = await searchUsers(text);
			dispatch({type: GitHubActionTypes.GET_USERS, payload: users})
			setText('');
		}
	};
	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<Alerter />
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search GitHub Users...'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								value={text}
								onChange={handleChange}
							/>
							<button className='absolute top-0 right-0 rounded-l-none width-34 btn btn-lg'>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button
						onClick={() => dispatch({type: GitHubActionTypes.CLEAR_USERS})}
						className='btn btn-ghost btn-lg'
					>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default Search;
