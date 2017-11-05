import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App unit testing', () => {
  
  it('It should have a default state of newUser set to true', () => {
    const app = shallow(<App />);

    expect( app.state('newUser') ).toEqual(true);
  })

  it('It should have a default states of currentLocation and currentObservation set to null', () => {
    const app = shallow(<App />);

    expect( app.state('currentLocation') ).toEqual(null);
    expect( app.state('currentObservation') ).toEqual(null);    
  })
  
  it('It should have a default states of currentLocation and currentObservation set to null', () => {
    const app = shallow(<App />);

    expect( app.state('currentLocation') ).toEqual(null);
    expect( app.state('currentObservation') ).toEqual(null);    
  })
  
  it('It should have a default states of hourlyForcast and dailyForcast which are empty arrays', () => {
    const app = shallow(<App />);

    expect( app.state('hourlyForecast').length ).toEqual(0);
    expect( app.state('dailyForecast').length ).toEqual(0);
  })

  it.skip('should render App', () => {
    const app = shallow(<App />);
    
    expect(app.find('.App').length).toEqual(1);
  });

  it.skip('should render CurrentWeather, Hourly and Daily', () => {
    const app = shallow(<App />);

    expect(app.find('CurrentWeather').length).toEqual(1);
    expect(app.find('Hourly').length).toEqual(1);
    expect(app.find('Daily').length).toEqual(1);
  });
  
})