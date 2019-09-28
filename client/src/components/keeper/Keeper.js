import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMyKeeper } from '../../actions/keeper';
import AddRequestForm from './AddRequestForm';
import PrayerList from './PrayerList';
import Alert from '../layout/CustomAlert';

import Spinner from '../layout/Spinner';

const Keeper = ({ getMyKeeper, auth, keeper: { prayerList, loading } }) => {
  useEffect(() => {
    getMyKeeper();
  }, [getMyKeeper]);

  return loading || prayerList === null ? (
    <Spinner />
  ) : (
    <Container>
      <Alert />
      <AddRequestForm />
      <PrayerList prayerList={prayerList} />
    </Container>
  );
};

Keeper.propTypes = {
  getMyKeeper: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  keeper: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  keeper: state.keeper
});

export default connect(
  mapStateToProps,
  { getMyKeeper }
)(Keeper);
