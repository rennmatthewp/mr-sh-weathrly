import React from 'react';

export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      {/* <h3>{props.hour ? props.hour : props.day}</h3>
      <h3>{props.condition}</h3>
      <img src={props.image} alt=""/>
      <h3>{props.temp ? props.temp + '°F' : null}</h3>
      <h3>{props.high ? 'High: ' + props.high + '°F' : null}</h3>
      <h3>{props.low ? 'Low: ' + props.low + '°F' : null}</h3>
      <h3>{props.pop}%</h3>
      <hr/> */}
        {
          props.day && 
          <div>
            <h3>{props.day}</h3>
            <h3>{props.condition}</h3>
            <img src={props.image} alt=""/>
            <h3>{props.high}°F | {props.low}°F</h3>
            <h3>{props.pop}%</h3>
            <hr/>
          </div>
        }
        {
          props.hour &&
          <div>
            <h3>{props.hour}</h3>
            <img src={props.image} alt=""/>
            <h3>{props.temp}°F</h3>
            <h3>{props.pop}0%</h3>
            <hr/>
          </div>
        }
    </div>
  );
}
