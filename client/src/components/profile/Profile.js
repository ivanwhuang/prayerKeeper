import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import { getUserRequests } from '../../actions/prayers';
import Spinner from '../layout/Spinner';

import { Container } from 'react-bootstrap';

const Profile = ({
  profile: { profile, loading },
  prayers: { prayerRequests },
  getProfileById,
  getUserRequests,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getUserRequests(match.params.id);
  }, [getProfileById, getUserRequests, match.params.id]);

  const {
    user: { name },
    bio,
    location,
    social,
    hobbies
  } = profile;

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <Link to='/people' className='btn btn-light'>
        Back To Profiles
      </Link>

      <div class='profile-grid my-1'>
        <div class='profile-top bg-primary p-2'>
          <h1 class='large'>{name}</h1>
          <p>{location && <span>{location}</span>}</p>
          <div class='icons my-1'>
            {social && social.twitter && (
              <a
                href={social.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-twitter fa-2x'></i>
              </a>
            )}

            {social && social.facebook && (
              <a
                href={social.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-facebook fa-2x'></i>
              </a>
            )}

            {social && social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-linkedin fa-2x'></i>
              </a>
            )}

            {social && social.instagram && (
              <a
                href={social.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-instagram fa-2x'></i>
              </a>
            )}
          </div>
        </div>

        <div class='profile-about bg-light p-2'>
          {bio && (
            <div>
              <h2 class='text-primary'>{name}'s Bio</h2>
              <p>{bio}</p>
              <div class='line'></div>
            </div>
          )}
          <h2 class='text-primary'>Skill Set</h2>
          <div class='skills'>
            {hobbies.map((hobby, index) => (
              <div key={index} className='p-1'>
                <i className='fas fa-check'></i> {hobby}
              </div>
            ))}
          </div>
        </div>

        <div className='profile-exp bg-white p-2'>
          <h2 className='text-primary'>Hobbies</h2>
          {hobbies.length > 0 ? (
            <div>
              {hobbies.map((hobby, index) => (
                <div key={index}>
                  <h3 className='text-dark'>{hobby}</h3>
                </div>
              ))}
            </div>
          ) : (
            <h4>No Hobbies</h4>
          )}
        </div>

        <div className='profile-edu bg-white p-2'>
          <h2 className='text-primary'>Prayer Requests</h2>
          {prayerRequests.length > 0 ? (
            <div>
              {prayerRequests.map((request, index) => (
                <div key={index}>
                  <h3 className='text-dark'>{request.text}</h3>
                  <p>{request.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <h4>No Prayer Requests</h4>
          )}
        </div>
      </div>
    </Container>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getUserRequests: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  prayers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  prayers: state.prayers
});

export default connect(
  mapStateToProps,
  { getProfileById, getUserRequests }
)(Profile);
