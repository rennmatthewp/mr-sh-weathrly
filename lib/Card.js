import React from 'react';

const Card = props => {
  return (
    <div className="card">
      {props.day && (
        <div>
          <h3>{props.day}</h3>
          <h3>{props.condition}</h3>
          <img src={props.image} alt="" />
          <h3>
            {props.high}°F | {props.low}°F
          </h3>
          <h3>{props.pop}%</h3>
        </div>
      )}
      {props.hour && (
        <div>
          <h3>{props.hour}</h3>
          <img src={props.image} alt="" />
          <h3>{props.temp}°F</h3>
          <h3>{props.pop}0%</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
