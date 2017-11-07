import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Daily = props => {
  return (
    <div>
      <div className="daily">
        <h1>Daily Forecast: </h1>
        {props.dailyData.map((day, dayIndex) => {
          return (
            <Card
              key={dayIndex}
              day={day.date}
              condition={day.condition}
              image={day.image}
              pop={day.pop}
              high={day.high}
              low={day.low}
            />
          );
        })}
      </div>
    </div>
  );
};

Daily.propTypes = {
  dailyData: PropTypes.array
  // pop: PropTypes.string
};

export default Daily;
