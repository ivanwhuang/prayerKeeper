import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deleteRequest } from '../../actions/keeper';

const PrayerList = ({ prayerList, deleteRequest }) => {
  const requests = prayerList.map(request => (
    <div className='card' key={request._id}>
      <div className='card-body'>
        <h5 className='card-title'>{request.name}</h5>
        <p className='card-text'>{request.text}</p>
        <Button onClick={() => deleteRequest(request._id)} variant='info'>
          Delete
        </Button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <h1>My Keeper</h1>
      {requests}
      {console.log(prayerList.length)}
    </Fragment>
  );
};

PrayerList.propTypes = {
  prayerList: PropTypes.array.isRequired,
  deleteRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteRequest }
)(PrayerList);
