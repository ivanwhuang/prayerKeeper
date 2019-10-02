import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from '../layout/Avatar';

const ProfileItem = ({ profile: { user, location, hobbies } }) => {
  return (
    <div className='profile bg-light'>
      <Avatar icon={user.avatar} />
      <div>
        <h2>{user.name}</h2>
        <p className='my-1'>{location && <span>{location}</span>} </p>
        <Link to={`/profile/${user._id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {hobbies &&
          hobbies.slice(0, 4).map((hobby, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check'>{hobby}</i>
            </li>
          ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
