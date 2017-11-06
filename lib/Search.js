import React from 'react';
import { Trie } from '@rennmatthewp/complete-me';
import cities from './cities';

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
    console.log(this.trie.suggestionsArray);

    localStorage.setItem('city', e.target.value.split(', ')[0]);
    localStorage.setItem('state', e.target.value.split(', ')[1]);
  }

  render() {
    console.log(this.trie, this.suggestionsArray);
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
