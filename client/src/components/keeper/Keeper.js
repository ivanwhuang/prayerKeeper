import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMyKeeper } from '../../actions/keeper';
import PrayerList from './PrayerList';
import MyRequests from './MyRequests';
import Alert from '../layout/CustomAlert';

import Spinner from '../layout/Spinner';

const Keeper = ({
  getMyKeeper,
  auth,
  keeper: { prayerList, loading },
  prayers: { prayerRequests }
}) => {
  useEffect(() => {
    getMyKeeper();
  }, [getMyKeeper]);

  return loading || prayerList === null ? (
    <Spinner />
  ) : (
    <Container className='keeper'>
      <Alert />
      <div style={{ textAlign: 'center' }}>
        {!auth.loading && <h1>{auth.user.name}'s Keeper</h1>}
      </div>
      <Row>
        <Col lg={true}>
          <MyRequests myRequests={prayerRequests} />
        </Col>
        <Col lg={true}>
          <PrayerList prayerList={prayerList} />
        </Col>
      </Row>
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
  keeper: state.keeper,
  prayers: state.prayers
});

export default connect(
  mapStateToProps,
  { getMyKeeper }
)(Keeper);
