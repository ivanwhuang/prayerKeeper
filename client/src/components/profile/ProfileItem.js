import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

const ProfileItem = ({ profile: { user, location, hobbies } }) => {
  return (
    <Fragment>
      {/* <div className='profile bg-light'>
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
      </div> */}

      {/* <div
        className='post bg-white p-1 my-1'
        style={{
          display: 'flex',
          width: '20rem',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
          <Link to={`/profile/${user._id}`}>
            <Avatar icon={user.avatar} />
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4>{user.name}</h4>
          <Link to={`/profile/${user._id}`} className='btn btn-primary'>
            View Profile
          </Link>
        </div>
      </div> */}

      <Card
        className='profiles bg-white p-1 my-1'
        style={{ width: '15rem', marginLeft: '5px', marginRight: '5px' }}
      >
        <Card.Body style={{ textAlign: 'center' }}>
          <Link to={`/profile/${user._id}`}>
            <Avatar icon={user.avatar} />
          </Link>
          <div>
            <h4>{user.name}</h4>
            <Link to={`/profile/${user._id}`} className='btn btn-info'>
              View Profile
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
