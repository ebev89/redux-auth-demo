import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dismissRequestTestErrorModal } from '../actions/request-test-buttons';

class RequestTestErrorModal extends React.Component {

  close() {
    this.props.dispatch(dismissRequestTestErrorModal());
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.close.bind(this)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajax Request Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Request to {this.props.url} failed.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

RequestTestErrorModal.propTypes = {
  show: PropTypes.bool,
  url: PropTypes.string,
  dispatch: PropTypes.func,
};

RequestTestErrorModal.defaultProps = {
  show: false
};

export default connect(({ demoButtons }) => ({
  show: demoButtons.get('showErrorModal'),
  url: demoButtons.get('lastRequestUrl')
}))(RequestTestErrorModal);
