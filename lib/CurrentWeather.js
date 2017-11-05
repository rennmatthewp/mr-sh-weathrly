import React from 'react';
const CurrentWeather = props => {
  let {
    location: { city, state },
    currentObservation: { condition, date, high, low, summary, temp }
  } = props;

  return (
    <div>
      <div>
        <h5>location: {city}, {state}</h5>
        <h5>day: {date}</h5>
        <h5>condition: {condition}</h5>
        <h5>temp: {temp}</h5>
        <h5>high: {high}</h5>
        <h5>low :{low}</h5>
        <h5>summary: {summary}</h5>
        <br />
      </div>
    </div>
  );
};

export default CurrentWeather;
