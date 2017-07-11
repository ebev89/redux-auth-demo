import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import hljs from 'highlight.js';

class CodeSnippet extends React.Component {

  state = {
    code: <span />
  }


  componentDidMount() {
    const $target = $(this.refs.target);
    this.highlight($target, this.props.children);
  }

  componentDidUpdate() {
    const $target = $(this.refs.target);
    $target.html('');
    this.highlight($target, this.props.children);
  }

  highlight($target, rawCode) {
    const code = rawCode
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/ {2,}/g, ' ')
      .replace(/±/g, ' ');
    const el = $(`<code class="${this.props.language}">${code}</code>`)[0];
    hljs.highlightBlock(el);
    $target.append(el);
  }

  render() {
    const styles = require('./CodeSnippet.scss');
    return (
      <div className={styles.codeSnippet}>
        <label>Code</label>
        <pre ref="target" />
      </div>
    );
  }
}

CodeSnippet.propTypes = {
  language: PropTypes.string,
  children: PropTypes.node.isRequired
};

CodeSnippet.defaultProps = {
  language: 'javascript'
};

export default CodeSnippet;
