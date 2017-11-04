import React from 'react';

export default function Card(props) {
  console.log(props)
  return (
    <div>
      
      {
      props.hour &&
      <div>
        <img className="hour-icon" src={props.hour.img} />
      <h2>{props.hour.temp}</h2> 
      {<h4>{props.hour.condition}</h4>}
      {<p>{props.hour.hour}</p>}
      </div>
      }
      {
        !props.hour &&
        <div>
          <h2>{props.day.day}</h2>
          <img src={props.day.img} alt=""/>
          <h3>{props.day.low}</h3>
          <h3>{props.day.high}</h3>
        </div>
      }
    </div>
  );
}
