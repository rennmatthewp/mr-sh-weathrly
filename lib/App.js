import React from 'react';
// import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
// import Search from './Search.js';
// import SevenHour from './SevenHour.js';
// import TenDay from './TenDay.js';
import Welcome from './Welcome.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: false,
      currentWeather: {
        now: 'Friday',
        condition: 'Sunny and Windy',
        temp: '49 F',
        high: '50 F',
        low: '32 F',
        summary:
          'Cloudy to begin the day with the sun poking out in the afternoon'
      },
      location: 'Denver'  
    };
  }

  render() {
    return (
      <div>
        {this.state.newUser && (
          <div>
            <Welcome />
          </div>
        )}

        {!this.state.newUser && (
          <div>
            <CurrentWeather
              now={this.state.currentWeather.currentDay}
              location={this.state.currentWeather.location}
              condition={this.state.currentWeather.currentCondition}
              temp={this.state.currentWeather.temp}
              high={this.state.currentWeather.high}
              low={this.state.currentWeather.low}
              summary={this.state.currentWeather.summary}
            />
          </div>
        )}
      </div>
    );
  }
}
