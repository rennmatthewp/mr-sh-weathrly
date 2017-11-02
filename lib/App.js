import React from 'react';
// import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
// import Search from './Search.js';
// import SevenHour from './SevenHour.js';
// import TenDay from './TenDay.js';
import Header from './Header.js';
import apiKey from './.api.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        Data: null, 
    };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/q/CO/Denver.json`)
    .then( data => data.json() )
    .then( data => {
      console.log(data)
      const cleanData = {
        location: data.current_observation.display_location.full
      };
      this.setState({cleanData});
      console.log(this.state);
    })
  }

  render() {
    if (this.setState.cleanData){
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
    return null;
  }
}