import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';

import { updateAvatar } from '../../actions/auth';

import Spinner from '../layout/Spinner';

import Avatar from '../layout/Avatar';

const EditAvatar = ({ auth: { user, loading }, updateAvatar, history }) => {
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSubmit = e => {
    e.preventDefault();
    updateAvatar({ avatar }, history);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <Card
        className='currentAvatar'
        style={{
          width: '300px',
          margin: '1rem auto',
          textAlign: 'center',
          borderWidth: '2px',
          borderColor: '#1e1e1e'
        }}
      >
        <Card.Header as='h5' className='bg-dark'>
          Current Avatar Icon
        </Card.Header>
        <Card.Body>
          <Avatar icon={avatar} />
          <h3>{user.name}</h3>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center' }}>
        <Button variant='info' onClick={handleSubmit}>
          Submit
        </Button>

        <Link className='btn btn-dark my-1' to='/myProfile'>
          Go Back
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <button className='avatarCard bg-secondary'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-1')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-1' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-success'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-2')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-2' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-danger'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-3')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-3' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-warning'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-4')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-4' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-salmon'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-5')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-5' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-info'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-6')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-6' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-purple'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('boy-7')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='boy-7' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-secondary'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-1')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-1' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-success'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-2')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-2' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-danger'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-3')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-3' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-warning'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-4')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-4' />
            </Card.Body>
          </Card>
        </button>

        <button class='avatarCard bg-salmon'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-5')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-5' />
            </Card.Body>
          </Card>
        </button>

        <button class='avatarCard bg-info'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-6')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-6' />
            </Card.Body>
          </Card>
        </button>

        <button className='avatarCard bg-purple'>
          <Card
            className='bg-light avatar-card-icon p-1 my-1'
            onClick={() => setAvatar('girl-7')}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Avatar icon='girl-7' />
            </Card.Body>
          </Card>
        </button>
      </div>
    </Container>
  );
};

EditAvatar.propTypes = {
  auth: PropTypes.object.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { updateAvatar }
)(withRouter(EditAvatar));
