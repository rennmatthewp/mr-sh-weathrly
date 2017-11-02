// will be super for ten and seven hour
import React from 'react';

export default function Card(props) {
  return (
    <div>
      <p>{props.hour.hour}</p>
      <h4>{props.hour.condition}</h4>
      <img className="hour-icon" src={props.hour.img} />
      <h2>{props.hour.temp}</h2>
    </div>
  );
}
