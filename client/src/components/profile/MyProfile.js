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
      <Link to='/editProfile' className='btn btn-info'>
        Edit Profile
      </Link>

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
