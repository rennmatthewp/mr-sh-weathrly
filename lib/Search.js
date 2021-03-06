import React from 'react';
import { Trie } from '@rennmatthewp/complete-me';
import cities from './cities';
import PropTypes from 'prop-types';
import Suggestions from './Suggestions'

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
    if (
      e.target.value.length > 2 &&
      e.target.value !== this.suggestionsArray[0]
    ) {
      this.suggestionsArray = this.trie.suggest(e.target.value);
    }
    this.setState({
      inputVal: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { inputVal } = this.state;

    inputVal = inputVal.toLowerCase();

    if (this.suggestionsArray[0] && 
      this.suggestionsArray[0].includes(inputVal)) {
      this.props.setLocation(this.suggestionsArray[0]);
      this.setState({ inputVal: '' });
    } else {
      alert('City not found in database!')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="search">
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Search Locations..."
        />
        <button>Search</button>
        <Suggestions array={this.suggestionsArray} key={Date.now()}/> 
      </form>
    );
  }
}

Search.propTypes = {
  setLocation: PropTypes.func
};
