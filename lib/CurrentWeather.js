import React from 'react';
import PropTypes from 'prop-types';
const CurrentWeather = props => {
  let {
    location: { city, state },
    currentObservation: { condition, date, high, low, summary, temp }
  } = props;
  return (
    <div className="current-weather">
      <h3>Current Conditions For: </h3>
      <h3>
        <span className="contrastData">
          {city}, {state}
        </span>
      </h3>
      {/* <h3>day: {date}</h3> */}
      <h3>
        Condition: <span className="contrastData">{condition}</span>
      </h3>
      <h3>
        Temp: <span className="contrastData">{temp}</span>
      </h3>
      <h3>
        High: <span className="contrastData">{high}</span> | Low :
        <span className="contrastData">{low}</span>
      </h3>
      <h3>
        Summary: <span className="contrastData">{summary}</span>
      </h3>
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
