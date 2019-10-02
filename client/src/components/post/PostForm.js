import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';

import { Card, Form, Button } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    text: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      text: ''
    });
  };

  return (
    <Fragment>
      <Card>
        <Card.Header>Anything on Your Mind? </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formNewPost'>
              <Form.Label>Create a new post</Form.Label>
              <Form.Control
                value={formData.text}
                placeholder=''
                name='text'
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
