import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>PrayerKeeper</h1>
          <p className='lead'>
            Keeping track of prayer requests have never been easier
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-info'>
              Sign Up
            </Link>

            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
