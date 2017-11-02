import React from 'react';
// import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
// import Search from './Search.js';
import Hourly from './Hourly.js';
import Daily from './Daily.js';
import Header from './Header.js';
import apiKey from './.api.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: false,
      Data: null,
      currentWeather: null,
      hourlyArray: [],
      dailyArray: []
    };
  }

  componentDidMount() {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/forecast10day/q/CO/Denver.json`
    )
      .then(data => data.json())
      .then(data => {
        // console.log(data);

        const currentWeather = {
          city: data.location.city,
          day: data.forecast.txt_forecast.forecastday[0].title,
          summary: data.forecast.txt_forecast.forecastday[0].fcttext,
          condition: data.current_observation.weather,
          temp: data.current_observation.temp_f,
          wind: data.current_observation.wind_mph,
          windDirection: data.current_observation.wind_dir,
          visibilty: data.current_observation.visibility_mi,
          humidity: data.current_observation.relative_humidity,
          expectedHigh:
            data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          expectedLow:
            data.forecast.simpleforecast.forecastday[0].low.fahrenheit
        };

        const hourlyArray = data.hourly_forecast.splice(0, 12).map( (hour) => {
          return {
            hour: hour.FCTTIME.civil,
            condition: hour.condition,
            img: hour.icon_url,
            temp: hour.temp.english
          }
        })

        const dailyArray = data.forecast.simpleforecast.forecastday.splice(1, 7).map( (day) => {
          return{
            day: day.date.weekday,
            img: day.icon_url,
            low: day.low.fahrenheit,
            high: day.high.fahrenheit
          }
        })

        this.setState({ currentWeather, hourlyArray, dailyArray });
        // console.log(this.state);
      });
  }

  render() {
    if (this.state.currentWeather) {
      return (
        <div>
          {this.state.newUser && (
            <div>
              {<Header />}
            </div>
          )}

          {!this.state.newUser && (
            <div>
              <CurrentWeather
                now={this.state.currentWeather.day}
                location={this.state.currentWeather.city}
                condition={this.state.currentWeather.condition}
                temp={this.state.currentWeather.temp}
                high={this.state.currentWeather.expectedHigh}
                low={this.state.currentWeather.expectedLow}
                summary={this.state.currentWeather.summary}
              />
              <Hourly hourlyData={this.state.hourlyArray} />
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}
