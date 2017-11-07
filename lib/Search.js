import React from 'react';
import { Trie } from '@rennmatthewp/complete-me';
import cities from './cities';
import PropTypes from 'prop-types';


export default class Search extends React.Component {
  constructor() {
    super();

    this.trie = new Trie();
    this.trie.populate(cities.data);
    this.suggestionsArray = [];
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      inputVal: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
    });

    if (e.target.value.length > 2) {
      this.suggestionsArray = this.trie.suggest(e.target.value);
    }
  }

  handleSubmit() {
    console.log('submitting')
    localStorage.setItem('location', JSON.stringify(this.state.inputVal));
    this.props.setLocation();
    this.state.inputVal = '';
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Search Locations..."
        />

        <button onClick={this.handleSubmit.bind(this)}>Search</button>
      </div>
    );
  } 
}


Search.propTypes = {
  setLocation: PropTypes.func
};
