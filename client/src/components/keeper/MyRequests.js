import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

import { addMyRequest, deleteMyRequest } from '../../actions/prayers';

const MyRequests = ({
  myRequests,
  addMyRequest,
  deleteMyRequest,
  auth: { user }
}) => {
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
        <div>
          <Button onClick={() => deleteMyRequest(request._id)} variant='info'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <Avatar icon={user.avatar} />
        <h2 style={{ marginTop: 10, color: '#808080' }}>My Prayer Requests</h2>
      </div>
      <Card style={{ marginBottom: '1rem' }}>
        <Card.Header>What do you need prayer for?</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formMyRequest'>
              <Form.Label>Prayer Request</Form.Label>
              <Form.Control
                as='textarea'
                placeholder=''
                name='text'
                value={formData.text}
                onChange={handleChange}
                rows='2'
                required
              />
              <Form.Text className='text-muted'>
                Your requests will be publicly displayed on your profile.
              </Form.Text>
            </Form.Group>

            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {requests}
    </Fragment>
  );
};

MyRequests.propTypes = {
  myRequests: PropTypes.array.isRequired,
  addMyRequest: PropTypes.func.isRequired,
  deleteMyRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addMyRequest, deleteMyRequest }
)(MyRequests);
