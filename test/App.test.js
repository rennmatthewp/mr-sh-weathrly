import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

global.localStorage = {
  
      getItem(key) {
        if (!global.localStorage[key]){
          return null;
        } 
        return JSON.stringify(global.localStorage[key]);
      },
      setItem (key, value) {
        global.localStorage[key] = value;
      }
  };

describe('App unit testing', () => {
  
  it('should render App', () => {
    const app = shallow(<App />);
    
    expect(app).toBeDefined;
  });

  it('It should have a default state of location set to null', () => {
    const app = shallow(<App />);

    expect( app.state('location') ).toEqual(null);
  })

  it('It should render Header when location is set to null', () => {
    const app = shallow(<App />);

    expect(app.find('Header').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(0);
  });

  it('should render CurrentWeather, Hourly and Daily when there is a location in state', () => {
    const app = shallow(<App />);
    expect(app.find('Header').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(0);
    expect(app.find('Hourly').length).toEqual(0);
    expect(app.find('Daily').length).toEqual(0);

    app.setState({currentObservation: {}, hourlyForecast: [], dailyForecast: []})

    expect(app.find('Header').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(1);
    expect(app.find('Hourly').length).toEqual(1);
    expect(app.find('Daily').length).toEqual(1);
  });
  
})