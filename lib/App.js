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
      newUser: true,
      currentDay: 'Friday',
    }
  }

  render() {
    return (
      <div>
        {
          this.state.newUser &&
          <div>
            <Welcome />
          </div>
        }
      </div> 
    )
  }
}