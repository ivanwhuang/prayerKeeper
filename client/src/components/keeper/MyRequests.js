import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addMyRequest, deleteMyRequest } from '../../actions/prayers';

const MyRequests = ({ myRequests, addMyRequest, deleteMyRequest }) => {
  const [formData, setFormData] = useState({
    text: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMyRequest(formData);
    setFormData({
      text: ''
    });
  };

  const requests = myRequests.map(request => (
    <div className='card' key={request._id}>
      <div className='card-body'>
        <p className='card-text'>{request.text}</p>
        <Button onClick={() => deleteMyRequest(request._id)} variant='info'>
          Delete
        </Button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <h2>My Prayer Requests</h2>
      <div class='post-form'>
        <div class='bg-primary p'>
          <h3>Add A Prayer Request</h3>
        </div>
        <form class='form my-1' onSubmit={handleSubmit}>
          <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='What do you need prayer for?'
            onChange={handleChange}
            required
          ></textarea>
          <input type='submit' class='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
      {requests}
    </Fragment>
  );
};

MyRequests.propTypes = {
  myRequests: PropTypes.array.isRequired,
  addMyRequest: PropTypes.func.isRequired,
  deleteMyRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { addMyRequest, deleteMyRequest }
)(MyRequests);
