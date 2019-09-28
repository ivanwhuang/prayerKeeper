import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRequest } from '../../actions/keeper';

const AddRequestForm = ({ addRequest }) => {
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
    // setFormData({
    //   name: '',
    //   text: ''
    // });
  };

  return (
    <div class='post-form'>
      <div class='bg-primary p'>
        <h3>Add Prayer Request</h3>
      </div>
      <form class='form my-1' onSubmit={handleSubmit}>
        <textarea
          name='name'
          placeholder='Who do you want to pray for?'
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='What do you want to pray about?'
          onChange={handleChange}
          required
        ></textarea>
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

AddRequestForm.propTypes = {
  addRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { addRequest }
)(AddRequestForm);
