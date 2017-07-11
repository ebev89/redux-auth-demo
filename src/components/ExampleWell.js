import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

class ExampleWell extends React.Component {

  render() {
    return (
      <div>
        <label>Example</label>
        <Panel bsStyle="default">
          {this.props.children}
        </Panel>
      </div>
    );
  }
}

ExampleWell.propTypes = {
  children: PropTypes.node.isRequired
};

export default ExampleWell;

