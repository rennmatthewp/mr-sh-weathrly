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
      // newUser: false,
      // location: location.city,
      // currentObservation: null,
      // hourlyForecast: [],
      // dailyForecast: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/forecast10day/q/CO/Denver.json`
    )
      .then(data => data.json())
      .then(data => {
        const cleanData = filterData(data);

        this.setState(cleanData);
      })
      .catch(error => this.setState({ error: true }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let {
      currentObservation,
      dailyForecast,
      error,
      hourlyForecast,
      location
    } = this.state;
    return (
      <div>
        {/* <Header /> */}

        {location && (
          <div>
            <CurrentWeather
              location={location}
              currentObservation={currentObservation}
            />
            <Daily dailyData={dailyForecast.slice(0, 7)} />
            <Hourly hourlyData={hourlyForecast.slice(0, 12)} />
          </div>
        )}

        {error && <h1>404 File Noped Out</h1>}
      </div>
    );
  }
}
