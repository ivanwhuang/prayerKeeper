import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import ProfileAbout from './ProfileAbout';
import Spinner from '../layout/Spinner';

import { Container } from 'react-bootstrap';

const MyProfile = ({
  profile: { profile, loading },
  prayers: { prayerRequests },
  getCurrentProfile
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <div>
        <p className='large'>
          My Profile
          <div style={{ float: 'right' }}>
            <Link to='/editProfile' className='btn btn-dark'>
              Edit Profile
            </Link>
            <Link to='/editAvatar' className='btn btn-info'>
              Change Avatar Icon
            </Link>
          </div>
        </p>
      </div>
      <ProfileAbout profile={profile} prayerRequests={prayerRequests} />
    </Container>
  );
};

MyProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getMyRequests: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  prayers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  prayers: state.prayers
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(MyProfile);
