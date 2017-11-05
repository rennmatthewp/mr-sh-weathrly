import React from 'react';

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

    this.props.filterFunction(event.target.value);
  }

  render () {
    return (
      <div className="search">
        <input 
          type="text" 
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Enter you city or zipcode" />

        <button>Search</button>
      </div>
    )
  }
}