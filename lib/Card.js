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
        456
            {/*<h4>{props.hour.condition}</h4>
              <p>{props.hour}</p>
            */}
            </div>
      }
      {
        !props.hour &&
        <div> 123 
          {props.day.day}
          {props.day.low}
          {props.day.high}
        </div>

      }
    </div>
  );
}
