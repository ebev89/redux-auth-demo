import React from 'react';
import PropTypes from 'prop-types';
import RequestTestSuccessModal from './RequestTestSuccessModal';
import RequestTestErrorModal from './RequestTestErrorModal';
import * as BSTheme from 'redux-auth/bootstrap-theme';
import * as DefaultTheme from 'redux-auth';
import * as MUITheme from 'redux-auth/material-ui-theme';
import { connect } from 'react-redux';

class GlobalComponents extends React.Component {

  render() {
    let Theme;

    switch (this.props.theme) {
      case 'default':
        Theme = DefaultTheme;
        break;
      case 'bootstrap':
        Theme = BSTheme;
        break;
      default:
        Theme = MUITheme;
        break;
    }

    return (
      <div>
        <Theme.AuthGlobals />
        <RequestTestSuccessModal />
        <RequestTestErrorModal />
      </div>
    );
  }
}

GlobalComponents.propTypes = {
  theme: PropTypes.string,
};

export default connect(({ demoUi }) => ({
  theme: demoUi.get('theme'),
}))(GlobalComponents);
