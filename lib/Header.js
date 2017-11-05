import React from 'react';
import Search from './Search.js';

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <header className="welcome">
        <h1>weathrly</h1>
        <Search setLocation={this.props.setLocation}/>
      </header>
    );
  }
}