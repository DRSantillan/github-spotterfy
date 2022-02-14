import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
	return (
		<nav className='navbar mb-12 shadow-lg bg-neutral text-natural-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' color='white' />
					<Link
						to='/'
						style={{ color: 'white' }}
						className='text-lg font-bold align-middle'
					>
						{title}
					</Link>
				</div>
				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link
							to='/'
							style={{ color: 'white' }}
							className='btn btn-ghost btn-sm rounded-btn'
						>
							HOME
						</Link>
						<Link
							to='/about'
							style={{ color: 'white' }}
							className='btn btn-ghost btn-sm rounded-btn'
						>
							ABOUT US
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

NavBar.defaultProps = {
	title: 'GitHub Spotterfy',
};
NavBar.propTypes = {
	title: PropTypes.string,
};
export default NavBar;
