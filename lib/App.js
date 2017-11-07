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
    this.state = {
      location: JSON.parse(localStorage.getItem('location')) || null
    };
    this.getData = this.getData.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    this.setState({ location });

    this.getData(location);
  }

  getData(location) {
    const locationArray = location.split(', ');
    //eslint-disable-next-line max-len
    const url = `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/forecast10day/q/${locationArray[1].toUpperCase()}/${locationArray[0]}.json`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        
        const cleanData = filterData(data);

        localStorage.setItem('location', JSON.stringify(location));

        this.setState(cleanData);
      })
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    const { location } = this.state;

    location && this.getData(location);
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
        {currentObservation && (
          <div>
            <Header setLocation={this.setLocation} display="header" />
            <div className="top">
              <CurrentWeather
                location={location}
                currentObservation={currentObservation}
              />
              <Hourly hourlyData={hourlyForecast.slice(0, 12)} />
            </div>
            <Daily dailyData={dailyForecast.slice(0, 7)} />
          </div>
        )}
        {!location && (
          <Header display="welcome" setLocation={this.setLocation} />
        )}

        {error && <h1>404 File Noped Out</h1>}
      </div>
    );
  }
}
