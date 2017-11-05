import React from 'react';
import { Trie } from '@rennmatthewp/complete-me';

export default class Search extends React.Component {
  constructor () {
    super();

    this.state = {
      inputVal: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      inputVal: event.target.value
    })
    localStorage.setItem('city', event.target.value.split(', ')[0])    
    localStorage.setItem('state', event.target.value.split(', ')[1])
  }

  render () {
    return (
      <div className="search">
        <input 
          type="text" 
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Enter your location" />

        <button onClick = {this.props.setLocation}>Search</button>
      </div>
    )
  }
}