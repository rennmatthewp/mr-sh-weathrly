import React from 'react';
import PropTypes from 'prop-types';
const CurrentWeather = props => {
  let {
    location: { city, state },
    currentObservation: { condition, date, high, low, summary, temp }
  } = props;

  return (
    <div className="current-weather">
      <h1>Current Conditions: </h1>
      <br />
      <h3> {city}, {state}</h3>
      <h3>day: {date}</h3>
      <h3>condition: {condition}</h3>
      <h3>temp: {temp}</h3>
      <h3>high: {high}</h3>
      <h3>low :{low}</h3>
      <h3>summary: {summary}</h3>
    </div>
  );
};

CurrentWeather.propTypes = {
  day: PropTypes.string,
  condition: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  temp: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.object,
  currentObservation: PropTypes.object
};

export default CurrentWeather;

