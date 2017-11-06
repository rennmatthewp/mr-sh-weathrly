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

  setLocation() {
    this.setState({location: JSON.parse(localStorage.getItem('location'))});
    
    this.getData()
  }
  
  getData() {
    if (JSON.parse(localStorage.getItem('location')) !== null) {
      console.log('inside')
      let testLocation = JSON.parse(localStorage.getItem('location'));
      let locationArray = testLocation.split(', ');
      console.log(testLocation);
      let url = `http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/hourly/forecast10day/q/${locationArray[1]}/${locationArray[0]}.json`;
      console.log(url)
      fetch(url)
      .then(data => data.json())
      .then(data => {
        const cleanData = filterData(data);
        
        this.setState(cleanData);
        
      })
      .catch(error => this.setState({ error: true }));
    }
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

        {currentObservation && (
          <div>
            <Header setLocation={this.setLocation} display='header' />
            <CurrentWeather
              location={location}
              currentObservation={currentObservation}
            />
            <Daily dailyData={dailyForecast.slice(0, 7)} />
            <Hourly hourlyData={hourlyForecast.slice(0, 12)} />
          </div>
        )}
        {!location && <Header 
          display='welcome' 
          setLocation={this.setLocation} 
        />}

        {error && <h1>404 File Noped Out</h1>}
      </div>
    );
  }
}
