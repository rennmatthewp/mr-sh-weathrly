import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      {props.day && (
        <div className="daily-card">
          <h2>{props.day}</h2>
          <h3>{props.condition}</h3>
          <img src={props.image} alt="" />
          <h3>
            {props.high}°F | {props.low}°F
          </h3>
          <h3>{props.pop}%</h3>
        </div>
      )}
      {props.hour && (
        <div className="hourly-card">
          <h3>{props.hour}</h3>
          <img src={props.image} alt="" />
          <h3>{props.temp}°F</h3>
          <h3>Chance of Precipitation: {props.pop}%</h3>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  day: PropTypes.string,
  condition: PropTypes.string,
  image: PropTypes.string,
  high: PropTypes.string,
  //pop: PropTypes.string,
  low: PropTypes.string,
  hour: PropTypes.string,
  temp: PropTypes.string
};

export default Card;