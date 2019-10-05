import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: '100px',
          margin: 'auto',
          display: 'block',
          marginTop: '10rem'
        }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;
