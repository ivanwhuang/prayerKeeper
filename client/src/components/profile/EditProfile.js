import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { getCurrentProfile, updateProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const EditProfile = ({
  getCurrentProfile,
  updateProfile,
  history,
  profile: { profile, loading }
}) => {
  const [formData, setFormData] = useState({
    hobbies: '',
    bio: '',
    location: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: ''
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      hobbies: loading || !profile.hobbies ? '' : profile.hobbies.join(','),
      location: loading || !profile.location ? '' : profile.location,
      bio: loading || !profile.bio ? '' : profile.bio,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
    // re-render based on loading and getCurrentProfile
  }, [loading, getCurrentProfile]);

  const {
    hobbies,
    bio,
    location,
    facebook,
    twitter,
    linkedin,
    instagram
  } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateProfile(formData, history);
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <h1 className='large'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add Some Basic Info Yourself
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            placeholder='Hi! My name is ... '
            name='bio'
            value={bio}
            onChange={handleChange}
          ></textarea>
          <small className='form-text'>
            Give everyone a short description of who you are!
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={handleChange}
          />
          <small className='form-text'>
            City & state suggested (eg. San Francisco, CA)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Hobbies'
            name='hobbies'
            value={hobbies}
            onChange={handleChange}
          />
          <small className='form-text'>
            Please use comma separated values (eg.
            Running,Dancing,Eating,Biking)
          </small>
        </div>
        <div>
          <div className='form-group social-input'>
            <i className='fab fa-twitter fa-2x'></i>
            <input
              type='text'
              placeholder='Twitter URL'
              name='twitter'
              value={twitter}
              onChange={handleChange}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-facebook fa-2x'></i>
            <input
              type='text'
              placeholder='Facebook URL'
              name='facebook'
              value={facebook}
              onChange={handleChange}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-linkedin fa-2x'></i>
            <input
              type='text'
              placeholder='Linkedin URL'
              name='linkedin'
              value={linkedin}
              onChange={handleChange}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-instagram fa-2x'></i>
            <input
              type='text'
              placeholder='Instagram URL'
              name='instagram'
              value={instagram}
              onChange={handleChange}
            />
          </div>
        </div>

        <input type='submit' className='btn btn-info my-1' />
        <Link className='btn btn-dark my-1' to='/myProfile'>
          Go Back
        </Link>
      </form>
    </Container>
  );
};

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, updateProfile }
)(withRouter(EditProfile));
