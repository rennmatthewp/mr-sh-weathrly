import React from 'react';
import filterData from './cleanData';
import CurrentWeather from './CurrentWeather.js';
import Hourly from './Hourly.js';
import Daily from './Daily.js';
import Header from './Header.js';
import apiKey from './.api.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getData = this.getData.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation() {
    console.log('set location running');
    this.getData();
  }

  getData() {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/forecast10day/q/${localStorage.state}/${localStorage.city}.json`
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

      <div className="main-page">

        {location && (
          <div>
            <div className="top">
              <CurrentWeather
                location={location}
                currentObservation={currentObservation}
              />
              <Daily dailyData={dailyForecast.slice(0, 7)} />
            </div>
            <Hourly hourlyData={hourlyForecast.slice(0, 12)} />
          </div>
        )}
        {!location && <Header setLocation={this.setLocation} />}

        {error && <h1>404 File Noped Out</h1>}
      </div>
    );
  }
}
