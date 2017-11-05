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
        <Search filterFunction={this.filterData}/>
      </header>
    );
  }
}

      // <form action="submit">
      //   {<input type="text" placeholder="Search Locations" />}
      //   <button>Search</button>
      //  </form>