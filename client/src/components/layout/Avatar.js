import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import User from '../../img/avatarIcons/user.png';
import Boy1 from '../../img/avatarIcons/boy-1.png';
import Boy2 from '../../img/avatarIcons/boy-2.png';
import Boy3 from '../../img/avatarIcons/boy-3.png';
import Boy4 from '../../img/avatarIcons/boy-4.png';
import Boy5 from '../../img/avatarIcons/boy-5.png';
import Boy6 from '../../img/avatarIcons/boy-6.png';
import Boy7 from '../../img/avatarIcons/boy-7.png';
import Girl1 from '../../img/avatarIcons/girl-1.png';
import Girl2 from '../../img/avatarIcons/girl-2.png';
import Girl3 from '../../img/avatarIcons/girl-3.png';
import Girl4 from '../../img/avatarIcons/girl-4.png';
import Girl5 from '../../img/avatarIcons/girl-5.png';
import Girl6 from '../../img/avatarIcons/girl-6.png';
import Girl7 from '../../img/avatarIcons/girl-7.png';

const Avatar = ({ icon }) => {
  return (
    <Fragment>
      {icon === 'user' && <img className='round-img my-1' src={User} alt='' />}
      {icon === 'boy-1' && <img className='round-img my-1' src={Boy1} alt='' />}
      {icon === 'boy-2' && <img className='round-img my-1' src={Boy2} alt='' />}
      {icon === 'boy-3' && <img className='round-img my-1' src={Boy3} alt='' />}
      {icon === 'boy-4' && <img className='round-img my-1' src={Boy4} alt='' />}
      {icon === 'boy-5' && <img className='round-img my-1' src={Boy5} alt='' />}
      {icon === 'boy-6' && <img className='round-img my-1' src={Boy6} alt='' />}
      {icon === 'boy-7' && <img className='round-img my-1' src={Boy7} alt='' />}
      {icon === 'girl-1' && (
        <img className='round-img my-1' src={Girl1} alt='' />
      )}
      {icon === 'girl-2' && (
        <img className='round-img my-1' src={Girl2} alt='' />
      )}
      {icon === 'girl-3' && (
        <img className='round-img my-1' src={Girl3} alt='' />
      )}
      {icon === 'girl-4' && (
        <img className='round-img my-1' src={Girl4} alt='' />
      )}
      {icon === 'girl-5' && (
        <img className='round-img my-1' src={Girl5} alt='' />
      )}
      {icon === 'girl-6' && (
        <img className='round-img my-1' src={Girl6} alt='' />
      )}
      {icon === 'girl-7' && (
        <img className='round-img my-1' src={Girl7} alt='' />
      )}
    </Fragment>
  );
};

Avatar.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Avatar;
