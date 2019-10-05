import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ alerts }) => {
  const displayAlerts =
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <Alert key={alert.id} variant={alert.alertType}>
        <h6>{alert.msg}</h6>
      </Alert>
    ));
  return <Fragment>{displayAlerts}</Fragment>;
};

CustomAlert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(CustomAlert);
