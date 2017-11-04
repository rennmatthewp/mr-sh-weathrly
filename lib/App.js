import React from 'react';
import filterData from './cleanData';
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
      currentLocation: null,
      currentObservation: null,
      hourlyForecast: [],
      dailyForecast: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }
  
  getData() {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/cgit stonditions/hourly/forecast10day/q/CO/Denver.json`
    )
      .then(data => data.json())
      .then(data => {
  
        const cleanData = filterData(data)
        console.log('state: ', this.state)
      
        console.log('clean data:  ', cleanData)
        this.setState(cleanData)
        console.log('set state: ', this.state)
        
      })
      .catch((error) => alert('Error retreiving data, was a valid location entered?', error))
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
              <Daily dailyData={this.state.dailyArray} />
            </div>
          )}
        </div>
      )
    }
    return null;
  }
}
