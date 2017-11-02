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
      newUser: false,
      Data: null,
      currentWeather: null,
      sevenHour: null,
      // TenDay: null,
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
      this.setState({currentWeather});
    })
  }

  // mamking two calls may refactor into one call 
  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/q/CO/Denver.json`)
    .then( data => data.json() )
    .then( data => {
      // console.log(data)
      
      const sevenHour = {

        hourOne : {
          hour: data.hourly_forecast[0].FCTTIME.civil,
          condition: data.hourly_forecast[0].condition,
          //img below is returning a .gif
          img: data.hourly_forecast[0].icon_url,
          temp: data.hourly_forecast[0].temp.english,
        },

        hourTwo : {
          hour: data.hourly_forecast[1].FCTTIME.civil,
          condition: data.hourly_forecast[1].condition,
          img: data.hourly_forecast[1].icon_url,
          temp: data.hourly_forecast[1].temp.english,
        },

        hourThree : {
          hour: data.hourly_forecast[2].FCTTIME.civil,
          condition: data.hourly_forecast[2].condition,
          img: data.hourly_forecast[2].icon_url,
          temp: data.hourly_forecast[2].temp.english,
        },

        hourFour : {
          hour: data.hourly_forecast[3].FCTTIME.civil,
          condition: data.hourly_forecast[3].condition,
          img: data.hourly_forecast[3].icon_url,
          temp: data.hourly_forecast[3].temp.english,
        },
        
        hourFive : {
          hour: data.hourly_forecast[4].FCTTIME.civil,
          condition: data.hourly_forecast[4].condition,
          img: data.hourly_forecast[4].icon_url,
          temp: data.hourly_forecast[4].temp.english,
        },

        hourSix : {
          hour: data.hourly_forecast[5].FCTTIME.civil,
          condition: data.hourly_forecast[5].condition,
          img: data.hourly_forecast[5].icon_url,
          temp: data.hourly_forecast[5].temp.english,
        },
        
        hourSeven : {
          hour: data.hourly_forecast[6].FCTTIME.civil,
          condition: data.hourly_forecast[6].condition,
          img: data.hourly_forecast[6].icon_url,
          temp: data.hourly_forecast[6].temp.english,
        }
      }      
      this.setState({sevenHour});
      console.log(this.state)
    })
  }



  render() {
    if (this.state.currentWeather){
      return (
        <div>
          {this.state.newUser && (
            <div>
              <Header />
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
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}