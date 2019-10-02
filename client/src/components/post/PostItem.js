import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/posts';

import { Button } from 'react-bootstrap';
import Avatar from '../layout/Avatar';

const PostItem = ({
  post: { _id, name, user, avatar, text, likes, comments, date },
  auth,
  deletePost
}) => {
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <Link to={`/profile/${user}`}>
          <Avatar icon={avatar} />
          <h4>{name}</h4>
        </Link>
        <p className='my-1'>{text}</p>
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
