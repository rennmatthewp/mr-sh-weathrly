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
        currentWeather: null,
        // TenDay: null,
        // sevenDay:null,
    };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/q/CO/Denver.json`)
    .then( data => data.json() )
    .then( data => {
      // console.log(data)
      const currentWeather = {
        city: data.location.city,
        day: data.forecast.txt_forecast.forecastday[0].title,
        condition: data.current_observation.weather,
        temp: data.current_observation.temp_f,
        wind: data.current_observation.wind_mph,
        windDirection: data.current_observation.wind_dir,
        visibilty: data.current_observation.visibility_mi,
        humidity: data.current_observation.relative_humidity,
        summary: data.forecast.txt_forecast.forecastday[0].fcttext,
        expectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        expectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      }
      console.log(currentWeather)
      this.setState({currentWeather});
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