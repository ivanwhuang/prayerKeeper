import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const guestLinks = (
    <Nav className='ml-auto'>
      <Link className='nav-link' to='/news'>
        News
      </Link>
      <Link className='nav-link' to='/register'>
        Register
      </Link>
      <Link className='nav-link' to='/login'>
        Login
      </Link>
    </Nav>
  );

  return (
    <Navbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Link className='navbar-brand' to='/'>
        <i class='fas fa-bible'></i> PrayerKeeper
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>{guestLinks}</Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
