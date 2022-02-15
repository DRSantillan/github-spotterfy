import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserSearchResultItem = ({ user: { login, avatar_url, repos_url } }) => {
	return <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="GitHub Profile" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>
                    View Profile
                </Link>
            </div>
        </div>
    </div>;
};

UserSearchResultItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserSearchResultItem;
