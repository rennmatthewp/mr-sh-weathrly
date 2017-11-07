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

    localStorage.setItem('city', e.target.value.split(', ')[0]);
    localStorage.setItem('state', e.target.value.split(', ')[1]);
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

        <button onClick={this.props.setLocation}>Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  setLocation: PropTypes.func
};