import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

const ProfileItem = ({ profile: { user, location, hobbies } }) => {
  return (
    <Fragment>
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
