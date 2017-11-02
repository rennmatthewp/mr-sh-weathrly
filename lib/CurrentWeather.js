import React from 'react';
import apiKey from './.api.js';

export default function CurrentWeather(props) {
  console.log(props)
  
  return (
    <div>
      <h5>{props.now}</h5>
      <h5>{props.location}</h5>
      <h5>{props.condition}</h5>
      <h5>{props.temp}</h5>
      <h5>{props.high}</h5>
      <h5>{props.low}</h5>
      <h5>{props.summary}</h5>
    </div>
  );
}
