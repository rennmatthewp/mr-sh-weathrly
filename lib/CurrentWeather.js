import React from 'react';
import PropTypes from 'prop-types';
const CurrentWeather = props => {
  let {
    location: { city, state },
    currentObservation: { condition, date, high, low, summary, temp }
  } = props;

  return (
    <div className="current-weather">
      <h1>Current Conditions For: </h1>
      <h1><span className="contrastData">{city}, {state}</span></h1>
      {/* <h3>day: {date}</h3> */}
     <h1>Condition: <span className="contrastData">{condition}</span></h1> 
      <h1>Temp: <span className="contrastData">{temp}</span></h1>
      <h1>High: <span className="contrastData">{high}</span></h1>
      <h1>Low : <span className="contrastData">{low}</span></h1>
      <h1>Summary: <span className="contrastData">{summary}</span></h1>
    </div>
  );
};

CurrentWeather.propTypes = {
  day: PropTypes.string,
  condition: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  temp: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.object,
  currentObservation: PropTypes.object
};

export default CurrentWeather;

