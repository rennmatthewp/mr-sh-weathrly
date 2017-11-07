import React from 'react';
import Search from './Search.js';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className={this.props.display}>
        <h1 className="weathrly-text">weathrly</h1>
        <Search setLocation={this.props.setLocation} />
      </header>
    );
  }
}

Header.propTypes = {
  hourlyData: PropTypes.object,
  display: PropTypes.string,
  setLocation: PropTypes.func
};
