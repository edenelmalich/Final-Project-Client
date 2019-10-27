import React from 'react';
import propTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return <div></div>;
};

Alert.propTypes = {
  alerts: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alertReducer
});
export default connect(mapStateToProps)(Alert);
