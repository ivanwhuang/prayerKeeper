import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const CustomNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav>
      <Link to='/myProfile'>My Profile</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/people'>People</Link>
      <Link to='/keeper'>My Keeper</Link>
      <Link to='/' onClick={logout}>
        <i className='fas fa-sign-out-alt'></i> Log out
      </Link>
    </Nav>
  );

  const guestLinks = (
    <Nav>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </Nav>
  );

  return (
    <Navbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Link className='navbar-brand' to='/'>
        <i className='fas fa-bible'></i> PrayerKeeper
      </Link>
      {!loading && (isAuthenticated ? authLinks : guestLinks)}
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(CustomNavbar);
