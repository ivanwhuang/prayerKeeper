import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUserRequest } from '../../actions/keeper';

import Avatar from '../layout/Avatar';

const ProfileAbout = ({
  addUserRequest,
  profile: {
    user: { _id, name, avatar },
    location,
    bio,
    hobbies,
    social
  },
  auth,
  prayerRequests
}) => {
  return (
    <Fragment>
      <div class='profile-grid my-1'>
        <div class='profile-top bg-primary p-2'>
          <Avatar icon={avatar} />
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
                  {!auth.loading && _id !== auth.user._id && (
                    <button
                      type='button'
                      class='btn btn-info'
                      onClick={() => addUserRequest(request._id)}
                    >
                      Add To My Keeper
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <h4>No Prayer Requests</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  addUserRequest: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  prayerRequests: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addUserRequest }
)(ProfileAbout);
