import React from 'react';
// import Card from './Card.js';
// import CurrentWeather from './CurrentWeather.js';
// import Search from './Search.js';
// import SevenHour from './SevenHour.js';
// import TenDay from './TenDay.js';
import Welcome from './Welcome.js';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentDay: 'Friday',
    }
  }

  render() {
    return (
      <div>
        <Welcome userName={this.props.userName} email={this.props.email} currentDay={this.state.currentDay}/>
        <h1>{this.props.userName}</h1>
        <h2>Today is: {this.state.currentDay}</h2>
      </div> 
    )
  }
}