import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem.js';
import { getProfiles } from '../../actions/profiles';

import { Container } from 'react-bootstrap';

const Profiles = ({ getProfiles, profiles: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Container>
      {loading && profiles === null ? (
        <Spinner />
      ) : (
        <div>
          <h1 className='large'>People</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Encourage Those Around
            You!
          </p>
          <div
            // className='profiles'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profiles: state.profiles
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
