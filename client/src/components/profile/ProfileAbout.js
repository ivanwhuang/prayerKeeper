import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUserRequest } from '../../actions/keeper';
import Moment from 'react-moment';

import { Row, Col, Button } from 'react-bootstrap';

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
      <Row>
        <Col lg={true}>
          <div class='profile-top p-2'>
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
            <h3>Who I Am</h3>
            {bio ? (
              <div>
                <p>{bio}</p>
              </div>
            ) : (
              <div>
                <p>Hello.</p>
              </div>
            )}
            <div className='line'></div>
            <h3>Hobbies</h3>
            {hobbies.length > 0 ? (
              <div class='hobbies'>
                {hobbies.map((hobby, index) => (
                  <div key={index} className='p-1'>
                    <i className='fas fa-fire-alt'></i> {hobby}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>No Hobbies</p>
              </div>
            )}
          </div>
        </Col>

        <Col lg={true}>
          <div className='profile-requests bg-light p-2'>
            <h2>Prayer Requests</h2>
            {prayerRequests.length > 0 ? (
              <div>
                {prayerRequests.map((request, index) => (
                  <div
                    className='card my-1'
                    style={{ borderWidth: '2px', borderColor: '#1e1e1e' }}
                    key={index}
                  >
                    <div className='card-body'>
                      <p className='card-text'>{request.text}</p>
                      <p class='post-date'>
                        <Moment format='MM//DD/YYYY'>{request.date}</Moment>
                      </p>
                      {!auth.loading && _id !== auth.user._id && (
                        <Button
                          onClick={() => addUserRequest(request._id)}
                          variant='info'
                        >
                          Add To My Keeper
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>I do not have any prayer requests at this time.</p>
            )}
          </div>
        </Col>
      </Row>
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
