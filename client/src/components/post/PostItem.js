import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/posts';

import { Button } from 'react-bootstrap';

const PostItem = ({
  post: { _id, name, user, text, likes, comments, date },
  auth,
  deletePost
}) => {
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{text}</p>
        <p class='post-date'>
          Posted on <Moment format='YYYY/MM//DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <Button onClick={() => deletePost(_id)} variant='info'>
            Delete
          </Button>
        )}
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
