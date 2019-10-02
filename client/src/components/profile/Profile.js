import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import ProfileAbout from './ProfileAbout';
import Spinner from '../layout/Spinner';

import { Container } from 'react-bootstrap';

const Profile = ({
  profile: { profile, loading },
  prayers: { prayerRequests },
  getProfileById,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <Link to='/people' className='btn btn-light'>
        Back To Profiles
      </Link>

      <ProfileAbout profile={profile} prayerRequests={prayerRequests} />
    </Container>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  prayers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  prayers: state.prayers
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);