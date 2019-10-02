import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';

import People from '../../img/people.png';
import { addRequest, deleteRequest } from '../../actions/keeper';

const PrayerList = ({ prayerList, addRequest, deleteRequest }) => {
  const [formData, setFormData] = useState({
    name: '',
    text: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRequest(formData);
    setFormData({
      name: '',
      text: ''
    });
  };

  const requests = prayerList.map(request => (
    <div className='card my-1' key={request._id}>
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
      <div style={{ textAlign: 'center' }}>
        <img className='my-1' style={{ width: '100px' }} src={People} alt='' />
        <h2 style={{ marginTop: 10, color: '#808080' }}>Prayer List</h2>
      </div>
      <Card>
        <Card.Header>Who are you praying for?</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Group controlId='formUserName'>
              <Form.Control
                placeholder=''
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formUserRequest'>
              <Form.Label>Prayer Request</Form.Label>
              <Form.Control
                placeholder=''
                name='text'
                value={formData.text}
                onChange={handleChange}
                required
              />
              <Form.Text className='text-muted'>
                This will be added to your private list of prayer requests
              </Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {requests}
    </Fragment>
  );
};

PrayerList.propTypes = {
  prayerList: PropTypes.array.isRequired,
  addRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { addRequest, deleteRequest }
)(PrayerList);
