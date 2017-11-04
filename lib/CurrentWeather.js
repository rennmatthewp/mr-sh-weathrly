import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div>
      <div>
        <h5>location: {props.location.city}, {props.location.state}</h5>
        <h5>condition: {props.currentObservation.condition}</h5>
        <h5>temp: {props.currentObservation.temp}</h5>
        <h5>high: {props.currentObservation.high}</h5>
        <h5>low :{props.currentObservation.low}</h5>
        <h5>summary: {props.currentObservation.summary}</h5>
        <br />
      </div>
    </div>
  );
}
