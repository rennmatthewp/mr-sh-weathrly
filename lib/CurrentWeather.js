import React from 'react';
const CurrentWeather = props => {
  let {
    location: { city, state },
    currentObservation: { condition, date, high, low, summary, temp }
  } = props;

  return (
    <div>
      <div className="current-weather">
        <h3>location: {city}, {state}</h3>
        <h3>day: {date}</h3>
        <h3>condition: {condition}</h3>
        <h3>temp: {temp}</h3>
        <h3>high: {high}</h3>
        <h3>low :{low}</h3>
        <h3>summary: {summary}</h3>
      </div>
    </div>
  );
};

export default CurrentWeather;
